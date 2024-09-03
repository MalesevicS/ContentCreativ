import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import logo from "../images/clogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    footerElement.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'expanded' : ''}`}>
      <div className="navbar-container">
        <div className={`logo ${isOpen ? 'hidden' : ''}`}>
          <Link to="/" className="navbar-logo">
          <img className='logoPic' src={logo} alt="#" />
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeNavbar}>Home</Link>
          <Link to="/about" onClick={closeNavbar}>About</Link>
          <Link to="/reference" onClick={closeNavbar}>Services</Link>
        </div>
        <div onClick={scrollToFooter} className="contact_header">Contact</div>
        
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
