import React, { useState } from "react";
import {Helmet} from "react-helmet";
import Footer from './Footer';
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
    alert("Minimum account balance of RM20 is required for transactions to be made, please withdraw an appropriate amount or deposit enough cash to continue withdrawal activity");
  }
};
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
        </div>
        <Footer />
    </div>
  );
}
export default Account;