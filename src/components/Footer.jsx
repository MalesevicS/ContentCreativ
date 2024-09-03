import React from 'react';
import "../styles/Footer.css";
import logoPic from "../images/clogo.png";
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useRef } from 'react';



function Footer() {
  const phoneNumber = "+38163339318";
  const footerRef = useRef(null);

  const handleCallPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Obilicev+venac+18,+Belgrade,+Republic+of+Serbia");
  };
 

  return (
    <div id="footer" className='footer' ref={footerRef} >
      <div className="footerWrapper">
      <div className='logoF'>
        <img className='logoFooter' src={logoPic} alt="logoFooter" />
      </div>
      <div className="copyF">
        <div className="copyH">
          <h2> Copyright Content Creativ©2024.</h2>
        </div>
        <div className="copyP">
          <p className='copyPf'>
            All rights reserved. Unauthorized copying, downloading and use of 
            content from the site is sanctioned in accordance with the Law.
          </p>
        </div>
      </div>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reference">Services</Link>
      </div>
      <div className="socialF">
        <a href="mailto:your-email@example.com"><FaEnvelope className='socIcon' />office@contentcreativ.com</a>
        <a href={`tel:${phoneNumber}`}><FaPhone className='socIcon' />+38163339318</a>
        <div className="socIcons">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.youtube.com/@ContentCreativagency" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
      </div>


    </div>
  );
}

export default Footer;
