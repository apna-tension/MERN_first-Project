
import React, { useEffect } from "react";
import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  // store token in local storage
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  let isLoggedin = !!token;
  console.log("isLoggedin :>> ", isLoggedin);

  // logout functionality
  const LogoutUser = () => {
    localStorage.removeItem("token");
    // Redirect user to login page or refresh the page
    window.location.href = '/login'; // Replace '/login' with your actual login page URL
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/user", 
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log("data :>> ", data);
        setUser(data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // jwt authentication: to get the currently logged in user data
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedin, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};