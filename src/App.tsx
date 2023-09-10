import React from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from '@pages/test';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
