import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages';
import { Sketchbook } from './pages/Sketchbook';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <HomePage/> */}
      <Sketchbook/>
    </div>
  );
}

export default App;
