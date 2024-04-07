// Important: does not yet support multiple proteins. It defaults to the BglB database regardless of what enzyme the user selects. All the major logic is done though

import React, { useState, useEffect } from 'react';
import "../../app/globals.css";
import { useUser } from '@/components/UserProvider';

const OligoSearchPage = () => {
  const { user } = useUser();

  console.log(user)
  const [enzymeList, setEnzymeList] = useState<any[]>([]);
  const [enzyme, setEnzyme] = useState('');
  const [enzymeVariant, setEnzymeVariant] = useState('');
  const [oligosData, setOligosData] = useState<any[]>([]);
  const [oligosDisplay, setOligosDisplay] = useState("");


  useEffect(() => {
    const fetchEnzymes = async () => {
      const response = await fetch('/api/getEnzymes');
      const data = await response.json();
      setEnzymeList(data);
    };
    const fetchOligosData = async () => {
        const response = await fetch('/api/getOligos');
        const data = await response.json();
        setOligosData(data);
      };

    fetchEnzymes(); 
    fetchOligosData(); 
  }, []);

  const handleSubmit = () => {
    const foundOligo = oligosData.find(oligo => oligo.variant === enzymeVariant);
    if (foundOligo) {
      setOligosDisplay(`The optimized DNA oligomer sequence to use as a DNA primer for the production of ${enzyme} variant ${enzymeVariant} is: ${foundOligo.oligo}`);
    } else {
      setOligosDisplay("No matching oligo found for the specified variant.");
    }
  };
  
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Oligo Search</h1>
      <p className="mb-2 text-center">Select the enzyme and enter an enzyme variant code to search for a reverse-compliment, codon-optimized DNA 33-mer for use as a primer for the gene mutant.</p>
      <p className="mb-4">Use the format A123C.</p>
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
               placeholder="A123C" />
        <button onClick={handleSubmit} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
      {oligosDisplay && <div className="mt-4 font-bold">{oligosDisplay}</div>}
    </div>
  );
};

export default OligoSearchPage;