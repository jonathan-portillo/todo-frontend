import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const home = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const about = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
  };
  return (
    <header className="navbarhome">
      <Button onClick={home} variant="text" className="homelink" to="/">
        Home
      </Button>
      <Button onClick={about} to="/about" variant="text">
        About
      </Button>
      <Button onClick={logout} variant="text" className="logoutlink">
        Log Out
      </Button>
    </header>
  );
};

export default Nav;
