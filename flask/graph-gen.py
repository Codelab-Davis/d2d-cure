from flask import Flask, request, send_file, jsonify
import matplotlib
from flask_cors import CORS
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import io
import re 
from math import ceil, sqrt
from numpy import diag, sqrt, linspace, inf
from scipy.optimize import curve_fit 
from matplotlib.pyplot import figure, plot, ylabel, xlabel, title, savefig, gca, legend
import pandas as pd
from werkzeug.utils import secure_filename
import os
import base64
from io import BytesIO
from sys import argv
from statistics import mean
from numpy import exp, sqrt, diag, linspace
from scipy.optimize import curve_fit 
from matplotlib.pyplot import figure, plot, ylim, ylabel, xlabel, title, savefig, legend
app = Flask(__name__)
CORS(app)

# Directory where uploaded files will be saved
GEL_UPLOAD_FOLDER = 'gel_uploads'
app.config['GEL_UPLOAD_FOLDER'] = GEL_UPLOAD_FOLDER

CSV_UPLOAD_FOLDER = 'csv_uploads'
app.config['CSV_UPLOAD_FOLDER'] = CSV_UPLOAD_FOLDER

# Ensure the upload folder exists
os.makedirs(GEL_UPLOAD_FOLDER, exist_ok=True)
os.makedirs(CSV_UPLOAD_FOLDER, exist_ok=True)



# Turn debug mode on or off
debug_mode = False

# Functions to fit and/or plot
def kobs_f(S, kcat, KM):
    '''The Michaelis-Menton-like equation.'''
    return (kcat * S) / (KM + S)

def high_KM_kobs_f(S, kcat_over_KM):
    '''The linear equation for systems where KM is very large.'''
    return kcat_over_KM * S

def inv_v(inv_S, inv_vmax, KM):
    '''The Lineweaver-Burk plot equation'''
    return KM * inv_vmax * inv_S + inv_vmax

@app.route('/plottemp', methods=['POST'])
def plottemp():
    # Turn debug mode on or off
    debug_mode = False

    # Function from the original curve-fitting script
    # This is the logistic function.
    # The numerator is the maximum value of curve, thus normalizing the slope data.
    # k is the steepness of the curve and should be a negative value for slopes that decrease as temperature increases.
    # T50 is the T of the sigmoid's midpoint.
    def func(T, k, T50):
        return 1 / (1 + exp(-k * (T - T50)))

    '''
    def func_prime(T, k, T50):
        return 1 * k * exp(k * (T + T50)) / ((exp(k * T) + exp(k * T50))**2)
    '''

    def line(x, a, b):
        return a * x + b

    if 'temp-file' not in request.files:
            return 'No file part', 400
        
        # if 'variant-name' not in request.data:
        #     return 'no variant-name', 400
        
    file = request.files['temp-file']
    if file.filename == '':
        return 'No selected file', 400
        

    df = pd.read_csv(file, header=None, encoding='iso-8859-1') 
    slope_u = df.iloc[1, 4]  # This needs to be surrounded with quotes at the command line, if it includes parentheses.
    slope_u_to_send = slope_u
    if slope_u == "(1/min)":
        slope_u_to_send = "min_1min_Kin"
    if slope_u == "(1/s)":
        slope_u_to_send = "s_1s_Kin"
    if slope_u == "(10^-3/min)":
        slope_u_to_send = "min_3min_Kin"
    if slope_u == "(10^-3/s)":
        slope_u_to_send = "s_10s_Kin"
    
    
    # Constant values
    # TODO: Read these from a database file in preparation for future systems.
    epsilon_enz = 113330  # M^-1 cm^-1 for BglB at 280 nm, according to Expasy
    epsilon_byprod = 200  # M^-1 cm^-1 for PNP at pH 5.4 and 405 nm (Clinical Chemistry. 26 (6): 724–729)
    #epsilon_byprod = 200  # M^-1 cm^-1 for PNP at pH 5.4 and 405 nm (Clinical Chemistry. 26 (6): 724–729)
    #epsilon_byprod = 18350  # M^-1 cm^-1 for PNP^-1 at pH 7.5 and 405 nm (Clinical Chemistry. 26 (6): 724–729)
    epsilon_byprod = 10660  # M^-1 cm^-1 for PNP^-1 at pH 7.5 and 420 nm (calculated by Ashley)

    #molar_mass_enz = 51573  # g/mol (or is it 51,225?)
    molar_mass_enz = 51395.85  # Ashley calculated from Expasy

    #assay_cell_length = 0.66  # cm
    assay_cell_length = 0.572  # cm, calculated by Ashley

    assay_vol = 0.0001  # L (100 microliters)




    column_index = 0  
    start_row = 4     
    temps = []


    for temp in df.iloc[start_row:, column_index]:
        print(str(len(temps)) + ": " + str(temp))
        if pd.isna(temp):
            break
        temps.append(temp)
        if len(temps) == 8:
            break  


