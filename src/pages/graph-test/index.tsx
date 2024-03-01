function GraphImage() {
  // URL of your Flask route
  const flaskImageUrl = 'http://127.0.0.1:5000/plot';

  return (
    <div>
      <h2>test graph</h2>
      <img src={flaskImageUrl}/>
    </div>
  );
}

export default GraphImage;
