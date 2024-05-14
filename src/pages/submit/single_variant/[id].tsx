import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/components/UserProvider';
import axios from 'axios';
import Papa from 'papaparse';
import s3 from '../../../../s3config';
import NavBar from '@/components/NavBar';

const SingleVariant = () => {
  const { user } = useUser();
  const router = useRouter();
  const { id } = router.query;

  const [currentView, setCurrentView] = useState('checklist');
  const [selectedDetail, setSelectedDetail] = useState('');

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
  const [oligoOrdered, setOligoOrdered] = useState<any>('no');
  const [plasmidFile, setPlasmidFile] = useState<File | null>(null);
  const [expressed, setExpressed] = useState<any>(0);
  const [kineticAssayData, setKineticAssayData] = useState<Array<any>>([]); // the parsed CSV for table display 
  const [variantName, setVariantName] = useState<String>();
  const [showKineticWTDataOptions, setShowKineticWTDataOptions] = useState(false);
  const [kineticRawDataIds, setKineticRawDataIds] = useState<number[]>([]);
  const [kineticWTId, setKineticWTId] = useState<any>(0);
  const [kineticData, setKineticData] = useState<any[]>([]); // the filtered data from KineticRawData table, for the WT selection 
  const [showTempWTDataOptions, setShowTempWTDataOptions] = useState(false);
  const [tempRawDataIds, setTempRawDataIds] = useState<number[]>([]);
  const [tempWTId, setTempWTId] = useState<any>(0);
  const [tempData, setTempData] = useState<any[]>([]);
  const [gelImages, setGelImages] = useState<any[]>([]);


  useEffect(() => {
    const fetchEntryData = async () => {
      if (!id) return; 
      try {
        const response = await fetch(`/api/getCharacterizationDataEntryFromID?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch entry data');
        }
        const data = await response.json();
        setEntryData(data);
      } catch (error) {
        console.error('Error fetching entry data:', error);
      }
    };
    const fetchKineticWTData = async () => {
      const response = await fetch('/api/getCharacterizationData');
      const data = await response.json();
      const filteredData = data.filter((row:any) => row.institution === user?.institution && row.resid === "X");
      const ids = filteredData.map((row:any) => row.raw_data_id).filter((id:any) => id !== 0); 
      setKineticRawDataIds(ids);
      console.log(ids); 
    };
    const fetchTempWTData = async () => {
      const response = await fetch('/api/getCharacterizationData');
      const data = await response.json();
      const filteredData = data.filter((row:any) => row.institution === user?.institution && row.resid === "X");
      const ids = filteredData.map((row:any) => row.temp_raw_data_id).filter((id:any) => id !== 0); 
      setTempRawDataIds(ids);
      console.log("TEMPT:" + ids); 
    };
    const fetchOligosData = async () => {
      const response = await fetch('/api/getOligos');
      const data = await response.json();
      setOligosData(data);
    };
    const fetchPossibleTeammates = async () => {
      if (user?.pi) {
        const response = await fetch(`/api/getUsersFromPI?pi=${encodeURIComponent(user.pi)}`);
        const data = await response.json();
        setPossibleTeammates(data);
      }
    };

    fetchEntryData();
    fetchKineticWTData(); 
    fetchTempWTData(); 
    fetchOligosData(); 
    fetchPossibleTeammates();
  }, [id, user]); 


  // for getting the (filtered) kin data and temp data for WT selection. needs to be in a seperate useState because of the rawDataIds being part of the depenecy array. in the other useState, we are also fetching this data. 
  useEffect(() => {
    const fetchKineticData = async () => {
      if (kineticRawDataIds.length > 0) {
        try {
          const response = await fetch('/api/getKineticRawDataFromIDs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: kineticRawDataIds }),
          });
          const data = await response.json();
          setKineticData(data);
        } catch (error) {
          console.error('Error fetching kinetic raw data:', error);
        }
      }
    };

    const fetchTempData = async () => {
      if (tempRawDataIds.length > 0) {
        try {
          const response = await fetch('/api/getTempRawDataFromIDs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ids: tempRawDataIds }),
          });
          const data = await response.json();
          setTempData(data);
        } catch (error) {
          console.error('Error fetching temp raw data:', error);
        }
      }
    };

    fetchKineticData();
    fetchTempData(); 
  }, [id, user, kineticRawDataIds, tempRawDataIds]); 

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

  const generateGraph = async (file: File) => {
    const formData:any = new FormData();
    formData.append('file', file);
    formData.append('variant-name', entryData.resid+entryData.resnum+entryData.resmut)

    console.log("generating...")

    try {
      const response = await axios.post('http://127.0.0.1:5002/plotit', formData, {
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

  const fetchGelImages = async (institution:any) => {
    const params = {
      Bucket: 'd2dcurebucket',
      Prefix: `gel-images/${institution}` 
    };
  
    try {
      const data = await s3.listObjectsV2(params).promise();
      if (data && data.Contents) {
        return data.Contents.map(file => ({
          key: file.Key,
          url: `https://${params.Bucket}.s3.amazonaws.com/${file.Key}`
        }));
      } else {
        console.error('Empty response or missing Contents:', data);
        return []; // Return an empty array or handle the error accordingly
      }
    } catch (err) {
      console.error('Error fetching files', err);
      throw err;
    }
  };

  const handleSelectPreviousGelImage = async () => {
    try {
      const images = await fetchGelImages(user?.institution);
      console.log(images)
      setGelImages(images);
    } catch (error) {
      console.error('Error fetching gel images:', error);
    }
  };


  // DATABASE UPDATE FUNCTIONS // 

  const updateRosettaScore = async () => {
    const response = await fetch('/api/updateCharacterizationDataRosettaScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: entryData.id,
        Rosetta_score: (parseFloat(variant) - parseFloat(WT))
      }),
    });
    setCurrentView('checklist')
  
    if (!response.ok) {
      console.error('Failed to update data');
    }
  };

  const updateOligoOrdered = async () => {
    const isOrdered = oligoOrdered === 'yes'; 
    const response = await fetch('/api/updateCharacterizationDataOligoOrdered', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: entryData.id,
        oligo_ordered: isOrdered
      }),
    });
    setCurrentView('checklist')
  
    if (!response.ok) {
      console.error('Failed to update data');
    }
  };

  const handlePlasmidFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setPlasmidFile(file);
  };

  const updatePlasmid = async (event: any) => {
    const file = plasmidFile;
    if (!file) return;

    const fileExtension = file.name.split('.').pop();
  
    // Rename the file
    const newFileName = `${user.user_name}-BglB-${entryData.resid}${entryData.resnum}${entryData.resmut}-${entryData.id}.${fileExtension}`;
    const fileType = file.type;
    const blob = file.slice(0, file.size, fileType); // Create a blob with the file's mime type
    const newFile = new File([blob], newFileName, { type: fileType });
  
    // Upload the file to S3
    try {
      const params = {
        Bucket: 'd2dcurebucket',
        Key: `sequencing/${newFileName}`,
        Body: newFile,
        ContentType: fileType,
      };
      const data = await s3.upload(params).promise();
      console.log('File uploaded successfully. Location:', data.Location);

      // Update database columns 
      const response = await fetch('/api/updateCharacterizationDataPlasmidStuff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: entryData.id,
          ab1_filename: newFileName
        }),
      });
      setCurrentView('checklist')
    
      if (!response.ok) {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const updateProteinExpressed = async () => {
    const isExpressed = expressed === 'yes'; 
    const response = await fetch('/api/updateCharacterizationDataExpressed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: entryData.id,
        expressed: isExpressed
      }),
    });
    setCurrentView('checklist')
  
    if (!response.ok) {
      console.error('Failed to update data');
    }
  };



  // DATABASE UPDATE FUNCTIONS // 

  
  

  const foundOligo = oligosData.find(oligo => oligo.variant === entryData.resid+entryData.resnum+entryData.resmut);
  const renderChecklistTable = () => {
    const checklistItems = [
      "Protein Modeled",
      "Oligonucleotide ordered",
      "Plasmid sequence verified",
      "Protein induced and expressed",
      "Kinetic assay data uploaded",
      "Wild type kinetic data uploaded",
      "Thermostability assay data uploaded",
      "Wild type thermostability assay data uploaded",
      "Melting point values uploaded",
      "Gel uploaded"
    ];

    const getStatusStyle = (item:any) => {
      switch (item) {
        case "Protein Modeled":
          if (entryData.Rosetta_score === null) {
            return {
              text: "Incomplete",
              className: "text-yellow-700 bg-yellow-100 rounded-full px-4 py-1"
            };
          } else {
            return {
              text: "Complete",
              className: "text-green-700 bg-green-100 rounded-full px-4 py-1"
            };
          }
        case "Oligonucleotide ordered":
            return {
              text: "Complete",
              className: "text-green-700 bg-green-100 rounded-full px-4 py-1"
            };
        case "Plasmid sequence verified":
          if (entryData.plasmid_verified === false) {
            return {
              text: "Incomplete",
              className: "text-yellow-700 bg-yellow-100 rounded-full px-4 py-1"
            };
          } else {
            return {
              text: "Complete",
              className: "text-green-700 bg-green-100 rounded-full px-4 py-1"
            };
          }
        case "Protein induced and expressed":
          if (entryData.expressed === null) {
            return {
              text: "Incomplete",
              className: "text-yellow-700 bg-yellow-100 rounded-full px-4 py-1"
            };
          } else {
            return {
              text: "Complete",
              className: "text-green-700 bg-green-100 rounded-full px-4 py-1"
            };
          }
        default:
          return {
            text: "Incomplete",
            className: "text-yellow-700 bg-yellow-100 rounded-full px-4 py-1"
          };
      }
    };

    return (
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full max-w-4xl">
          {/* Button container */}
          <div className="flex justify-end mb-4">
            <button 
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
              onClick={() => {/* Add your submit logic here */}}
            >
              Submit for Review
            </button>
          </div>
    
          {/* Table container */}
          <div className="rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Checklist Item</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {checklistItems.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center">
                      <span className={getStatusStyle(item).className}>
                        {getStatusStyle(item).text}
                      </span>
                    </td>
                    <td className="px-4 py-2">{item}</td>
                    <td className="px-4 py-2 text-center">
                      <button 
                        className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={() => {
                          setCurrentView('detail');
                          setSelectedDetail(item);
                        }}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const renderDetailView = () => {
    switch (selectedDetail) {
      case "Protein Modeled":
        return (
          <div className="space-y-4">
            <button 
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setCurrentView('checklist')}
            >
              &lt; Back to Checklist
            </button>
          <h2 className="text-2xl font-bold text-left">Foldit Scores</h2>
          <div className="flex flex-col space-y-2">
            <label className="block">
              WT (starting) score:
              <input type="text" value={WT} onChange={(e) => setWT(e.target.value)} 
                     className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded" 
                     placeholder="Enter score" />
            </label>
            <label className="block">
              Variant (ending) score:
              <input type="text" value={variant} onChange={(e) => setVariant(e.target.value)} 
                     className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded" 
                     placeholder="Enter score" />
            </label>
          </div>
          <div className="flex justify-start space-x-2">
            <button onClick={updateRosettaScore} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
          </div>
        </div>
        );
      case "Oligonucleotide ordered":
        return (
          <div className="space-y-4">
            <button 
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setCurrentView('checklist')}
            >
              &lt; Back to Checklist
            </button>
            <h2 className="text-2xl font-bold text-left">Oligonucleotide Ordered?</h2>
            <div className="flex flex-col space-y-2">
              <label className="block">
                Order Status:
                <select 
                  value={oligoOrdered} 
                  onChange={(e) => setOligoOrdered(e.target.value)}
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className="flex justify-start space-x-2">
              <button onClick={updateOligoOrdered} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
            </div>
          </div>
        );
      case "Plasmid sequence verified":
          return (
            <div className="space-y-4">
              <button 
                className="text-blue-500 hover:text-blue-700"
                onClick={() => setCurrentView('checklist')}
              >
                &lt; Back to Checklist
              </button>
              <h2 className="text-2xl font-bold text-left">Plasmid Sequence Verified?</h2>
              <div className="flex flex-col space-y-2">
                <label className="block">
                  Upload File:
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handlePlasmidFileChange}
                    className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                  />
                </label>
                {plasmidFile && <p>Selected file: {plasmidFile.name}</p>}
              </div>
              <div className="flex justify-start space-x-2">
                <button onClick={updatePlasmid} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
              </div>
            </div>
          );
      case "Protein induced and expressed":
        return (
          <div className="space-y-4">
            <button 
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setCurrentView('checklist')}
            >
              &lt; Back to Checklist
            </button>
            <h2 className="text-2xl font-bold text-left">Protein induced and expressed?</h2>
            <div className="flex flex-col space-y-2">
              <label className="block">
                Was the protein expressed:
                <select 
                  value={oligoOrdered} 
                  onChange={(e) => setExpressed(e.target.value)}
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </label>
            </div>
            <div className="flex justify-start space-x-2">
              <button onClick={updateProteinExpressed} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
            </div>
          </div>
        );
      case "Kinetic assay data uploaded":
        return (
          <div>
            <h2>Kinetic assay data uploaded?</h2>
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
            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      case "Wild type kinetic data uploaded":
        return (
          <div>
            <h2>Wild type kinetic data uploaded?</h2>
            <button onClick={() => setShowKineticWTDataOptions(!showKineticWTDataOptions)}>Select WT data</button>
            <div>
              {showKineticWTDataOptions && kineticData.map((row, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`wt-data-${index}`}
                    name="wt-data"
                    value={row.id}
                    onChange={() => setKineticWTId(row.id)}
                    checked={kineticWTId === row.id}
                  />
                  <label htmlFor={`wt-data-${index}`}>
                    WT data uploaded by {row.user_name}, assayed on {row.assay_date}
                  </label>
                </div>
              ))}
            </div>
            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      case "Thermostability assay data uploaded":
        return (
          <div>
            <h2>Thermostability assay data uploaded?</h2>
            <button className="ml-2">Upload raw data</button>
            
            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      case "Wild type thermostability assay data uploaded":
        return (
          <div>
            <h2>Wild type thermostability assay data uploaded?</h2>
            <button onClick={() => setShowTempWTDataOptions(!showTempWTDataOptions)}>Select WT data</button>
            <div>
              {showTempWTDataOptions && tempData.map((row, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`wt-data-${index}`}
                    name="wt-data"
                    value={row.id}
                    onChange={() => setTempWTId(row.id)}
                    checked={tempWTId === row.id}
                  />
                  <label htmlFor={`wt-data-${index}`}>
                    WT data uploaded by {row.user_name}, assayed on {row.assay_date}
                  </label>
                </div>
              ))}
            </div>
  
            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      case "Melting point values uploaded":
        return (
          <div>
            <h2>Melting point values uploaded?</h2>
            <input type="text" placeholder="Tm mean(°C)" className="ml-2" />
            <input type="text" placeholder="Tm standard deviation(°C)" className="ml-2" />

            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      case "Gel uploaded":
        return (
          <div>
            <h2>Gel Uploaded?</h2>
            <button className="ml-2">Upload new gel image</button>
            <button onClick={handleSelectPreviousGelImage}>
              Select Previous gel image
            </button>
            {gelImages.length > 0 && (
              <div>
                {gelImages.length > 0 && (
                  <div>
                    {gelImages.map((image, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          id={`gel-image-${index}`}
                          name="gel-image"
                          value={image.key}
                          onChange={() => console.log(image.key)} // Handle image selection
                        />
                        <label htmlFor={`gel-image-${index}`}>
                          <img
                            style={{
                              maxWidth: "200px",
                              maxHeight: "200px",
                              overflow: "hidden",
                            }}
                            src={image.url}
                            alt={`Gel Image ${index}`}
                          />
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <button className="mr-4">Save</button>
            <button onClick={() => setCurrentView('checklist')}>Back to Checklist</button>
          </div>
        );
      // Add cases for other checklist items here
      default:
        return <div>Detail view for {selectedDetail}</div>;
    }
  };

  return (
    <>
    <NavBar></NavBar>
    <div className="flex mt-8">
      {/* Sidebar for variant information */}
      <div className="w-1/4 bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Variant Information</h1>
        <div className="mt-5 mb-5">
          <p>
            {entryData.resid}
            {entryData.resnum}
            {entryData.resmut}
          </p>
          {foundOligo && <p>Primer Sequence: {foundOligo.oligo}</p>}
          <p>Database ID: {entryData.id}</p>
          <p>Institution: {entryData.institution}</p>
          <p>Creator: {entryData.creator}</p>
          <div>
            <label>Teammate 1:</label>
            <select
              value={teammate1}
              onChange={(e) => setTeammate1(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-100 border rounded"
            >
              <option value="">None</option>
              {possibleTeammates.map((mate:any, index:any) => (
                <option key={index} value={mate.user_name}>
                  {mate.given_name} ({mate.user_name})
                </option>
              ))}
            </select>
          </div>
          {/* Additional teammate selectors */}
        </div>
      </div>
  
      {/* Main content area for checklist table */}
      <div className="flex-1 overflow-auto p-4">
  {currentView === 'checklist' ? (
    <div>
      {renderChecklistTable()}
    </div>
  ) : (
    <div className={"bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto"}>
      {renderDetailView()}
    </div>
  )}
</div>
    </div>
    </>
  );
};


export default SingleVariant;
