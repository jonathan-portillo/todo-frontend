import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/todoActions";

const Nav = (props) => {
  const navigate = useNavigate();
  const home = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
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
      <Button onClick={handleLogout} variant="text" className="logoutlink">
        Log Out
      </Button>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
