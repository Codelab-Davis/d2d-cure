import React, { useState, useEffect } from 'react';
import "../../app/globals.css";

const DataPage = () => {
  const [expandData, setExpandData] = useState(false);
  const [useRosettaNumbering, setUseRosettaNumbering] = useState(false);
  const [includeNonCurated, setIncludeNonCurated] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState('');
  const [residueNumber, setResidueNumber] = useState('');
  const [institutions, setInstitutions] = useState<any[]>([]);
  const [characterizationData, setCharacterizationData] = useState<any[]>([]);

  // Placeholder for the number of records found
  const recordsFound = 123; // Placeholder value

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

    fetchInstitutions();
    fetchData();
  }, []);

  const getVariantDisplay = (resid:any, resnum:any, resmut:any) => {
    const variant = `${resid}${resnum}${resmut}`;
    return variant === 'X0X' ? 'WT' : variant;
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
            checked={includeNonCurated}
            onChange={() => setIncludeNonCurated(!includeNonCurated)}
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
              <option key={institution.id} value={institution.id}>
                {institution.fullname}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4 font-bold">
        {recordsFound} Records Found
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
        <table className="table-auto">
          <thead>
            <tr>
              <th>Variant</th>
              <th>Yield</th>
              <th>Km</th>
              <th>Kcat</th>
              <th>Kcat/Km</th>
              <th>T50</th>
              <th>Tm</th>
              <th>Rosetta Score Change</th>
            </tr>
          </thead>
          <tbody>
            {characterizationData.map((data, index) => (
              <tr key={index}>
                <td>{getVariantDisplay(data.resid, data.resnum, data.resmut)}</td>
                <td>{data.yield_avg}</td>
                <td>{data.KM_avg}</td>
                <td>{data.kcat_avg}</td>
                <td>{data.kcat_over_KM}</td>
                <td>{data.T50}</td>
                <td>{data.Tm}</td>
                <td>{data.Rosetta_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default DataPage;