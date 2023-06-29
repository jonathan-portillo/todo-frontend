import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import { connect } from "react-redux";
import { handle_change_login, logUserIn } from "../actions/todoActions";

const Login = (props) => {
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
  return (
    <>
      <form
        className="loggingin"
        onSubmit={async (e) => {
          e.preventDefault();
          await props.logUserIn(props.loginForm);
          console.log(props.loginForm);
        }}
      >
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
