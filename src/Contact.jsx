import React, { useState } from "react";
import {Helmet} from "react-helmet";
import { Link } from '@react-email/link';
import Footer from './Footer';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

function Contact() {
    return(
      <div class ="contact">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
        </Helmet>
        <Navbar />
      <div class="content">
      <header>
        <h1 class="fw-bold">Contact Details</h1>
    </header>
        <section id="contact-overview">
            <h2>Contact Us</h2>
            <p>Feel free to get in touch with us if you have any questions, concerns, or need assistance with your banking needs. Our dedicated team is here to help you.</p>
        </section>
        <section id="contact-overview">
            <h2>Customer Support</h2>
            <p>Our customer support team is available 24/7 to assist you with any inquiries or issues you may have. Whether it's a simple question or a complex financial matter, we're just a call or message away.</p>
        </section>
        <section id="contact-overview">
            <h2>Contact Information</h2>
            <p>Customer Service Hotline: <Link href="(123) 456-7890">(123) 456-7890</Link></p>
            <p> Email: <Link href="support@xyzbank.com">support@xyzbank.com</Link></p>
            <p>Visit Us: 123 Main Street, City, State, ZIP</p>
            
        </section>
        <section id="contact-overview">
            <h2>Feedback</h2>
            <p>We value your feedback and are constantly striving to improve our services. If you have any suggestions or feedback to share, please feel free to do so. Your input helps us serve you better.</p>
        </section>
        <section id="contact-overview">
            <h2>Report a Problem</h2>
            <p>If you encounter any technical issues or security concerns while using our banking app, please report them to our technical support team immediately. Your security is our priority.</p>
        </section>
        </div>
        <Footer />
    </div>
  );
}
export default Contact;