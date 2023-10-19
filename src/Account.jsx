import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
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
  const { user } = useUser();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString());
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

  // State to manage balance
  const [balance, setBalance] = useState(user ? parseInt(user.balance) : 0);
  const [incrementBy, setIncrementBy] = useState(0);
  const [decrementBy, setDecrementBy] = useState(0);
  const [message, setMessage] = useState('');

  // State to manage modals
  const [showInc, setShowInc] = useState(false);
  const [showDec, setShowDec] = useState(false);

  // Function to fetch user balance
  useEffect(() => {
    if (user) {
      axios.get(`/api/users/${user.email}`)
        .then((response) => {
          setBalance(response.data.balance);
        })
        .catch((error) => {
          console.error('Error fetching user balance:', error);
        });
    }
  }, [user]);

  const handleCloseInc = () => setShowInc(false);
  const handleCloseDec = () => setShowDec(false);

  const increment = () => {
    axios.post('/api/deposit', { email: user.email, balance: parseInt(incrementBy) })
      .then((response) => {
        setBalance(response.data.balance);
        setShowInc(true);
      })
      .catch((error) => {
        console.error('Error depositing:', error);
        toast("An error occurred while depositing funds.");
      });
  };

  const decrement = () => {
    axios.post('/api/withdraw', { email: user.email, balance: parseInt(decrementBy) })
      .then((response) => {
        setBalance(response.data.balance);
        setShowDec(true);
      })
      .catch((error) => {
        console.error('Error withdrawing:', error);
        toast("An error occurred while withdrawing funds.");
      });
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };


  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/1';

    axios.get(apiUrl)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
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
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <h4 className="fw-bolder">Stock name:</h4>
                <p>{post.name}</p>
                <h4 className="fw-bolder">Stock price:</h4>
                <p>RM{post.id}</p>
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
