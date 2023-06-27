import React from "react";
import Login from "./login";
import Paper from "@mui/material/Paper";

const LoginPage = () => {
  return (
    <>
      <Paper elevation={10} className="loginbox">
        <Login className="loginPage" />
      </Paper>
    </>
  );
};

export default LoginPage;
