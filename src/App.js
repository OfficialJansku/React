import React from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './course.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        𝓔𝓹𝓼𝓽𝓮𝓲𝓷 𝓭𝓲𝓭𝓷'𝓽 𝓴𝓲𝓵𝓵 𝓱𝓲𝓶𝓼𝓮𝓵𝓯
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Af44Slin7lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Course teacher="Tiina Partanen" coursename="React" classroom="2074" />
      <Course teacher="Eerikki Maula" coursename="Unity" classroom="2069"/>
      <Course />
      <Course />
    </div>
  );
}

export default App;
