import React, { useState } from "react";
import {Helmet} from "react-helmet";
import "./App.scss";
import Footer from './Footer';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';

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
      <div class ="account">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
        </Helmet>
        <Navbar />
      <div class="content">
      <header>
        <h1 class="fw-bold">Account Details</h1>
    </header>
        <section id="account-overview">
            <h2>Account Overview</h2>
            <p>View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
        </section>
        </div>
        <Footer />
    </div>
  );
}
export default Home;