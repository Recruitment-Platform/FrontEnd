import React from 'react';
import './App.css';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Redirect from '@pages/LoginRedirect';
import InitialMyInformation from '@pages/InitialMyInformation';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/set" element={<InitialMyInformation />}></Route>

          <Route path="/login/oauth2/token" element={<Redirect />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
