import React, { useState, useEffect } from 'react';
import { CharacterizationData } from '../../../prisma/generated/client_proteins/index';
import "../../app/globals.css";

const DataPage = () => {
  const [expandData, setExpandData] = useState(false);
  const [useRosettaNumbering, setUseRosettaNumbering] = useState(false);
  const [includeNonCurated, setIncludeNonCurated] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [residueNumber, setResidueNumber] = useState('');
  const [institutions, setInstitutions] = useState<any[]>([]);
  const [characterizationData, setCharacterizationData] = useState<any[]>([]);
  const [showNonCurated, setShowNonCurated] = useState(false); 
  const [sequences, setSequences] = useState<any[]>([]);

  // Placeholder for the number of records found
  const recordsFound = 222; // Placeholder value

  useEffect(() => {
    const fetchInstitutions = async () => {
      const response = await fetch('/api/getInstitutions');
      const data = await response.json();
      const sortedData = data.sort((a:any, b:any) => a.fullname.localeCompare(b.fullname));
      setInstitutions(sortedData);
    };
    const fetchData = async () => {
      const response = await fetch('/api/getCharacterizationData');
      const data = await response.json();
      setCharacterizationData(data);
    };
    const fetchSequences = async () => {
      const response = await fetch('/api/getSequenceData');
      const data = await response.json();
      setSequences(data);
    };

    fetchSequences();
    fetchInstitutions();
    fetchData();
  }, []);

  const filteredData = characterizationData
    .filter(data => 
      data.curated || 
      (showNonCurated && !data.curated && data.submitted_for_curation) 
    )
    .filter(data => !selectedInstitution || data.institution === selectedInstitution)
    .sort((a, b) => {
      // Convert resnum to numbers for comparison, assuming they are stored as strings
      const resnumA = a.resnum === 'X' ? -1 : parseInt(a.resnum, 10);
      const resnumB = b.resnum === 'X' ? -1 : parseInt(b.resnum, 10);
  
      // First, sort by resnum in ascending order
      if (resnumA !== resnumB) {
        return resnumA - resnumB;
      }
  
      // If resnum is the same, sort by resmut in ascending order
      // Assuming resmut are strings and can be directly compared
      return a.resmut.localeCompare(b.resmut);
    });

    const getVariantDisplay = (resid: any, resnum: any, resmut: any) => {
      if (resid === 'X') {
        return 'WT';
      }
        
      // Find the corresponding sequence data entry
      const sequenceEntry = sequences.find(seq => seq.resid === resid && seq.Rosetta_resnum === parseInt(resnum, 10));
        
      // Determine the correct resnum based on the checkbox state
      const correctResnum = useRosettaNumbering ? sequenceEntry?.Rosetta_resnum : sequenceEntry?.PDBresnum || resnum;
        
      const variant = `${resid}${correctResnum}${resmut}`;
      return variant;
    };

    const roundTo = (number:number, decPlaces:number) => {
      const factor = Math.pow(10, decPlaces);
      return Math.round(number * factor)/factor;
    };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">BglB Variant Characterization Data</h1>
      <p className="text-center mb-4">
        Hover over any column for a description of that parameter.
        <br />
        Click on any column header to sort the data by that value.
      </p>
      <div className="mb-4">
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={expandData}
            onChange={() => setExpandData(!expandData)}
            className="mr-2"
          />
          Expand data to show individual instead of averages
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={useRosettaNumbering}
            onChange={() => setUseRosettaNumbering(!useRosettaNumbering)}
            className="mr-2"
          />
          Rosetta/Foldit sequencing number
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            checked={showNonCurated}
            onChange={(e) => setShowNonCurated(e.target.checked)}
            className="mr-2"
          />
          Include noncurated data
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          Limit records to:{' '}
          <select
            value={selectedInstitution}
            onChange={(e) => setSelectedInstitution(e.target.value)}
            className="mt-1"
          >
            <option value="">Select an institution</option>
            {institutions.map((institution) => (
              <option key={institution.id} value={institution.abbr}>
                {institution.fullname}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4 font-bold">
      {filteredData.length} Records Found
      </div>
      <div>
        <label className="block">
          Jump to residue number:{' '}
          <input
            type="number"
            value={residueNumber}
            onChange={(e) => setResidueNumber(e.target.value)}
            className="mt-1"
          />
        </label>
      </div>
      <div className="flex flex-col items-center p-4">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300">Variant</th>
              <th className="border border-gray-300">Yield</th>
              <th className="border border-gray-300">Km</th>
              <th className="border border-gray-300">Kcat</th>
              <th className="border border-gray-300">Kcat/Km</th>
              <th className="border border-gray-300">T50</th>
              <th className="border border-gray-300">Tm</th>
              <th className="border border-gray-300">Rosetta Score Change</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300">{getVariantDisplay(data.resid, data.resnum, data.resmut)}</td>
                <td className="border border-gray-300">{roundTo(data.yield_avg, 2)}</td>
                <td className="border border-gray-300">{`${roundTo(data.KM_avg, 2)} ± ${roundTo(data.KM_SD, 2)}`}</td>
                <td className="border border-gray-300">{`${roundTo(data.kcat_avg, 1)} ± ${roundTo(data.kcat_SD, 1)}`}</td>
                <td className="border border-gray-300">{`${roundTo(data.kcat_over_KM, 2)} ± ${roundTo(data.kcat_over_KM_SD, 2)}`}</td>
                <td className="border border-gray-300">{`${roundTo(data.T50, 1)} ± ${roundTo(data.T50_SD, 1)}`}</td>
                <td className="border border-gray-300">{`${roundTo(data.Tm, 1)} ± ${roundTo(data.Tm_SD, 1)}`}</td>
                <td className="border border-gray-300">{roundTo(data.Rosetta_score, 1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DataPage;