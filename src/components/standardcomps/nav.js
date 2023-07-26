import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/todoActions";

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

  const renderButton = () => {
    if (props.isLoggedIn) {
      return (
        <Button onClick={handleLogout} variant="text" className="logoutlink">
          Log Out
        </Button>
      );
    } else {
      return (
        <Button onClick={login} to="/login" variant="text">
          Sign In
        </Button>
      );
    }
  };

  return (
    <header className="navbarhome">
      <p className="tasknotesnav">Task Note</p>
      <Button onClick={home} variant="text" className="homelink" to="/">
        Home
      </Button>
      {renderButton()}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
