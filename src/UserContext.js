import React, { createContext, useContext, useState, useEffect } from "react";
import userData from './users.json'; // Import the JSON data

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from JSON file when the component is mounted
  useEffect(() => {
    // You can customize this logic to load user data as needed
    // For example, if you want to load user data when the app starts:
    // const initialUser = userData.find((user) => user.id === someUserId);
    // setUser(initialUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
