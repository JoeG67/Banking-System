import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom";
import userData from './users.json';
import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom'; 
import "./App.scss";

const UserContext = React.createContext();

function App() {
  // React States(Ensures that stuff like the email, password and error messages can be validated)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const navigate = useNavigate();
  const { login } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = () => {
    // Simple form validation (replace with validation logic)
    if (email === '' || password === '') {
      setErrorMessage(alert('Username and password must be filled. Please try again.'));
    } else {
      setIsLoggedIn(true);
      const user = userData.find((user) => user.email === email && user.password === password);
      if (user) {
      console.log("User logged in:", user);
      login(user); // Set the user data in the context
        navigate("/Home"); // Redirect to the Home page

      } else {  // Redirect to another page or perform further actions here(either 404 or error popup)
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
        <Button variant="info" class="btn btn-info text-white fw-bold" onClick={handleLogin} >Login</Button>
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