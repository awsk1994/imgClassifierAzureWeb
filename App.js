import React from 'react';
import data from './data.json';
import ImageTable from './ImageTable';

function App() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageTable data={data} />
    </div>
  );
}

export default App;