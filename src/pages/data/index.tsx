import React, { useState, useEffect } from 'react';
import { CharacterizationData } from '../../../prisma/generated/client_proteins/index';
import "../../app/globals.css";

const DataPage = () => {
  const [expandData, setExpandData] = useState(false);
  const [useRosettaNumbering, setUseRosettaNumbering] = useState(false);
  const [sequences, setSequences] = useState<any[]>([]);
  const [showNonCurated, setShowNonCurated] = useState(false); 
  const [institutions, setInstitutions] = useState<any[]>([]);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [residueNumber, setResidueNumber] = useState('');
  const [characterizationData, setCharacterizationData] = useState<any[]>([]); // This holds all the rows in the CharacterizationData table in the BglB database

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
      if (number === null) {
        return null; 
      }
      const factor = Math.pow(10, decPlaces);
      return (Math.round(number * factor) / factor).toFixed(decPlaces);
    };

    const getGroupKey = (data:any) => {
      // This function defines how we collapse the data (in this case, if variant is the same)
      return `${data.resid}${data.resnum}${data.resmut}`;
    };
    
    let displayData = []; // This will be the data we actually render. Needed for averaged/collapsed view
    if (expandData) {
      displayData = filteredData; // Use the data as-is for expanded view
    } else {
      const groupedData:any = {};
      filteredData.forEach(data => {
        const key = getGroupKey(data);
        if (!groupedData[key]) {
          groupedData[key] = []; 
        }
        groupedData[key].push(data);
      });
    
      displayData = Object.values(groupedData).map((group: any) => {
        const averageRow: any = {
          resid: group[0].resid,
          resnum: group[0].resnum,
          resmut: group[0].resmut,
          isAggregate: group.length > 1,
          count: group.length
        };
      
        const sums: any = {};
        const counts: any = {};
      
        group.forEach((item: any) => {
          Object.keys(item).forEach(key => {
            if (typeof item[key] === 'number') {
              if (!sums[key]) {
                sums[key] = 0;
                counts[key] = 0;
              }
              if (item[key] !== null) { 
                sums[key] += item[key];
                counts[key]++;
              }
            }
          });
        });
      
        Object.keys(sums).forEach(key => {
          averageRow[key] = counts[key] > 0 ? sums[key] / counts[key] : null; 
        });
      
        return averageRow;
      });
    }

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
            onChange={(e) => setExpandData(e.target.checked)}
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
      {displayData.length} Records Found
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
            {displayData.map((data, index) => (
              <tr key={index}>
              <td className="border border-gray-300">{data.isAggregate ? (<span title={`Average of ${data.count} separate experiments. Click to expand`} className="text-blue-500" onClick={() => setExpandData(true)} style={{cursor: 'pointer'}}>►</span>) : ''}{getVariantDisplay(data.resid, data.resnum, data.resmut)}</td>
              <td className="border border-gray-300">{data.yield_avg !== null && !isNaN(data.yield_avg) ? roundTo(data.yield_avg, 2) : '—'}</td>
              <td className="border border-gray-300">{data.KM_avg !== null && !isNaN(data.KM_avg) ? `${roundTo(data.KM_avg, 2)} ± ${data.KM_SD !== null && !isNaN(data.KM_SD) ? roundTo(data.KM_SD, 2) : '—'}` : '—'}</td>
              <td className="border border-gray-300">{data.kcat_avg !== null && !isNaN(data.kcat_avg) ? `${roundTo(data.kcat_avg, 1)} ± ${data.kcat_SD !== null && !isNaN(data.kcat_SD) ? roundTo(data.kcat_SD, 1) : '—'}` : '—'}</td>
              <td className="border border-gray-300">{data.kcat_over_KM !== null && !isNaN(data.kcat_over_KM) ? `${roundTo(data.kcat_over_KM, 2)} ± ${data.kcat_over_KM_SD !== null && !isNaN(data.kcat_over_KM_SD) ? roundTo(data.kcat_over_KM_SD, 2) : '—'}` : '—'}</td>
              <td className="border border-gray-300">{data.T50 !== null && !isNaN(data.T50) ? `${roundTo(data.T50, 1)} ± ${data.T50_SD !== null && !isNaN(data.T50_SD) ? roundTo(data.T50_SD, 1) : '—'}` : '—'}</td>
              <td className="border border-gray-300">{data.Tm !== null && !isNaN(data.Tm) ? `${roundTo(data.Tm, 1)} ± ${data.Tm_SD !== null && !isNaN(data.Tm_SD) ? roundTo(data.Tm_SD, 1) : '—'}` : '—'}</td>
              <td className="border border-gray-300">{data.Rosetta_score !== null && !isNaN(data.Rosetta_score) ? roundTo(data.Rosetta_score, 1) : '—'}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DataPage;