import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useUser } from "./UserContext";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.scss";
import axios from 'axios';

function Account() {
  const { user } = useUser(); // useUser function is imported as the value of the user const

  // useState hook declarations below to help with funcitons for various components in account page
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString());
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  // State to manage balance
  const [balance, setBalance] = useState(user ? parseInt(user.balance) : 0);
  const [incrementBy, setIncrementBy] = useState(0);
  const [decrementBy, setDecrementBy] = useState(0);
  const [transferAmount, setTranAmountBy] = useState(0);
  const [message, setMessage] = useState('');

  // State to manage modals
  const [showInc, setShowInc] = useState(false);
  const [showDec, setShowDec] = useState(false);

  // Function to fetch user balance
  useEffect(() => {
    if (user) { // Checks if user exists
      axios.get(`/api/users/${user.email}`) // Checks if user email exists
        .then((response) => { // response is accepted
          setBalance(response.data.balance); // Balance is taken from user emaiil
        })
        .catch((error) => { // Error block. Different responses in place to distinguish between network and server errors.
          if (error.response) {
            console.error('Error retrieving user balance from server, server may be offline', error);
          } else if (error.request) {
            console.error('No response received from server', error);
          } else {
            console.error('Error fetching user balance:', error);
          }
         
        });
    }
  }, [user]); // User object used as dependency

  // Functions to handle closing of modals
  const handleCloseInc = () => setShowInc(false);
  const handleCloseDec = () => setShowDec(false);

  //Increment function
  const increment = () => {
    //Sends post request to get email and balance. incrementBy value converted to an integer using parseInt. This is the amount of money being deposited.
    axios.post('/api/deposit', { email: user.email, balance: parseInt(incrementBy) }) 
      .then((response) => {
        setBalance(response.data.balance); // Updated balance value is taken from database
        setShowInc(true); // Modal is displayed once increment is successful
      })
      .catch((error) => { // Error block. Different responses in place to distinguish between network and server errors.
        if (error.response) {
          console.error('Error updating user balance in server, server may be offline', error);
        } else if (error.request) {
          console.error('No response received from server', error);
        } else {
          console.error('Error updating user balance:', error);
        }
       
      });
  };

 //Decrement function
  const decrement = () => {
     //Sends post request to get email and balance. incrementBy value converted to an integer using parseInt. This is the amount of money being withdrawn.
    axios.post('/api/withdraw', { email: user.email, balance: parseInt(decrementBy) })
      .then((response) => {
        setBalance(response.data.balance); // Updated balance value is taken from database
        setShowDec(true); //Modal is displayed once decrement is successful
      })
      .catch((error) => { // Error block. Different responses in place to distinguish between network and server errors.
        if (error.response) {
          console.error('Error updating user balance in server, server may be offline', error);
        } else if (error.request) {
          console.error('No response received from server', error);
        } else {
          console.error('Error updating user balance:', error);
        }
       
      });
  };

  //Decrement function
  const transfer = () => {
        //Sends post request to get email and balance. incrementBy value converted to an integer using parseInt. This is the amount of money being transferred.
    axios.post('/api/transfer', { email: user.email, balance: parseInt(transferAmount) })
      .then((response) => { 
        setBalance(response.data.balance); // Updated balance value is taken from database 
        setShowDec(true); //Modal is displayed once decrement is successful
      })
      .catch((error) => { // Error block. Different responses in place to distinguish between network and server errors.
        if (error.response) {
          console.error('Error updating user balance in server, server may be offline', error);
        } else if (error.request) {
          console.error('No response received from server', error);
        } else {
          console.error('Error updating user balance:', error);
        }
       
      });
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };


  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/1'; // API url in which data is taken from
    axios.get(apiUrl)
      .then((response) => { // On successful response
        setPost(response.data); // Data is taken
        setLoading(false); //Loading symbol is taken out
      })
      .catch((error) => { // Error block. Different responses in place to distinguish between network and server errors.
        if (error.response) {
          console.error('Error retrieving data from API, server may have issues', error);
        } else if (error.request) {
          console.error('No response received', error);
        } else {
          console.error('Error fetching data:', error);
        }
      });
  }, []);

  return (
    <div className="account">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
      </Helmet>
      <Navbar />
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-1">Account Details</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border bottom" id="features">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Account Overview</h2>
            <p className="lead mb-0">View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
          </div>
        </div>
      </section>

      <section className="py-3 border-bottom">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">Balance: RM{balance}</h2>
            <h2 className="fw-bolder">Available for withdrawal: RM{balance - 20}</h2>
            <div>
              <label>Deposit: </label>
              <input type="number" className="numberInput" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)} />
              <Button variant="info" onClick={increment}>Increment</Button>
            </div>
            <Modal show={showInc} onHide={handleCloseInc}>
              <Modal.Header closeButton>
                <Modal.Title>Bank XYZ</Modal.Title>
              </Modal.Header>
              <Modal.Body>You have deposited RM{incrementBy} into your account on {currDate} at {currTime}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseInc}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <div>
              <label>Withdraw: </label>
              <input type="number" className="numberInput" value={decrementBy} onChange={(e) => setDecrementBy(e.target.value)} />
              <Button variant="info" onClick={decrement}>Decrement</Button>
            </div>
            <Modal show={showDec} onHide={handleCloseDec}>
              <Modal.Header closeButton>
                <Modal.Title>Bank XYZ</Modal.Title>
              </Modal.Header>
              <Modal.Body>You have withdrawn RM{decrementBy} from your account on {currDate} at {currTime}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDec}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="text-center mb-3">
          <div>
              <label>Transfer: </label>
              <input type="number" className="numberInput" value={transferAmount} onChange={(e) => setTranAmountBy(e.target.value)} />
              <Button variant="info" onClick={transfer}>Transfer</Button>
            </div>
            <Modal show={showDec} onHide={handleCloseDec}>
              <Modal.Header closeButton>
                <Modal.Title>Bank XYZ</Modal.Title>
              </Modal.Header>
              <Modal.Body>You have withdrawn RM{transferAmount} from your account on {currDate} at {currTime}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDec}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          </div>
        </div>
      </section>
      <section className="border bottom" id="features">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-3">
            <h2 className="fw-bolder">Daily Stock Updates</h2>
            <p className="lead mb-0">View all your accounts at a glance, including checking, savings, and investments. Stay informed about your financial health.</p>
          </div>
          <div className="text-center mb-2">
          {/* Check if lazy loading can be used to replace these sections */}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <h4 className="fw-bolder">Stock name: {post.name}</h4>
                <h4 className="fw-bolder">Stock price: RM{post.id}</h4>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Account;
