import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@mui/material";
import { connect } from "react-redux";
import Nav from "./nav";
import Footer from "./footer";

const Landing = (props) => {
  const navigate = useNavigate();
  const signup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  useEffect(() => {
    if (props.isLoggedIn) {
      navigate("/tasknotes");
    }
  }, [props.isLoggedIn, navigate]);

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
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Landing);
