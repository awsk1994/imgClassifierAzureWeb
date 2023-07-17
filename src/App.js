import logo from './logo.svg';
import './App.css';
import ImageTable from './ImageTable'
import React, { useState, useEffect } from 'react';

const {data} = require("./out");

function App() {
  console.log("d", data);
  const [data2, setData2] = useState(data);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <ImageTable data={data2} />
      </body>
    </div>
  );
}

export default App;
