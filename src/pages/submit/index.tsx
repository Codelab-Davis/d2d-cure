import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '@/components/UserProvider';

const SubmitPage = () => {
  const { user } = useUser();

  // part 1 - which form do you want? 
  const [selection, setSelection] = useState('');

  // part 2 - enter the enzyme (and, if single variant, the variant)
  const [enzymeList, setEnzymeList] = useState<any[]>([]);
  const [enzyme, setEnzyme] = useState('');
  const [enzymeVariant, setEnzymeVariant] = useState('');
  const [sequences, setSequences] = useState<any[]>([]);
  const [error, setError] = useState('');

  // part 3 - how many records already exist, if none, then make your own 
  const [entered, setEntered] = useState('null');
  const [matchedData, setMatchedData] = useState<any[]>([]);
  const [charData, setCharData] = useState<any[]>([]);


  const handleSubmit = () => {
    setError('');
    setEntered('null');
    // Regular expression to match the format {resid}{resnum}{resmut}
    const variantRegex = /^([A-Za-z])(\d+)([A-Za-z])$/;
    const match = enzymeVariant.match(variantRegex);
  
    if (!match) {
      setError('Incorrect format. Please use the format: {resid}{resnum}{resmut}.');
      return;
    }
  
    const [, resid, resnum, resmut] = match;

    const sequenceMatch = sequences.find(seq => String(seq.Rosetta_resnum) === resnum && String(seq.resid) === resid);
  
    if (!sequenceMatch) {
      setError('That variant combination is not possible.');
      return;
    }
  
    // Variant the user entered is valid 
    console.log('Variant is valid:', { resid, resnum, resmut });
    setEntered(resid); 
    const filteredData = charData.filter((data) => 
    String(data.resid) === resid &&
    String(data.resnum) === resnum &&
    String(data.resmut) === resmut &&
    String(data.institution) === user?.institution 
    );

    setMatchedData(filteredData);
  };


  useEffect(() => {
    const fetchEnzymes = async () => {
      const response = await fetch('/api/getEnzymes');
      const data = await response.json();
      setEnzymeList(data);
    };
    const fetchSequences = async () => {
      const response = await fetch('/api/getSequenceData');
      const data = await response.json();
      setSequences(data);
    };
    const fetchData = async () => {
        const response = await fetch('/api/getCharacterizationData');
        const data = await response.json();
        setCharData(data);
      };
  
    fetchData(); 
    fetchSequences(); 
    fetchEnzymes(); 
  }, []);

  return (
    <div className="mt-8 text-center">
      <h1 className="text-2xl font-bold">Data Analysis and Submission</h1>
      <div className="space-x-4">
        {/* Initial options */}
        {!selection && (
          <div>
          <h2>What type of data would you like to submit?</h2>
          <div className="space-x-4">
              <button onClick={() => setSelection('single_variant')} className="text-blue-500 hover:text-blue-700">Single Variant Data</button>
              <button onClick={() => setSelection('wild_type')} className="text-blue-500 hover:text-blue-700">Wild Type Data</button>
          </div>
        </div>
        )}

        {/* Single Variant form */}
        {selection === 'single_variant' && (
          <div>
                <h2>Single Variant Form</h2>
                <div className="space-x-4">
                    <button onClick={() => setSelection('single_variant')} className="text-blue-500 hover:text-blue-700">Single Variant Data</button>
                    <button onClick={() => setSelection('wild_type')} className="text-blue-500 hover:text-blue-700">Wild Type Data</button>
                </div>
                <p>Select the enzyme from the list and enter the enzyme variant code (e.g., A123C) corresponding to your mutation.</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="font-bold">Enzyme:</span>
                    <select className="border border-gray-300 rounded p-1"
                            value={enzyme}
                            onChange={(e) => setEnzyme(e.target.value)}>
                    <option value="">Select an enzyme</option>
                    {enzymeList.map((enzyme) => (
                        <option key={enzyme.id} value={enzyme.abbr}>{enzyme.abbr}</option>
                    ))}
                    </select>
                    <span className="font-bold">Enzyme Variant:</span>
                    <input type="text" 
                        className="border border-gray-300 rounded p-1"
                        value={enzymeVariant}
                        onChange={(e) => setEnzymeVariant(e.target.value)}
                        placeholder="A123C" 
                    />
                    <button onClick={handleSubmit} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                {entered !== 'null' && (
                  <div className="text-center">
                    <p className="mb-2">Previous datasets:</p>
                    {matchedData.length > 0 ? (
                      <ul>
                        {matchedData.map((item) => (
                          <li key={item.id}><button className="mr-3">Select</button>Dataset created by {item.creator}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>There are no records that match from your school.</p>
                    )}
                    <p className="mt-4">Create a new dataset:</p>
                    <div className="ml-8 text-center">
                      <div>
                        <label>Protein modeled?</label>
                        <input type="text" placeholder="WT starting score" className="ml-2" />
                        <input type="text" placeholder="Variant ending score" className="ml-2" />
                      </div>
                      <div>
                        <label>Oligonucleotide ordered?</label>
                        <input type="checkbox" className="ml-2" />
                      </div>
                      <div>
                        <label>Plasma sequence verified?</label>
                        <button className="ml-2">Upload sequencing file</button>
                      </div>
                      <div>
                        <label>Protein expressed?</label>
                        <input type="checkbox" className="ml-2" />
                      </div>
                      <div>
                        <label>Kinetic assay data uploaded?</label>
                        <button className="ml-2">Upload raw data</button>
                      </div>
                      <div>
                        <label>Wild-type kinetic assay data uploaded?</label>
                        <button className="ml-2">Select WT data</button>
                      </div>
                      <div>
                        <label>Thermostability assay data uploaded?</label>
                        <button className="ml-2">Upload raw data</button>
                      </div>
                      <div>
                        <label>Wild-type thermostability assay data uploaded?</label>
                        <button className="ml-2">Select WT data</button>
                      </div>
                      <div>
                        <label>Melting point values uploaded?</label>
                        <input type="text" placeholder="Tm mean(°C)" className="ml-2" />
                        <input type="text" placeholder="Tm standard deviation(°C)" className="ml-2" />
                      </div>
                      <div>
                        <label>SDS page gel uploaded?</label>
                        <button className="ml-2">Upload new gel image</button>
                        <button className="ml-2">Select previous gel image</button>
                      </div>
                      <div>
                        <label>Comments: </label>
                        <input type="text" placeholder="enter comments here" className="ml-2" />
                      </div>
                    </div>
                  </div>
                )}
          </div>
        )}

        {/* Wild Type form */}
        {selection === 'wild_type' && (
          <div>
            <h2>Wild Type Form</h2>
            <div className="space-x-4">
                <button onClick={() => setSelection('single_variant')} className="text-blue-500 hover:text-blue-700">Single Variant Data</button>
                <button onClick={() => setSelection('wild_type')} className="text-blue-500 hover:text-blue-700">Wild Type Data</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmitPage;