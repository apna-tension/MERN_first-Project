import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
    console.log("Logout Successful");
  }, [LogoutUser]);
  return <Navigate to="/login" />;
};

export default Logout;
