import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserProvider';
import axios from 'axios';
import Papa from 'papaparse';

const WildType = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [kineticRawData, setKineticRawData] = useState<any[]>([]);
  const [entryData, setEntryData] = useState<any>([]);

  const [expressed, setExpressed] = useState<any>(0); //protein express
  

  return (
    <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">Variant Information</h1>
        <h4>Submit Wild-Type Data</h4>
    </div>
  )
}

export default WildType;