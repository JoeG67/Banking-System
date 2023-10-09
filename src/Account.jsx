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
  const { user } = useUser();
  // Assuming you have the user's email after login
  const [balance, setBalance] = useState(user ? parseInt(user.balance) : 0);
  const [incrementBy, setIncrementBy] = useState(1);
  const [decrementBy, setDecrementBy] = useState(1);
  const [showInc, setShowInc] = useState(false);
  const [showDec, setShowDec] = useState(false);
  const [showTran, setShowTran] = useState(false);
  const [message, setMessage] = useState('');
 
  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleCloseInc = () => setShowInc(false);
  const handleCloseDec = () => setShowDec(false);
  const handleCloseTran = () => setShowTran(false);

const increment = () => {
  setShowInc(true);
  setBalance(balance + parseInt(incrementBy));
};

// Function to decrement the 'count' variable by a custom value
const decrement = () => {
  // Add a check to prevent count from going below 0
  if (balance > parseInt(decrementBy) && balance !== 20) {
    setShowDec(true);
    setBalance(balance - parseInt(decrementBy));
  } else {
    toast("Minimum account balance of RM20 is required for transactions to be made, please withdraw an appropriate amount or deposit enough cash to continue withdrawal activity");
  }
};



const transfer = () => {
  // Add a check to prevent count from going below 0
  if (balance > parseInt(decrementBy) && balance !== 20) {
    setShowTran(true);
    setBalance(balance - parseInt(decrementBy));
  } else {
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
                    <h2 class="fw-bolder">Balance: RM{balance}</h2>
                    <h2 class="fw-bolder">Available for withdrawal: RM{balance - 20}</h2>
                    <div>
        <label>Deposit: </label>
        <input type="number" class="numberInput" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)}/>
        <Button variant="info"onClick={increment}>Increment</Button>
      </div>
      <Modal show={showInc} onHide={handleCloseInc}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have deposited RM{incrementBy} into your account</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <label>Withdraw: </label>
        <input type="number" class="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)}/>
        <Button variant="info" onClick={decrement}>Decrement</Button>
      </div>
      <Modal show={showDec} onHide={handleCloseDec}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have withdrawn RM{decrementBy} from your account</Modal.Body>
        <Modal.Footer>
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
      <input type="text" id="message" class="textInput" name="message" onChange={handleChange} value={message}/>
       </div>
       <div>
        <label>Transfer: </label>
        <input type="number" class="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)}/>
        <Button variant="info" onClick={transfer}>Transfer</Button>
      </div>
      <Modal show={showTran} onHide={handleCloseTran}>
        <Modal.Header closeButton>
          <Modal.Title>Bank XYZ</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have transferred RM{decrementBy} from your account to {message}.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTran}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
            </div>
            </div>
        </section>

        <section class="py-3 border-bottom">

        </section>
       <Footer /> 
    </div> 
  );
}


export default Account;