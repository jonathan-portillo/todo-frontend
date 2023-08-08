import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="icons">
      <a
        href="https://github.com/jonathan-portillo/todo-frontend-"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-glyphs/480/000000/github.png"
          alt="github"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/jonathanportillo93/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/500/linkedin-circled--v1.png"
          alt="linkedin-circled--v1"
        />
      </a>
      <a href="mailto:jonport93@gmail.com">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/ios-glyphs/100/circled-envelope.png"
          alt="circled-envelope"
        />
      </a>
    </footer>
  );
};

export default Footer;
