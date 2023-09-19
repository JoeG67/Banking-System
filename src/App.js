import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import "./App.scss";
import Login from './Login'; // Assuming this is the name of your login form component
import Home from './Home'
import Account from './Account'

function App() {
  return(
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/account" element={<Account/>} />    
        </Routes>
  </BrowserRouter>
  );
}

export default App;