import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userAuthenticated = localStorage.getItem("token");
  if (!userAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
