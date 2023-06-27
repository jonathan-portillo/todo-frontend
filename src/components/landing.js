import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import LockedOutIcon from "@mui/icons-material/Assignment";
import { Avatar } from "@mui/material";

const Landing = () => {
  return (
    <>
      <header className="navbarhome">
        <Link to="/about">About</Link>
      </header>
      <div className="homebox">
        <div className="mottobox">
          <p className="thatsthemotto">Task Notes</p>
          <p className="thatsthemotto2">Empower your productivity</p>
        </div>

        <div className="loginlanding">
          <Paper className="loginboxlanding">
            <div className="avatar">
              <Avatar
                sx={{ bgcolor: "607d8b"[500], width: 56, height: 56 }}
                variant="round"
              >
                <LockedOutIcon />
              </Avatar>
            </div>
            <p>Welcome Back!</p>
            <Login />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Landing;
