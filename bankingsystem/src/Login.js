import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom'; 
import "./App.css";

function App() {
  // React States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = () => {
    // Simple form validation (replace with your validation logic)
    if (email === '' || password === '') {
      setErrorMessage(alert('Username and password must be filled. Please try again.'));
    } else {
      // Simulate a login request (replace with your authentication logic)
      if (email === 'username' && password === 'password') {
        navigate("/Home"); // Redirect to the Home page
        // Redirect to another page or perform further actions here
      } else {
        setErrorMessage(alert('Invalid email or password.'));
      }
    }
  };


  // JSX code for login form
  const renderForm = (
    <form>
    <div className="form">
    {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-container">
          <label>Username </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
           <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> 
        <br></br>
        <div class="center">
        <button class="login" type="button" onClick={handleLogin}>
          Login
        </button>
        </div>
        </div>
        </form>
   
  );

  return (
    <div className="app">
       <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      </div>
    </div>
  );
}

export default App;