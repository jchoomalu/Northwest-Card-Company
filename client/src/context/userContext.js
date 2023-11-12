import React, { createContext, useContext, useState, useEffect } from "react";
import { verify } from "../axios/users_api.js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Checks to see if token is currently store and not expired if redirect or page refresh happens and state
  //is lost the function will make a server call to retrieve the data and state is maintainer 
  useEffect(() => {
    const initializeUser = async () => {
      const storedToken = sessionStorage.getItem("jwtToken");

      if (storedToken) {
        try {
          const storedUser = await verify(storedToken);
          setUser(storedUser.data);
        } catch (error) {
          console.error("Error verifying token:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    initializeUser();
}, [])

  const login = (userData) => {
    // Implement your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
