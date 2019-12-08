import React from 'react';
import './App.css';
import { StarWarsList } from './components/StarWarsList';


const App = () => {  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsList/>
    </div>
  );
}

export default App;
