import './App.css';
import React from 'react';
import Comp1 from './Components/Comp1';
import Comp3 from './Components/Comp3';

function App() {
  return (
    <div className="App">
      <Comp1 roomShape='Rectangle'/>
      <Comp3 />

    </div>
  );
}

export default App;
