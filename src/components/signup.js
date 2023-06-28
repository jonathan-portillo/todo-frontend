import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../actions/todoActions";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
        <form className="signup" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <Textfield
              className="textfield"
              id="outlined"
              label="Create a username"
              fullWidth
              variant="outlined"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
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
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  createUser,
})(SignUp);
