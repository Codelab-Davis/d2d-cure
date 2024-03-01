from flask import Flask, send_file
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import io

app = Flask(__name__)

@app.route('/plot')
def plot():
    # Your Matplotlib Code Here
    # Example: Plotting a simple line graph
    plt.figure()
    plt.plot([1, 2, 3], [4, 5, 6])
    plt.title('Simple Line Graph')

    # Save the plot to a BytesIO object in memory
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    
    # Send the buffer as a response
    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