# Join the temperatures into a comma-separated string
    temperature_strings = temps
    temps_with_commas = ",".join([str(temp) for temp in temps])
        
    encoded_temperature_string = base64.b64encode(temps_with_commas.encode('utf-8')).decode('utf-8')


    # Parse out data from comma-delimited strings passed at command line.
    temperatures = []
    # temperature_strings = argv[3].split(',')
    print("temperature_strings: " + str(temperature_strings))
    for i in temperature_strings:
        print("i: " + i)
        if len(temperature_strings) == 8:
            temperatures.append(float(i)); temperatures.append(float(i)); temperatures.append(float(i))
        else:
            temperatures.append(float(i)); temperatures.append(float(i))

    # This must be a comma-delimited string of slopes for cells A1,A2,A3,B1,B2,B3,... etc.
    # If the value is empty, it means that it was removed as an outlier.
    #slopes = [float(i) for i in argv[4].split(',')]
    empty_cells =[]
    slopes = []

    if debug_mode:
        with open("temperature_plot_script_log", 'a') as log_file:
            log_file.write("\nSTART LOG\n")
            log_file.write("\n")


    start_col = 2  # Third column, zero-indexed
    start_row = 4  # Fifth row, zero-indexed
    num_rows = 8  # Total number of rows to read from the start_row

    # Iterate over the range of rows specified
    for i in range(num_rows):
        # Get the slope value from the DataFrame, across three columns from the start_col
        for j in range(3):  # Assuming the data spans three columns
            slope = df.iloc[start_row + i, start_col + j]
            if pd.isna(slope):
                empty_cells.append((start_row + i, start_col + j))
            else:
                slopes.append(float(slope))  # Append the slope directly to the list

        for i in reversed(range(24)):
            if i in empty_cells:
                temperatures.pop(i)
                slopes.pop(i)

    values = slopes
    data_dict = {}
    letters = 'ABCDEFGH'
    index = 0
    pur_date = df.iloc[2,6]
    assay_date = df.iloc[2,7]

    for letter in letters:
        data_dict[letter] = {
            1: values[index],
            2: values[index+1],
            3: values[index+2]
        }
    index += 3

    # Construct the serialized PHP array string
    serialized_string = 'a:8:{'
    for letter, nums in data_dict.items():
        serialized_string += f's:1:"{letter}";a:3:{{'
        for i, num in nums.items():
            num_str = str(num)  # Convert the float to a string
            serialized_string += f'i:{i};s:{len(num_str)}:"{num_str}";'  # Use the string and its length
        serialized_string += '}'
    serialized_string += '}'
    encoded_serialized_string = base64.b64encode(serialized_string.encode('utf-8')).decode('utf-8')

    print(serialized_string)

    # Convert all slopes into units of inverse minutes.
    if slope_u[1:6] == "10^-3":
        slopes = [slope / 1000 for slope in slopes]
    if slope_u[-2:-1] == "s":
        slopes = [slope * 60 for slope in slopes]

    # Normalize the slope data.
    #max_slope = max(slopes)
    #max_slope = mean(sorted(slopes, reverse=True)[:6])
    max_slope = mean(sorted(slopes, reverse=True)[:3])
    slopes = [slope/max_slope for slope in slopes]


    # Perform the curve fit to the equation slope = 1/{1 + e^[-k(T - T50)]}.
    # The initial guess is a k value of -1 and a T50 of 40.
    # k can be between -10 and 0; T50 can be between 30 and 50.
    #k_T50_pair, pcov = curve_fit(func, temperatures, slopes, bounds=([-10, 30], [0, 50]))
    print("Length of temperatures:", len(temperatures))
    print("Length of slopes:", len(slopes))

    k_T50_pair, pcov = curve_fit(func, temperatures, slopes, p0=[-1, 40], bounds=([-10, 30], [0, 50]))
    pSD = sqrt(diag(pcov))

    # Rename the values to something readable.
    k = k_T50_pair[0]
    T50 = k_T50_pair[1]
    T50_SD = pSD[1]

    # Now generate an image of the plot.
    figure(figsize=(5, 5))
    plot(temperatures, slopes, 'bo')  # Plot raw data with blue circles.
    #ylim(-0.05, 1.05)
    ylim(-0.05, 1.25)

    fakex = linspace(30, 50, 100)  # Generate 100 evenly spaced x values for the fit curve between 30 and 50.
    #plot_label = r'$\mathit{T}\rm_{50}$ = %2.1f ' u'\u2103' '\n' r'$\mathit{k}$' ' = %1.2f' % (T50, k)
    plot(fakex, func(fakex, *k_T50_pair), 'r-')  # Plot with red line.

    fakex = [T50]*50
    fakey = linspace(-0.05, 1.05, 50)
    plot(fakex, fakey, 'k--',  # vertical dashed reference line for kcat
        label=r'$\mathit{T}\rm_{50}$ = %2.1f ± %2.1f ' u'\u2103' % (T50, T50_SD))

    fakex = linspace(30, 50, 50)
    #a = func_prime(T50, *k_T50_pair)  # (a at T50 is k/4, because of how cool math is.)
    a = k/4  # (a at T50 is k/4, because of how cool math is.)
    plot(fakex, line(fakex, a, (0.5 - a * T50)), 'k:',  # steepest slope as dotted line to visualize k
        label=r'$\mathit{k}$' ' = %1.2f' % k)
    variant_name = request.form['variant-name']
    title(variant_name, fontsize='20')
    ylabel('Normalized product formation rate', fontsize='16')
    xlabel(r'$\mathit{T}$ (' u'\u2103' ')', fontsize='16')
    legend(fontsize='12')


    img_io = BytesIO()
    savefig(img_io, format='png', bbox_inches='tight')
    img_io.seek(0)
    img_data = img_io.getvalue()
    encoded_img = base64.b64encode(img_data).decode('utf-8')
    # print("encoded_img: " + encoded_img)
    response_data = {
        'image_temp': encoded_img,
        'additional_data': {
                # user name added in react
                # plate num idk
                'variant': variant_name,
                'temp_values': encoded_temperature_string,
                'cell_data': encoded_serialized_string,
                'slope_units': slope_u_to_send,
                'purification_date': pur_date,
                'assay_date': assay_date,
                'csv_filename': file.filename,
                'plot_filename': file.filename + '-plot.png',
            }
    }
    return jsonify(response_data)



    savefig(variant_name + ".png", bbox_inches='tight')

    # Output the T50 value to be input back into the webpage.
    print(str(T50) + "," + str(T50_SD) + "," + str(k))

    if debug_mode:    
        with open("temperature_plot_script_log", 'a') as log_file:
            log_file.write("\nSTOP LOG\n")

