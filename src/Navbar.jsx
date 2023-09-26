import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./App.scss";

function Navbar() {
  return(
    <nav class="navbar navbar-expand-lg justify-content-center">
    <ul class="mb-0">
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
      <Link to="/"><Button variant="info" class="btn btn-info text-white fw-bold">Logout</Button></Link>
      </li>
    </ul>
  </nav>
  );
};
export default Navbar;