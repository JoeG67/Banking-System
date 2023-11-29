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
            <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-1">Bank Statement</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
            <Footer />
       </div> 
    );
}

export default Statement