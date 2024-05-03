import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"
import logo from "../images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className='logoPic' src={logo} alt="#" />
        </Link>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleNavbar}>Home</Link>
          <Link to="/about" onClick={toggleNavbar}>About</Link>
          <Link to="/reference" onClick={toggleNavbar}>Services</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