@app.route('/plotit', methods=['POST'])
def plotit():
    if debug_mode:
        with open("plot_script_log", 'a') as log_file:
            log_file.write("\nSTART LOG\n")


    print("DEBUG")
    variant_name = request.form['variant-name']
    
    if 'file' not in request.files:
        return 'No file part', 400
    
    # if 'variant-name' not in request.data:
    #     return 'no variant-name', 400
    
    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400
    

    df = pd.read_csv(file, header=None, encoding='iso-8859-1')  
    absorbance_data = df.iloc[7:15, 2:5].values.flatten() 
    string_of_data = ",".join([f"{float(x):.5E}" if pd.notnull(x) else '' for x in df.iloc[4:12, 2:5].values.flatten()])

    # Split the data string into values
    values = string_of_data.split(',')

    # Create a dictionary with the structure needed
    data_dict = {}
    letters = 'ABCDEFGH'
    index = 0

    for letter in letters:
        data_dict[letter] = {
            1: values[index],
            2: values[index+1],
            3: values[index+2]
        }
        index += 3

    # Construct the serialized PHP array string
    serialized_string = 'a:8:{'
    for letter, nums in data_dict.items():
        serialized_string += f's:1:"{letter}";a:3:{{'
        for i, num in nums.items():
            serialized_string += f'i:{i};s:{len(num)}:"{num}";'
        serialized_string += '}'
    serialized_string += '}'
    encoded_serialized_string = base64.b64encode(serialized_string.encode('utf-8')).decode('utf-8')

    print(serialized_string)

    print("data:\n" + string_of_data)
    cleaned_value = re.sub(r'[^\x00-\x7F]+', '', df.iloc[2, 6]).strip()
    yield_ = cleaned_value
    print("yield is " + yield_)
    dil_factor = df.iloc[2, 7]  
    pur_date = df.iloc[2,8]
    print("pur date is " + str(pur_date))
    assay_date = df.iloc[2,9]
    instrument_units = df.iloc[1, 4]  
    yield_units = df.iloc[1, 6] 




    slope_u = instrument_units
    slope_u_to_send = slope_u
    if slope_u == "(1/min)":
        slope_u_to_send = "min_1min_Kin"
    if slope_u == "(1/s)":
        slope_u_to_send = "s_1s_Kin"
    if slope_u == "(10^-3/min)":
        slope_u_to_send = "min_3min_Kin"
    if slope_u == "(10^-3/s)":
        slope_u_to_send = "s_10s_Kin"
    yld = float(yield_)
    yld_u = yield_units  # This needs to be surrounded with quotes at the command line, if it includes parentheses.
    yld_u_to_send = yld_u
    if yld_u == 'A280*':
        yld_u_to_send = 'A280_'
    if yld_u == '(mg/mL)':
        yld_u_to_send = 'mg_mL_'
    if yld_u == '(mM)':
        yld_u_to_send = 'mM_'
    if yld_u == '(M)':
        yld_u_to_send = 'M_'
    dil = float(dil_factor)  # "Traditionally", either 10 or 100

    # Constant values
    # TODO: Read these from a database file in preparation for future systems.
    epsilon_enz = 113330  # M^-1 cm^-1 for BglB at 280 nm, according to Expasy
    #epsilon_byprod = 200  # M^-1 cm^-1 for PNP at pH 5.4 and 405 nm (Clinical Chemistry. 26 (6): 724–729)
    #epsilon_byprod = 18350  # M^-1 cm^-1 for PNP^-1 at pH 7.5 and 405 nm (Clinical Chemistry. 26 (6): 724–729)
    epsilon_byprod = 10660  # M^-1 cm^-1 for PNP^-1 at pH 7.5 and 420 nm (calculated by Ashley)

    #molar_mass_enz = 51573  # g/mol (or is it 51,225?)
    molar_mass_enz = 51395.85  # Ashley calculated from Expasy

    #assay_cell_length = 0.66  # cm
    assay_cell_length = 0.572  # cm, calculated by Ashley
    A280_cell_length = 1  # cm  (It is actually 0.5 mm, but the reported A280 values are pre-adjusted for 1 cm.)

    assay_vol = 0.0001  # L (100 microliters)
    enz_vol = 0.000025  # L (25 microliters)


    # Set up assay data to fit and plot.
    # The concentration of substrate will be on the x axis,
    # and the values are constant and determined by the assay.
    # The kobs values are on the y axis and will be calculated from the raw slope data below.
    c_substrate = [
            75.000, 75.000, 75.000,
            25.000, 25.000, 25.000,
            8.333,  8.333,  8.333,
            2.778,  2.778,  2.778,
            0.926,  0.926,  0.926,
            0.309,  0.309,  0.309,
            0.103,  0.103,  0.103,
            0.000,  0.000,  0.000]  # millimolar

    # Parse out data from comma-delimited string passed at command line.
    # This must be a comma-delimited string of slopes for cells A1,A2,A3,B1,B2,B3,... etc.
    # If the value is empty, it means that it was removed as an outlier.
    #slopes = [float(i) for i in string_of_data.split(',')]
    empty_cells =[]
    slopes = [0]*24
    for i, slope in enumerate(string_of_data.split(',')):
        if slope == '':
            empty_cells.append(i)
        else:
            slopes[i] = float(slope)
    for i in reversed(range(24)):
        if i in empty_cells:
            c_substrate.pop(i)
            slopes.pop(i)

    # Convert all slopes into units of inverse minutes.
    if slope_u[1:6] == '10^-3':
        slopes = [slope / 1000 for slope in slopes]
    if slope_u[-2:-1] == "s":
        slopes = [slope * 60 for slope in slopes]

    # Convert yield into common units.
    diluted_yld = yld / dil  # dil is either a dilution factor of 10x or 100x, "traditionally"
    c_enz_molar = 0
    c_enz_mg_per_mL = 0  # equivalent to c in g/L
    if yld_u == 'A280*':
        # Calculate enzyme concentrations, using Beer's law.
        c_enz_molar = diluted_yld / (epsilon_enz * A280_cell_length)
        c_enz_mg_per_mL = c_enz_molar * molar_mass_enz
    elif yld_u == '(mg/mL)':
        print("boom")
        c_enz_molar = diluted_yld / molar_mass_enz
        c_enz_mg_per_mL = diluted_yld
    elif yld_u == '(M)':
        c_enz_molar = diluted_yld
        c_enz_mg_per_mL = c_enz_molar * molar_mass_enz  
    elif yld_u == '(mM)':
        c_enz_molar = diluted_yld / 1000
        c_enz_mg_per_mL = c_enz_molar * molar_mass_enz
    elif yld_u == '(uM)':
        c_enz_molar = diluted_yld / 1000000
        c_enz_mg_per_mL = c_enz_molar * molar_mass_enz

    if debug_mode:
        with open("plot_script_log", 'a') as log_file:
            log_file.write("c_enz_molar: ")
            log_file.write(str(c_enz_molar))
            log_file.write("\n")
            log_file.write("c_enz_mg_per_mL: ")
            log_file.write(str(c_enz_mg_per_mL))
            log_file.write("\n")

    # Calculate the rate of byproduct formation for each slope.
    rates = [slope / (epsilon_byprod * assay_cell_length) for slope in slopes]  # values in M/min

    if debug_mode:
        with open("plot_script_log", 'a') as log_file:
            log_file.write("rates: ")
            for rate in rates:
                log_file.write(str(rate))
                log_file.write(", ")
            log_file.write("\n")

    # Optional: Calculate the activities of the enzyme for each rate.
    #activities_mol_per_min = [rate * assay_vol for rate in rates]  # values in mol/min
    #activities_U = [activity * 1000000 for activity in activities_mol_per_min]  # values in U (micromole/min)
    #specific_activities = [activity / (c_enz_mg_per_mL * enz_vol * 1000) for activity in activities_U]  # values in U/mg

    # Calculate turnover numbers (kobs) from specific activities.
    #kobs = [specific_activity * molar_mass_enz / 1000 for specific_activity in specific_activities]  # values in 1/min

    # Calculate turnover numbers (kobs) from rates directly.
    kobs = [(rate * assay_vol) / (c_enz_molar * enz_vol) for rate in rates]  # direct calculation from molarity

    if debug_mode:
        with open("plot_script_log", 'a') as log_file:
            log_file.write("kobs: ")
            for kob in kobs:
                log_file.write(str(kob))
                log_file.write(", ")
            log_file.write("\n")


    # Try to fit a curve.
    # popt is the list of optimized parameters.
    # pcov is the estimated covariance of each optimized parameter.
    # pSD is the standard deviation of each optimized parameter.
    initial_guesses = (max(kobs), 3)  # for kcat and KM, respectively
    popt, pcov = curve_fit(kobs_f, c_substrate, kobs,
            p0=initial_guesses, bounds=(0, inf))
    pSD = sqrt(diag(pcov))

    # Rename the values to something readable.
    kcat = popt[0]  # 1/min
    KM = popt[1]  # millimolar
    kcat_SD = pSD[0]
    KM_SD = pSD[1]

    # Calculate kcat/KM with its standard deviation and vmax for comparison.
    kcat_over_KM = kcat / KM
    kcat_over_KM_SD = kcat_over_KM * sqrt((kcat_SD/kcat)**2 + (KM_SD/KM)**2)

    vmax = kcat * c_enz_molar * 1000  # millimolar per minute

    if debug_mode:
        with open("plot_script_log", 'a') as log_file:
            log_file.write("kcat: ")
            log_file.write(str(kcat))
            log_file.write("\n")
            log_file.write("kcat_SD: ")
            log_file.write(str(kcat_SD))
            log_file.write("\n")
            log_file.write("KM: ")
            log_file.write(str(KM))
            log_file.write("\n")
            log_file.write("KM_SD: ")
            log_file.write(str(KM_SD))
            log_file.write("\n")
            log_file.write("kcat_over_KM: ")
            log_file.write(str(kcat_over_KM))
            log_file.write("\n")
            log_file.write("kcat_over_KM_SD: ")
            log_file.write(str(kcat_over_KM_SD))
            log_file.write("\n")
            log_file.write("vmax: ")
            log_file.write(str(vmax))
            log_file.write("\n")

    # Check for especially large KM values.
    if KM > 75:
        # Try to fit a linear plot to find kcat/KM, instead.
        popt, pcov = curve_fit(high_KM_kobs_f, c_substrate, kobs,
            p0=kcat_over_KM, bounds=(0, inf))
        pSD = sqrt(diag(pcov))
        kcat_over_KM = popt[0]  # inverse mM/min
        kcat_over_KM_SD = pSD[0]

        if debug_mode:
            with open("plot_script_log", 'a') as log_file:
                log_file.write("   LINEAR FIT: kcat_over_KM: ")
                log_file.write(str(kcat_over_KM))
                log_file.write("\n")
                log_file.write("kcat_over_KM_SD: ")
                log_file.write(str(kcat_over_KM_SD))
                log_file.write("\n")

    # Now generate an image of the plot.
    if KM <= 75:
        figure(figsize=(5, 5))
        fakex = linspace(0, 80, 100)  # 100 x values to plot for [S] in the range
        plot(fakex, kobs_f(fakex, kcat, KM), 'k-')  # the main curve

        fakey = [kcat]*100
        plot(fakex, fakey, 'k:',
            label=r'$\mathit{k}_{\mathrm{cat}} = %3.1f \pm %3.1f\, \mathrm{min}^{-1}$' % (kcat, kcat_SD))  # reference line for kcat

        plot([], [], " ",
            label=r'($\mathit{v}\mathrm{max}$ = %2.4f mᴍ/min)' % (vmax))  # Plot nothing to create an additional label for the legend.
        plot([], [], " ", label=" ")  # Plot nothing to create a gap in the legend.

        fakex = linspace(0.00, KM, 50)
        fakey = [kcat/2]*50
        plot(fakex, fakey, 'k--')  # horizontal reference line for KM

        fakex = [KM]*50
        fakey = linspace(0.00, kobs_f(KM, kcat, KM), 50)
        plot(fakex, fakey, 'k--',
            label=r'$\mathit{K}\mathrm{M}$ = %3.2f ± %3.2f mᴍ' % (KM, KM_SD))  # vertical reference line for KM

        plot(c_substrate, kobs, 'bo')  # Plot raw data with blue circles.

        title(variant_name, fontsize='20')
        ylabel(r'$\mathit{k}_{\mathrm{obs}}$ (min$^{-1}$)', fontsize='16')
        xlabel('[S] (mᴍ)', fontsize='16')
        legend(fontsize='12', loc='lower right')
        img_io = BytesIO()
        savefig(img_io, format='png', bbox_inches='tight')
        img_io.seek(0)
        img_data = img_io.getvalue()
        encoded_img = base64.b64encode(img_data).decode('utf-8')
        #print("encoded_img: " + encoded_img)
        response_data = {
            'image': encoded_img,
            'additional_data': {
                'variant': variant_name,
                'cell_data': encoded_serialized_string,
                'slope_units': slope_u_to_send,
                'yield': float(yield_),
                'yield_units': yld_u_to_send,
                'dilution': float(dil_factor),
                'purification_date': pur_date,
                'assay_date': assay_date,
                'csv_filename': file.filename,
                'plot_filename': file.filename + '-plot.png',
            }
        }
        # return jsonify(response_data)
        # return send_file('placeholder name' + '.png', mimetype='image/png')
        print("here 1 ")

    else:
        figure(figsize=(5, 5))
        fakex = linspace(0, 80, 100)  # 100 x values to plot for [S] in the range
        plot(fakex, high_KM_kobs_f(fakex, kcat_over_KM), 'k-',
            label=r'$\mathit{k}_{\mathrm{cat}}/\mathit{K}_{\mathrm{M}} = %2.2f \pm %2.2f \, \mathrm{mM}^{-1}\, \mathrm{min}^{-1}$' % (kcat_over_KM, kcat_over_KM_SD))  # the main curve

        plot(c_substrate, kobs, "bo")  # Plot raw data with blue circles.

        title(variant_name + ' (linear curve fit)', fontsize='20')
        ylabel(r'$\mathit{k}_{\mathrm{obs}}$ (min$^{-1}$)', fontsize='16')
        xlabel('[S] (mᴍ)', fontsize='16')
        legend(fontsize='12')
        img_io = BytesIO()
        savefig(img_io, format='png', bbox_inches='tight')
        img_io.seek(0)
        img_data = img_io.getvalue()
        encoded_img = base64.b64encode(img_data).decode('utf-8')
        # print("encoded_img: " + encoded_img)
        response_data = {
            'image': encoded_img,
            'additional_data': {
                'variant': variant_name,
                'cell_data': encoded_serialized_string,
                'slope': slope_u_to_send,
                'yield': float(yield_),
                'yield_units': yld_u_to_send,
                'dilution': float(dil_factor),
                'purification_date': pur_date,
                'assay_date': assay_date,
                'csv_filename': file.filename,
                'plot_filename': file.filename + '-plot.png',
            }
        }
        print("here 2 ")
        # return jsonify(response_data)
        # savefig('placeholder name' + '.png', bbox_inches='tight')
        # return send_file('placeholder name' + '.png', mimetype='image/png')

    # Now, we'll plot Lineweaver-Burk for comparison.
    inv_vmax = 1/vmax

    rates = [k * c_enz_molar * 1000 for k in kobs]  # millimolar per minute
    inv_s = []  # inverse molar
    inv_rates = []
    for i in range(len(rates)):
        rate = rates[i]
        if rate > 0 and c_substrate[i] > 0:
            inv_s.append(1/c_substrate[i])
            inv_rates.append(1/rate)

    initial_guesses = (inv_vmax, KM)
    removed_points = 0
    try:
        popt, pcov = curve_fit(inv_v, inv_s, inv_rates,
                p0=initial_guesses, bounds=(0, inf))
    except RuntimeError:
        # If the curve can't be fit, the smallest concentrations are probably too
        # close to zero.  Toss them one at a time and try again.
        if debug_mode:
            with open("plot_script_log", 'a') as log_file:
                log_file.write("ERROR: Could not fit LB plot; removing smallest values and retrying...\n")
        for i in range(1, 24):
            if debug_mode:
                with open("plot_script_log", 'a') as log_file:
                    log_file.write("   Reattempt " + str(i) + "\n")
            try:
                popt, pcov = curve_fit(inv_v, inv_s[:-i], inv_rates[:-i],
                        p0=initial_guesses, bounds=(0, inf))
                removed_points = i
                break
            except RuntimeError:
                continue
        
    '''try:
        popt, pcov = curve_fit(inv_v, inv_s, inv_rates,
                p0=initial_guesses, bounds=(0, inf))
    except RuntimeError:
        # If the curve can't be fit, the smallest concentrations are probably too
        # close to zero.  Toss them one at a time and try again.
        try:
            popt, pcov = curve_fit(inv_v, inv_s[:-1], inv_rates[:-1],
                    p0=initial_guesses, bounds=(0, inf))
        except RuntimeError:
            with open("plot_script_log", 'a') as log_file:
                log_file.write("ERROR: Could not fit LB plot; removing smallest values and retrying...\n")
            try:
                popt, pcov = curve_fit(inv_v, inv_s[:-2], inv_rates[:-2],
                        p0=initial_guesses, bounds=(0, inf))
            except RuntimeError:
                with open("plot_script_log", 'a') as log_file:
                    log_file.write("ERROR: Could not fit LB plot; removing smallest values and retrying...\n")
                try:
                    popt, pcov = curve_fit(inv_v, inv_s[:-3], inv_rates[:-3],
                            p0=initial_guesses, bounds=(0, inf))
                except RuntimeError:
                    with open("plot_script_log", 'a') as log_file:
                        log_file.write("ERROR: Could not fit LB plot; removing smallest values and retrying...\n")
                        popt, pcov = curve_fit(inv_v, inv_s[:-4], inv_rates[:-4],
                                p0=initial_guesses, bounds=(0, inf))'''

    # 100 x values to plot for 1/[S] in the range
    max_value = max(inv_s)
    if removed_points: max_value = max(inv_s[:-removed_points])
    fakex = linspace(-max_value / 7, max_value, 100)
    figure(figsize=(5, 5))
    axes = gca()
    axes.spines['left'].set_position('zero')
    axes.spines['right'].set_color('none')
    axes.spines['bottom'].set_position('zero')
    axes.spines['top'].set_color('none')
    if KM <= 75:
        plot(fakex, inv_v(fakex, inv_vmax, KM), 'k--',
            label=r'$\frac{1}{v} = \frac{\mathrm{%2.2f mᴍ}}{\mathrm{%1.4f mᴍ/min}}$ $\frac{1}{\mathrm{[S]}} + \frac{1}{\mathrm{%1.4f mᴍ/min}}$' % (KM, vmax, vmax))  # plot of curve using "good" values
    plot(fakex, inv_v(fakex, popt[0], popt[1]), 'k-',
        label=r'$\frac{1}{v} = \frac{\mathrm{%2.2f mᴍ}}{\mathrm{%1.4f mᴍ/min}}$ $\frac{1}{\mathrm{[S]}} + \frac{1}{\mathrm{%1.4f mᴍ/min}}$' % (popt[1], 1/popt[0], 1/popt[0]))  # plot of curve using "bad" values
    if removed_points:
        plot(inv_s[:-removed_points], inv_rates[:-removed_points], 'bo')
    else:
        plot(inv_s, inv_rates, 'bo')

    title(variant_name, fontsize='20')
    ylabel(r'$1/\mathit{v}$ (min/mM)', fontsize='16')
    xlabel('1/[S] (1/mᴍ)', fontsize='16')
    legend(fontsize='10', loc='upper center')
    img_io_LB = BytesIO()
    savefig(img_io_LB, format='png', bbox_inches='tight')
    img_io_LB.seek(0)
    img_data_LB = img_io_LB.getvalue()
    encoded_img_LB = base64.b64encode(img_data_LB).decode('utf-8')
    #print("encoded_img_LB: " + encoded_img_LB)
    response_data['image_LB'] = encoded_img_LB
    
    # savefig('placeholder name' + '-LB.png', bbox_inches='tight')

    # Output the kinetic constants in a list to be input back into the webpage.
    if KM <= 75:
        print(str(kcat) + "," + str(kcat_SD) + "," + str(KM) + "," + str(KM_SD) + "," +
            str(kcat_over_KM) + "," + str(kcat_over_KM_SD))
    else:
        print(',,,,' + str(kcat_over_KM) + "," + str(kcat_over_KM_SD))

    if debug_mode:    
        with open("plot_script_log", 'a') as log_file:
            log_file.write(str(kcat) + "," + str(kcat_SD) + "," + str(KM) + "," +
                    str(KM_SD) + "," + str(kcat_over_KM) + "," + str(kcat_over_KM_SD))
            log_file.write("\nSTOP LOG\n")
    print("HELLOOOOOO")
    return jsonify(response_data)


            

@app.route('/uploadGEL', methods=['POST'])
def upload_GEL():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        save_path = os.path.join(app.config['GEL_UPLOAD_FOLDER'], filename)
        file.save(save_path)
        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 200
    
@app.route('/uploadCSV', methods=['POST'])
def upload_CSV():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        save_path = os.path.join(app.config['CSV_UPLOAD_FOLDER'], filename)
        file.save(save_path)
        return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)