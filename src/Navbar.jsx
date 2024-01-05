import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./App.scss";
import { Container } from 'react-bootstrap';

function Navbar() {
  return (
   
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/home"><a class="navbar-brand" href="/#">XYZBank</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/statement">Statement</Link>
            </li>
          </ul>
          <button type="button" class="btn btn-danger fw-bolder">
          <Link to="/">Logout</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;