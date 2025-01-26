import React, { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/minipro1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span>Arvind</span>   
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="#hero">Home</a> 
          <a href="#about">About Me!</a>
          <a href="#services">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#inta">A&I</a>  
          <a href="#contact">Connect</a>
        </div>
        <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
