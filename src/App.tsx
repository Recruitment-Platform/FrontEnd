import React from 'react';
import './App.css';
import GlobalStyle from '../src/styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
