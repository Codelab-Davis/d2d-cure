import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserProvider';
import axios from 'axios';
import Papa from 'papaparse';

const WildType = () => {
    const { user } = useUser();
    const router = useRouter();
    const { id } = router.query;
  
    const [characterizationData, setCharacterizationData] = useState<any[]>([]);
    const [kineticRawData, setKineticRawData] = useState<any[]>([]);
    const [entryData, setEntryData] = useState<any>([]);
  
    const [oligosData, setOligosData] = useState<any[]>([]);
    const [oligosDisplay, setOligosDisplay] = useState("");
    const [possibleTeammates, setPossibleTeammates] = useState<any>([]);
    const [teammate1, setTeammate1] = useState<any>([]);
    const [teammate2, setTeammate2] = useState<any>([]);
    const [teammate3, setTeammate3] = useState<any>([]);
    const [WT, setWT] = useState<any>('');
    const [variant, setVariant] = useState<any>('');
    const [oligoOrdered, setOligoOrdered] = useState<any>(0);
    const [plasmidFile, setPlasmidFile] = useState<File | null>(null);
    const [plasmidVerified, setPlasmidVerified] = useState<any>(0); 
    const [ab1Filename, setAb1Filename] = useState<any>(''); 
    const [expressed, setExpressed] = useState<any>(0);
    const [kineticAssayData, setKineticAssayData] = useState<Array<any>>([]); // the parsed CSV for table display 
    const [variantName, setVariantName] = useState<String>();
    const [showWTDataOptions, setShowWTDataOptions] = useState(false);
    const [rawDataIds, setRawDataIds] = useState<number[]>([]);
    const [kineticWTId, setKineticWTId] = useState<any>(0);
    const [kineticData, setKineticData] = useState<any[]>([]); // the filtered data from KineticRawData table, for the WT selection 

    useEffect(() => {
        const fetchEntryData = async () => {
            if (!id) return;
            try{
                const response = await fetch(`/api/getCharacterizationDataEntryFromID?id=${id}`);
                if (!response.ok){
                    throw new Error('Failed to fetch entry data');
                }
                const data = await response.json();
                setEntryData(data);
            }   catch(error) {
                console.error('Error fetching entry data: ', error)
            }
        };
        const fetchPossibleTeammates = async () => {
            if (user?.pi) {
              const response = await fetch(`/api/getUsersFromPI?pi=${encodeURIComponent(user.pi)}`);
              const data = await response.json();
              setPossibleTeammates(data);
            }
        };
        fetchEntryData();
        fetchPossibleTeammates();
    }, [id, user]);

    const handleKineticAssayFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
     
        console.log(file)
        // Creating the table 
        if (file) {
          Papa.parse(file, {
            complete: (result) => {
              console.log('Parsed Result:', result);
              setKineticAssayData(result.data);
            },
            header: false // for direct cell access 
          });
        }
    
        // Creating the graph 
        if (file && entryData.resid && entryData.resnum && entryData.resmut) {
          try {
            await generateGraph(file); 
          } catch (error) {
            console.error('Error generating graph:', error);
          }
        } else {
          console.error('File or variant name missing');
        }
      };

    const thirdColumnValues = kineticAssayData.slice(4, 12).map(row => row[2] || '0');
    const fourthColumnValues = kineticAssayData.slice(4, 12).map(row => row[3] || '0');
    const fifthColumnValues = kineticAssayData.slice(4, 12).map(row => row[4] || '0'); 

    //uploads file to server, obtains returned image, displays returned image on the webpage
    const generateGraph = async (file: File) => {
        const formData:any = new FormData(); //K-V pairs for form fields & their values
        formData.append('file', file);
        formData.append('variant-name', entryData.resid+entryData.resnum+entryData.resmut)
    
        console.log("generating...")
    
        try {
          const response = await axios.post('http://127.0.0.1:5000/plotit', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType: 'blob',
            
          });
          const imageBlob = new Blob([response.data], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(imageBlob);
          console.log(imageUrl); 
        
          const graphImage = document.getElementById('graphImage') as HTMLImageElement;
          if (graphImage) graphImage.src = imageUrl;
        } catch (error) {
          console.error('Error uploading file:', error);
        }
    };


  return (
    <div className="mt-8 text-center">
        <h1 className="text-2xl font-bold">Variant Information</h1>
        <br></br>
        <h1 className="text-2xl font-bold">WT BglB</h1>

        <p>Database ID: {entryData.id}</p>
        <p>Institution: {entryData.institution}</p>
        <p>Creator: {entryData.creator}</p>
        <div>
          <label>Teammate 1: </label>
          <select value={teammate1} onChange={(e) => setTeammate1(e.target.value)}>
            <option value="">None</option> 
            {possibleTeammates.map((mate:any, index:any) => (
              <option key={index} value={mate.user_name}>{mate.given_name} ({mate.user_name})</option>
            ))}
          </select>
        </div>
        <div>
          <label>Teammate 2: </label>
          <select value={teammate2} onChange={(e) => setTeammate2(e.target.value)}>
            <option value="">None</option> 
            {possibleTeammates.map((mate:any, index:any) => (
              <option key={index} value={mate.user_name}>{mate.given_name} ({mate.user_name})</option>
            ))}
          </select>
        </div>
        <div>
          <label>Teammate 3: </label>
          <select value={teammate3} onChange={(e) => setTeammate3(e.target.value)}>
            <option value="">None</option>
            {possibleTeammates.map((mate:any, index:any) => (
              <option key={index} value={mate.user_name}>{mate.given_name} ({mate.user_name})</option>
            ))}
          </select>
        </div>
        <br></br>
        <h1 className="text-2xl font-bold">Checklist</h1>
        <br></br>
        <div>
          {/*In database: expressed column is changed */}
          <label>Protein expressed?</label>
          <input 
            type="checkbox" 
            className="ml-2" 
            checked={expressed === 1} 
            onChange={(e) => setExpressed(e.target.checked ? 1 : 0)}
          />
        </div>
        <br></br>   
        <div>
            <label>Kinetic assay data uploaded? </label>
            <input type="file" accept=".csv" onChange={handleKineticAssayFileChange} />
            {kineticAssayData.length > 0 && (
                <>
            <div>
                <table>
                <thead>
                    <tr>
                    <th>Row</th>
                    <th>[S] (mM)</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>A</td><td>75.00</td><td>{thirdColumnValues[0]}</td><td>{fourthColumnValues[0]}</td><td>{fifthColumnValues[0]}</td></tr>
                    <tr><td>B</td><td>25.00</td><td>{thirdColumnValues[1]}</td><td>{fourthColumnValues[1]}</td><td>{fifthColumnValues[1]}</td></tr>
                    <tr><td>C</td><td>8.33</td><td>{thirdColumnValues[2]}</td><td>{fourthColumnValues[2]}</td><td>{fifthColumnValues[2]}</td></tr>
                    <tr><td>D</td><td>2.78</td><td>{thirdColumnValues[3]}</td><td>{fourthColumnValues[3]}</td><td>{fifthColumnValues[3]}</td></tr>
                    <tr><td>E</td><td>0.93</td><td>{thirdColumnValues[4]}</td><td>{fourthColumnValues[4]}</td><td>{fifthColumnValues[4]}</td></tr>
                    <tr><td>F</td><td>0.31</td><td>{thirdColumnValues[5]}</td><td>{fourthColumnValues[5]}</td><td>{fifthColumnValues[5]}</td></tr>
                    <tr><td>G</td><td>0.10</td><td>{thirdColumnValues[6]}</td><td>{fourthColumnValues[6]}</td><td>{fifthColumnValues[6]}</td></tr>
                    <tr><td>H</td><td>0.03</td><td>{thirdColumnValues[7]}</td><td>{fourthColumnValues[7]}</td><td>{fifthColumnValues[7]}</td></tr>
                </tbody>
                </table>
          </div>
          <img id="graphImage" alt="Graph will be displayed here after uploading."/>
          </>
          )}
        </div>
        <br></br>
        <div>
          <label>Thermostability assay data uploaded?</label>
          <button className="ml-2">Upload raw data</button>
        </div>
        <br></br>
        <div>
          <label>Melting point values uploaded?</label>
          <input type="text" placeholder="Tm mean(°C)" className="ml-2" />
          <input type="text" placeholder="Tm standard deviation(°C)" className="ml-2" />
        </div>
        <br></br>
        <div>
          <label>SDS page gel uploaded?</label>
          <button className="ml-2">Upload new gel image</button>
          <button className="ml-2">Select previous gel image</button>
        </div>
        <div>
          <label>Comments: </label>
          <textarea placeholder="enter comments here" className="ml-2" />
        </div>
        <div className="mt-4 mb-4">
           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
             Submit for Curation
           </button>
           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
             Save Progress
           </button>
           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
             Delete Dataset
           </button>
         </div>
    </div>

  )
}

export default WildType;