import React from 'react';
import './App.css';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/right';

function App() {
  return (
    <div className="App">
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
