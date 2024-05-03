import React from 'react';
import "../styles/Footer.css"

function Footer() {

  const phoneNumber = "+38163339318";

  const handleCallPhoneNumber = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Obilicev+venac+18,+Belgrade,+Republic+of+Serbia");
  };

  return (
    <div className='footer'>
      <div className='section'>
        <p>Copyright Content Creativ  ©2024. All rights reserved.Unauthorized copying,  downloading and use of content from the site is sanctioned in accordance with the Law.
        </p>
      </div>
      <div className='section sectionTwo'>
        <h3>Contact Us</h3>
        <p><span className='footerText'>Name</span>: Content Creativ@</p>
        <p><span className='footerText'>Email</span>: office@contentcreativ.com</p>
        <p><span className='footerText'>Phone</span>: <span className='footerText' onClick={handleCallPhoneNumber} style={{ cursor: 'pointer' }}>{phoneNumber}</span> </p>
        <a  href="https://www.google.com/maps/search/?api=1&query=Obilicev+venac+18,+Belgrade,+Republic+of+Serbia">
        <p><span className='footerText'>Address</span>: <span className='footerText' onClick={openGoogleMaps} style={{ cursor: 'pointer' }}>Obilicev venac 18, Belgrade, Republic of Serbia</span></p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
