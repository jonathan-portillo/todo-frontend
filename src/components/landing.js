import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./login";
import { Button, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import LockedOutIcon from "@mui/icons-material/Assignment";
import { Avatar } from "@mui/material";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Landing = () => {
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <>
      <Nav />
      <div className="landing">
        <div className="homebox">
          <div className="mottobox">
            <p className="thatsthemotto">Task Note</p>
            <p className="thatsthemotto2">Empower your productivity</p>
            <Button onClick={signup} variant="text">
              Get Started
            </Button>
          </div>

          {/* <div className="loginlanding">
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
        </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
