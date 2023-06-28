import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import LockedOutIcon from "@mui/icons-material/Assignment";
import { Avatar } from "@mui/material";

const SignUp = () => {
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

export default SignUp;
