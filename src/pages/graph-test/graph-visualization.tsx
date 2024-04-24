import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';


function GraphImage() {

  const headingStyle = {
    fontFamily: 'Vetrena MF Thin, sans-serif', // Replace with your desired font family
    // You can add more styles as needed
    fontSize: '24px', // Replace with your desired font size
    fontWeight: 'bold', // Replace with your desired font weight
    color: '#333', // Replace with your desired text color
  };

  const textBlockStyle = {
    fontFamily: 'Vetrena MF Thin, sans-serif', // Replace with your desired font family
    fontWeight: 'normal', // Replace with your desired font weight
    color: '#333', // Replace with your desired text color
    /* Add more styles as needed */
  };



  const [selectedFile, setSelectedFile] = useState<File|null>(null);
  const [variantName, setVariantName] = useState<String>();
  const [renderStatus, setRenderStatus] = useState<boolean>(false);
  
  const handleVariantNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const variantName = event.target.value;
    if (variantName) {
      setVariantName(variantName);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async () => {
    setRenderStatus(true)

    const formData:any = new FormData();
    formData.append('file', selectedFile);
    formData.append('variant-name', variantName)

    console.log(formData);

    try {
    const response = await fetch('/api/getInstitutions');
    const data = await response.json();
    console.log('gg');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2 style = {headingStyle}>Data Visualization</h2>
      <input type="file" onChange={handleFileChange} />
      <text style = {textBlockStyle}> Enter Variant Name: </text>
      < input type = "text" onChange = {handleVariantNameChange}></input>
        <div style = {{position : 'relative', top: '20px'}}><button onClick={handleSubmit}>  Upload and Plot</button>
        </div>
        <div style = {{position : 'relative', top: '30px'}}>
          {renderStatus && <img id="graphImage" alt="Graph will be displayed here after uploading."/>}
        </div>
        
      </div>
        
      

  );
}

export default GraphImage;