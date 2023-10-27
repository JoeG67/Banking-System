import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./App.scss";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg mb-1 rounded">
      <div class="container-fluid">
        <li><Link to="/home">
          <a class="navbar-brand" href="/#">XYZBank</a></Link></li>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
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
            </li>
          </ul>
          <form class="custom-center-links" role="search">
            <Link to="/"><Button variant="info" class="btn btn-info text-white fw-bold">Logout</Button></Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;