import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userAuthenticated = localStorage.getItem("token");
  if (!userAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
