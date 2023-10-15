import React, { createContext, useContext, useState, useEffect } from "react"; // Imports Context and other hooks from React
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/user'; // Replace with your server's URL
const UserContext = createContext(); // Context file is created to help share and manage globat state across application

export const useUser = () => { // Created to get user context
  return useContext(UserContext); //Returns the user context using the useContext hook that is imported
};

export const UserProvider = ({ children }) => { // UserProvider component is created and can be exported to other components, the children prop represents any elements or components that are within the UserProvider component
  const [user, setUser] = useState(null); //  user value is meant to store user data(set to null value by default), setUser function is present to update user value depending on situation


  useEffect(() => {
    axios.get('http://localhost:3001/api/user') 
      .then((response) => {
        setUser(response.data); // Update the user context with the fetched data
        console.log('User Data:', response.data); // Log the data to the console
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  // useEffect(() => {// Load user data from JSON file when the component is mounted
  // }, []);

  

  // Login and logout functions are defined which allow the app to either set(set userData to be used when logging in) or clear(when logging out) the user state
  const login = (userData) => { // 
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Component named UserProvider is named as an export so it can be used in other parts of the code. It also provides context values to its descendant components.
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
