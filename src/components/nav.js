import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const home = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };
  return (
    <header className="navbarhome">
      <p className="tasknotesnav">Task Note</p>
      <Button onClick={home} variant="text" className="homelink" to="/">
        Home
      </Button>
      <Button onClick={login} to="/login" variant="text">
        Log In
      </Button>
      <Button onClick={logout} variant="text" className="logoutlink">
        Log Out
      </Button>
    </header>
  );
};

export default Nav;
