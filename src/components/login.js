import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import { connect } from "react-redux";
import { handle_change_login, logUserIn } from "../actions/todoActions";
import Paper from "@mui/material/Paper";

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await props.logUserIn(props.loginForm);

    navigate("/tasknotes");
  };

  return (
    <>
      <Paper className="loginbox">
        <header className="logininfo">
          <p>Enter your User Credentials </p>
          <br />
        </header>
        <form className="loggingin" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <Textfield
              className="textfield"
              id="outlined"
              label="Enter your username"
              fullWidth
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
              label="Enter your password"
              fullWidth
              variant="outlined"
              type="password"
              name="password"
              value={props.loginForm.password}
              onChange={props.handle_change_login}
            />
          </label>
          <br />
          <Button variant="contained" type="submit">
            Sign in
          </Button>
          <br />
          <Link to="/signup">
            <p className="linktosignup">Not a user? Sign Up Here!</p>
          </Link>
        </form>
      </Paper>
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
