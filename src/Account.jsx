import React, { useState } from "react";
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
function Account() {

  const [balance, setBalance] = useState(1000)

  const [incrementBy, setIncrementBy] = useState(1);
  const [decrementBy, setDecrementBy] = useState(1);

const increment = () => {
  setBalance(balance + parseInt(incrementBy));
};

// Function to decrement the 'count' variable by a custom value
const decrement = () => {
  // Add a check to prevent count from going below 0
  if (balance > parseInt(decrementBy) && balance !== 20) {
    setBalance(balance - parseInt(decrementBy));
  } else {
    toast("Minimum account balance of RM20 is required for transactions to be made, please withdraw an appropriate amount or deposit enough cash to continue withdrawal activity");
  }
};
    return(
      <div class ="account">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
        </Helmet>
        <Navbar />
      {/* <div class="content">
      <header>
        <h1 class="fw-bold">Account Details</h1>
    </header>
        <section id="account-overview">
            <h2>Account Overview</h2>
            <p>View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
        </section>
        <div>
      <p>Balance: {balance}</p>

      <div>
        <label>Deposit: </label>
        <input
          type="number"
          value={incrementBy}
          onChange={(e) => setIncrementBy(e.target.value)}
        />
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <label>Withdraw: </label>
        <input
          type="number"
          value={decrementBy}
          onChange={(e) => setDecrementBy(e.target.value)}
        />
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
        </div>*/}
        {/* <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-1">Account Details</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header> */}
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-1">Account Details</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="border bottom" id="features">
        <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Account Overview</h2>
                    <p class="lead mb-0">View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
                </div>
            </div>
        </section>
   
        <section class="py-3 border-bottom">
        <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Balance: RM{balance}</h2>
                    <h2 class="fw-bolder">Available for withdrawal: RM{balance - 20}</h2>
                    <div>
        <label>Deposit: </label>
        <input type="number" class="numberInput" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)}/>
        <Button variant="info"onClick={increment}>Increment</Button>
      </div>

      <div>
        <label>Withdraw: </label>
        <input type="number" class="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)}/>
        <Button variant="info" onClick={decrement}>Decrement</Button>
      </div>
                </div>
            </div>
        </section>
       <Footer /> 
    </div> 
  );
}
export default Account;