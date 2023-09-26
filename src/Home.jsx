import React, { useState } from "react";
import {Helmet} from "react-helmet";
import "./App.scss";
import Footer from './Footer';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return(
      <div class="home">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
        </Helmet>
        <Navbar />
      <div class="content">
      <header>
        <h1 class="fw-bold">Welcome to XYZ Bank</h1>
    </header>
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
        </div>
        <Footer />
    </div>

  );
}
export default Home;