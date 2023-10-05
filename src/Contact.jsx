import React, { useState } from "react";
import {Helmet} from "react-helmet";
import { Link } from '@react-email/link';
import Footer from './Footer';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

function Contact() {
    return(
    <div class="contact">
    <Navbar />
      <Helmet>
      <meta name="viewport" title="Contact" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
      </Helmet>
      
      <header class="bg-dark py-3 mt-0">
          <div class="container px-5">
              <div class="row gx-5 justify-content-center">
                  <div class="col-lg-6">
                      <div class="text-center my-5">
                          <h1 class="display-5 fw-bolder text-white mb-1">Contact Details</h1>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      <section class="border-bottom" id="features">
          <div class="container px-4 my-4">
              <div class="row gx-5">
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                      <h2 class="h4 fw-bolder">Contact Us</h2>
                      <p>Feel free to get in touch with us if you have any questions, concerns, or need assistance with your banking needs. Our dedicated team is here to help you.</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Customer Support</h2>
                      <p>Our customer support team is available 24/7 to assist you with any inquiries or issues you may have. Whether it's a simple question or a complex financial matter, we're just a call or message away.</p>
                  </div>
                  <div class="col-lg-4">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                      <h2 class="h4 fw-bolder">Contact Information</h2>
                      <p>Customer Service Hotline: <Link href="(123) 456-7890">(123) 456-7890</Link></p>
                     <p> Email: <Link href="support@xyzbank.com">support@xyzbank.com</Link></p>
                     <p>Visit Us: 123 Main Street, City, State, ZIP</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Feedback</h2>
                      <p>We value your feedback and are constantly striving to improve our services. If you have any suggestions or feedback to share, please feel free to do so. Your input helps us serve you better.</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Report a Problem</h2>
                      <p>If you encounter any technical issues or security concerns while using our banking app, please report them to our technical support team immediately. Your security is our priority.</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Placeholder</h2>
                      <p>LoremIpsum</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Placeholder</h2>
                      <p>LoremIpsum</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Placeholder</h2>
                      <p>LoremIpsum</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                      <h2 class="h4 fw-bolder">Placeholder</h2>
                      <p>LoremIpsum</p>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
  </div>
  );
}
export default Contact;