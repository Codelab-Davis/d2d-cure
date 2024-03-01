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





  return (
    <div>
      <label >graph page</label>
    </div>
  );
};

export default DataPage;