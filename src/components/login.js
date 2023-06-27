import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Textfield from "@mui/material/TextField";
import LockedOutIcon from "@mui/icons-material/Assignment";
import { Avatar } from "@mui/material";

const Login = () => {
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
      <form className="loggingin" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <Textfield
            className="textfield"
            id="outlined"
            label="Username"
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
            label="Password"
            variant="outlined"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
      <Link to="/signup">
        <p className="linktosign">Not a user? Sign Up Here!</p>
      </Link>
    </>
  );
};

export default Login;
