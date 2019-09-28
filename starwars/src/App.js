import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);  

  useEffect(() =>{
    async function fetchData() {
      try {
        const swData = await axios.get('https://swapi.co/api/people');
        console.log(swData);
        setData(swData);
      }
      catch(err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
