import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, handle_change_signup } from "../../actions/todoActions";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Nav from "../standardcomps/nav";
import * as yup from "yup";

const SignUp = (props) => {
  const [disable, setDisable] = useState(true);

  let navigate = useNavigate();

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field."),
    password: yup.string().required("Password is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(props.signUpForm).then((valid) => {
      setDisable(!valid);
    });
  }, [props.signUpForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createUser(props.signUpForm);
    console.log(props.signUpForm);

    navigate("/tasknotes");
  };

  return (
    <>
      <Nav />
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
          <Button disabled={disable} variant="contained" type="submit">
            Sign up!
          </Button>
          <br />
          <Link to="/login">
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
