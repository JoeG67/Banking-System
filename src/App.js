import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';  //React Router library is used for handling client-side routing
import "./App.scss";
import Login from './Login'; 
import Home from './Home'
import Account from './Account'
import Contact from './Contact'

function App() {

  return (
    <BrowserRouter>  {/*BrowserRouter provides the routing infrastructure for your application */}
      <Routes>  {/*Router component used to define the routing configuration for your application */}
       {/* Route is used to define individual routes within the <Routes> component, specifies the path (URL) for which the route should be active*/}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;