import React from "react";
import { Navigate } from "react-router-dom";

const LoggedIn = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token");
  if (isLoggedIn) {
    return <Navigate to="/tasknotes" />;
  }
  return children;
};

export default LoggedIn;
