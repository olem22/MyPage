import React from 'react';
import { FaReact, FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiRedux, SiJavascript } from "react-icons/si";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oleg M</h1>
        <h2>Finally I decided to change myself and my life.<br/></h2>
        <p>Having worked in aviation maintenance for many years, I have always dreaming of coding.<br/>
        I always think that it’s just a hobby and only now I decided to deep in.</p>
<h3> <FaReact size='50px'/> <SiRedux size='50px'/> <SiJavascript size='50px'/> <FaCss3 size='50px'/> <FaHtml5 size='50px'/> </h3>
      </header>
    </div>
  );
}

export default App;
