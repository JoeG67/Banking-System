import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./App.scss";

axios.defaults.baseURL = 'http://localhost:3001'; // Replace with your server's URL

function App() {
  // React States(Ensures that stuff like the email, password and error messages can be validated)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Creates an instance of useNavigate
  const { login } = useUser(); // Creates an instance of useUser

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


 // Update the handleLogin function to send a POST request
const handleLogin = async () => {
// Trim function is used for input validation, cuts out white/blank spaces in user input field
  const trimmedEmail = email.trim()
  const trimmedPassword = password.trim()
// If email and password inputs are null, alert the user 
  if (trimmedEmail === '' || trimmedPassword === '') {
    setErrorMessage(alert('Username and password must be filled. Please try again.'));
  } else {
    axios
      .post('/api/users', { email : trimmedEmail, password : trimmedPassword}) // Email and password are the parameters that are taken from the api
      .then((response) => {
        const user = response.data;
        if (user) {
          console.log("User logged in:", user);
          login(user); // Set the user data in the context
          setIsLoggedIn(true); // Logs the specific user into the system
          navigate("/Home"); // Redirect to the Home page
        } else {
          setErrorMessage(alert('Invalid email or password.'));
        }
      })
      .catch((error) => { //Error catching
        setErrorMessage(alert('An error occurred during login. Please try again later.', error));
      });
  }
};

  

  // JSX code for login form
  const renderForm = (
    <form>
      <div className="form">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="email">Username </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label htmlFor="exampleCheck1" className="form-check-label">
            Check me out
          </label>
        </div>
        <br />
        <div className="center">
          <Button variant="info" className="btn btn-info text-white fw-bold" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </form>
  );
  
  return (
    <div className="app">
      <div className="login">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isLoggedIn ? <div>User is successfully logged in</div> : renderForm}
        </div>
      </div>
    </div>
  );
  
}

export default App;