import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, handle_change_signup } from "../actions/todoActions";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const SignUp = (props) => {
  let navigate = useNavigate();

  const logIn = () => {
    navigate("/tasknotes");
  };
  return (
    <>
      <header className="navbarhome">
        <Link to="/about">About</Link>
      </header>
      <Paper className="signupbox">
        <header className="signupinfo">
          <p>Sign Up Here!!</p>
          <br />
        </header>
        <form
          className="signup"
          onSubmit={async (e) => {
            e.preventDefault();
            await props.createUser(props.signUpForm);
            console.log(props.signUpForm);
          }}
        >
          <label htmlFor="username">
            <Textfield
              className="textfield"
              id="outlined"
              label="Create a username"
              fullWidth
              variant="outlined"
              type="text"
              name="username"
              value={props.signUpForm.username}
              onChange={props.handle_change_signup}
            />
          </label>
          <br />
          <label htmlFor="password">
            <Textfield
              className="textfield"
              id="outlined"
              label="Create a password"
              fullWidth
              variant="outlined"
              type="password"
              name="password"
              value={props.signUpForm.password}
              onChange={props.handle_change_signup}
            />
          </label>
          <br />
          <Button className="thisbuttonhere" variant="contained" type="submit">
            Sign up!
          </Button>
          <br />
          <Link to="/">
            <p className="linktologin">Already a user? Log in here!</p>
          </Link>
        </form>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    signUpForm: state.signUpForm,
  };
};

export default connect(mapStateToProps, {
  createUser,
  handle_change_signup,
})(SignUp);
