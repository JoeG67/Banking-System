import React from "react";
import { Helmet } from "react-helmet";
import { Link } from '@react-email/link';
import Footer from './Footer';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

function Contact() {
    return (
        <div class="contact">
            <Navbar />
            <Helmet>
                <meta name="viewport" title="Contact" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
            </Helmet>

            <header class="py-3 mt-0">
                <div class="container px-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-6">
                            <div class="text-center my-5">
                                <h1 class="display-5 fw-bolder mb-1">Contact Details</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section below displays basic headlines and descriptions for the contact page */}
            <section class="border-bottom" id="features">
                <div class="container px-4 my-4">
                    <div class="row gx-5">
                    
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                            <h2 class="h4 fw-bolder">Customer Support</h2>
                            <p>Our customer support team is available 24/7 to assist you with any inquiries or issues you may have. Whether it's a simple question or a complex financial matter, we're just a call or message away.</p>
                        </div>
                        <div class="col-lg-4">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                            <h2 class="h4 fw-bolder">Contact Information</h2>
                            <p>Customer Service Hotline: <Link href="(123) 456-7890">(123) 456-7890</Link></p>   {/*Link components are used for the phone number and emails*/}
                            <p> Email: <Link href="support@xyzbank.com">support@xyzbank.com</Link></p>
                            <p>Visit Us: 123 Main Street, City, State, ZIP</p>
                        </div>
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                            <h2 class="h4 fw-bolder">Feedback</h2>
                            <p>We value your feedback and are constantly striving to improve our services. If you have any suggestions or feedback to share, please feel free to do so. Your input helps us serve you better.</p>
                        </div>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15935.348102668393!2d101.6874214!3d3.137711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c71f9dfef7%3A0x7a53ea764838b90b!2sThe%20National%20Museum%20of%20Malaysia!5e0!3m2!1sen!2smy!4v1699771031966!5m2!1sen!2smy" 
            width="600" 
            height="450"  
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"               
            />
                    </div>
                </div> 
            </section>
            <Footer />
        </div>
    );
}
export default Contact;