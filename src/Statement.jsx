import React, {useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useUser } from "./UserContext";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";


function Statement() {
    const {user} = useUser();
    return (
        <div class="statement">
            <Navbar />
        <header class="py-3 mt-0">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder mb-1">Bank Statement</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="border bottom" id="features">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Statement Overview</h2>
            <p className="lead mb-0">View a list of all transactions made within your account history</p>
          </div>
        </div>
      </section>
      <section className="border bottom" id="features">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Statement Overview</h2>
            <p className="lead mb-0">View a list of all transactions made within your account history</p>
          </div>
        </div>
      </section>
      <section className="border bottom" id="features">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Statement Overview</h2>
            <p className="lead mb-0">View a list of all transactions made within your account history</p>
          </div>
        </div>
      </section>
            <Footer />
       </div> 
    );
}

export default Statement