import React from 'react';
import "../styles/Footer.css";

function Footer() {
  const phoneNumber = "+38163339318";

  const handleCallPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Obilicev+venac+18,+Belgrade,+Republic+of+Serbia");
  };

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section about'>
          <h2>Content Creativ</h2>
          <p>&copy; 2024 Content Creativ. All rights reserved. Unauthorized copying, downloading, and use of content from the site is sanctioned in accordance with the Law.</p>
        </div>
        <div className='footer-section contact'>
          <h2>Contact Us</h2>
          <p><strong>Name:</strong><span className='footer-link' > Content Creativ</span></p>
          <p><strong>Email:</strong><span className='footer-link' > office@contentcreativ.com</span></p>
          <p><strong>Phone:</strong> <span className='footer-link' onClick={handleCallPhoneNumber}>{phoneNumber}</span></p>
          <p><strong>Address:</strong> <span className='footer-link' onClick={openGoogleMaps}>Obilicev venac 18, Belgrade, Republic of Serbia</span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
