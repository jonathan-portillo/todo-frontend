import React from "react";
import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import { connect } from "react-redux";
import { handle_change_login, logUserIn } from "../actions/todoActions";

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await props.logUserIn(props.loginForm);

    navigate("/tasknotes");
  };

  return (
    <>
      <form className="loggingin" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <Textfield
            className="textfield"
            id="outlined"
            label="Username"
            variant="outlined"
            type="text"
            name="username"
            value={props.loginForm.username}
            onChange={props.handle_change_login}
          />
        </label>
        <br />

        <label htmlFor="password">
          <Textfield
            className="textfield"
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={props.loginForm.password}
            onChange={props.handle_change_login}
          />
        </label>
        <br />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
      <Link to="/signup">
        <p className="linktosignup">Not a user? Sign Up Here!</p>
      </Link>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loginForm: state.loginForm,
  };
};

export default connect(mapStateToProps, { logUserIn, handle_change_login })(
  Login
);
