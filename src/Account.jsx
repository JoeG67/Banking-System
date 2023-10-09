import React, { useState, useEffect  } from "react";
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import userData from './users.json';
import { useUser } from "./UserContext";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";

function Account() {
  const { user } = useUser(); // Assuming you have the user's email after login
  //The hooks below are initialized and created to help control the values of specific variables within the account page

  // Three hooks below are related to the user's account balance and how the balance is manipulated
  const [balance, setBalance] = useState(user ? parseInt(user.balance) : 0);
  const [incrementBy, setIncrementBy] = useState(1); // Initial/default values are set to 1
  const [decrementBy, setDecrementBy] = useState(1); // Initial/default values are set to 1

  //React hooks below are related to the modals that pop up when the user balance is withdrawn from, deposited to, or transferred from
  const [showInc, setShowInc] = useState(false); // Initial/default values are set to false
  const [showDec, setShowDec] = useState(false); // Initial/default values are set to false
  const [showTran, setShowTran] = useState(false); // Initial/default values are set to false

// Hook below is set up to help control the message value when changed in the input
  const [message, setMessage] = useState(''); // Initial/default values are set to null
 
  //Function below allows for the message to be changed and updated based on what is in the input field
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

//React hooks below allow the previously mentioned modals to be closed when the modal button is clicked
  const handleCloseInc = () => setShowInc(false);
  const handleCloseDec = () => setShowDec(false);
  const handleCloseTran = () => setShowTran(false);

// Function to increase the 'balance' variable through a custom input
const increment = () => {
  setShowInc(true); //Displays the modal 
  setBalance(balance + parseInt(incrementBy)); // Updates the balance value based on user input
};

// Function to decrease the 'balance' variable through a custom input
const decrement = () => {
  // Add a check to prevent count from going below 0 (minimum amount allowed is RM20)
  if (balance > parseInt(decrementBy) && balance !== 20) {
    setShowDec(true); //Displays the modal 
    setBalance(balance - parseInt(decrementBy)); // Updates the balance value based on user input
  } else {
    // User alert to show the user information about the balance limit
    toast("Minimum account balance of RM20 is required for transactions to be made, please withdraw an appropriate amount or deposit enough cash to continue withdrawal activity");
  }
};


// Function to transfer a custom amount of cash to a specific user
const transfer = () => {
 // Add a check to prevent count from going below 0 (minimum amount allowed is RM20)
  if (balance > parseInt(decrementBy) && balance !== 20) {
    setShowTran(true); //Displays the modal 
    setBalance(balance - parseInt(decrementBy)); // Updates the balance value based on user input
  } else { 
    // User alert to show the user information about the balance limit
    toast("Minimum account balance of RM20 is required for transfers to be made, please transfer an appropriate amount or deposit enough cash to continue withdrawal activity");
  }
};


    return(
      <div class ="account">
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
        </Helmet>
        <Navbar />
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
                    <h2 class="fw-bolder">Balance: RM{balance}</h2>  {/* Displays user balance */}
                    <h2 class="fw-bolder">Available for withdrawal: RM{balance - 20}</h2> {/* Displays user balance available for withdrawal*/}
                    <div>
        <label>Deposit: </label>
        {/*Value tag shows which variable is being used along with the onChange in place to update the balance*/}
        <input type="number" class="numberInput" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)}/>
         {/*onClick showing which function is being called when the button is clicked*/}
        <Button variant="info" onClick={increment}>Increment</Button>
      </div>
       {/*Show tag in place to specify which modal is being shown along with an onHide linking to the closing function*/}
      <Modal show={showInc} onHide={handleCloseInc}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
           {/*Value being used to change the balance value is displayed below, onClick tag linking to the closing function*/}
        <Modal.Body>You have deposited RM{incrementBy} into your account</Modal.Body>
        <Modal.Footer>
          {/*onClick linking to the closing function when the button is clicked*/}
          <Button variant="secondary" onClick={handleCloseInc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <label>Withdraw: </label>
        {/*Value tag shows which variable is being used along with the onChange in place to update the balance*/}
        <input type="number" class="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)}/>
        {/*onClick showing which function is being called when the button is clicked*/}
        <Button variant="info" onClick={decrement}>Decrement</Button>
      </div>
       {/*Show tag in place to specify which modal is being shown along with an onHide linking to the closing function*/}
      <Modal show={showDec} onHide={handleCloseDec}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
         {/*Value being used to change the balance value is displayed below, onClick tag linking to the closing function*/}
        <Modal.Body>You have withdrawn RM{decrementBy} from your account</Modal.Body>
        <Modal.Footer>
           {/*onClick linking to the closing function when the button is clicked*/}
          <Button variant="secondary" onClick={handleCloseDec}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            </div>
        </section>

        <section class="border bottom" id="features">
        <div class="container px-5 my-5 px-5">
                <div class="text-center mb-2">
                    <h2 class="fw-bolder">Transfer</h2>
                </div>
                <div class="container px-5 my-5 px-5">
                <div class="text-center">
      <div>
      <label>Transfer To: </label>
       {/*Value tag shows which variable is being used along with the onChange in place to update the balance*/}
      <input type="text" id="message" class="textInput" name="message" onChange={handleChange} value={message}/>
       </div>
       <div>
        <label>Transfer: </label>
           {/*Value tag shows which variable is being used along with the onChange in place to update the balance*/}
        <input type="number" class="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)}/>
          {/*onClick showing which function is being called when the button is clicked*/}
        <Button variant="info" onClick={transfer}>Transfer</Button>
      </div>
      {/*Show tag in place to specify which modal is being shown along with an onHide linking to the closing function*/}
      <Modal show={showTran} onHide={handleCloseTran}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
          {/*Value being used to change the balance value is displayed below, onClick tag linking to the closing function*/}
        <Modal.Body>You have transferred RM{decrementBy} from your account to {message}.</Modal.Body>
        <Modal.Footer>
            {/*onClick linking to the closing function when the button is clicked*/}
          <Button variant="secondary" onClick={handleCloseTran}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            </div>
            </div>
        </section>
       <Footer /> 
    </div> 
  );
}


export default Account;