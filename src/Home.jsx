import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'; // Import Link for navigation
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.css';

const handleLogout = () => {
  // Perform logout logic (e.g., clearing authentication tokens)
  // Redirect to the login page or perform any other desired action
  // For this example, we'll simply navigate back to the login page
  // You should replace this with your actual logout logic
  // You may also use useHistory for navigation
  window.location.href = '/'; // Redirect to the login page
};

function Home() {
    return(
      <div>
      {/* <nav class="navbar navbar-expand-lg bg-light">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/dashboard">Settings</Link>
          </li>
          <li>
          <Link to="/"><Button type="logout">Logout</Button></Link>
          </li>
        </ul>
      </nav> */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div class="content">
      <header>
        <h1>Welcome to XYZ Bank</h1>
    </header>
    <main>
        <section id="account-overview">
            <h2>Account Overview</h2>
            <p>View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
        </section>

        <section id="secure-transactions">
            <h2>Secure Transactions</h2>
            <p>Your security is our top priority. Rest assured that your transactions are protected by advanced encryption and security measures.</p>
        </section>

        <section id="easy-transfers">
            <h2>Easy Transfers</h2>
            <p>Transfer funds between your accounts or send money to family and friends with just a few clicks. It's quick, convenient, and hassle-free.</p>
        </section>

        <section id="bill-pay">
            <h2>Bill Pay</h2>
            <p>Set up recurring payments or make one-time payments for your bills. Never miss a due date again.</p>
        </section>
  
        <section>
            <h2>24/7 Access</h2>
            <p>Access your accounts anytime, anywhere. Our online banking system is available around the clock to serve your needs.</p>
        </section>

        <section>
            <h2>Personalized Support</h2>
            <p>Have questions or need assistance? Our dedicated customer support team is here to help. Contact us via chat, email, or phone.</p>
        </section>

        <section>
            <h2>Stay Informed</h2>
            <p>Stay up to date with the latest financial news, tips, and resources. Explore our blog and educational materials to enhance your financial knowledge.</p>
        </section>

        <section>
            <h2>Security First</h2>
            <p>Your security is our utmost concern. We employ robust security measures to protect your information and ensure safe banking.</p>
        </section>

        <section>
            <h2>Get Started</h2>
            <p>Log in to your account or sign up today to experience the future of banking with XYZ Bank. We're here to help you achieve your financial goals.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 XYZ Bank. All rights reserved.</p>
    </footer>
      </div>
    </div>
  );
}
export default Home;