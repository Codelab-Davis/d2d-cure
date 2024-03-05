import React, { useState } from 'react';
import axios from 'axios';

function GraphImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

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
      document.getElementById('graphImage').src = imageUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>test graph</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload and Plot</button>
      <img id="graphImage" alt="Graph will be displayed here after uploading."/>
    </div>
  );
}

export default GraphImage;
