import React from 'react';
import "../styles/OurPhilosophy.css"; 
import OfficeTwo from "../images/officeTwo.jpg";

const OurPhilosophy = () => {
  return (
    <div className='OurPhilosophy_container'>
      <div className='imgContainer'>
        <img className='imgOff' src={OfficeTwo} alt="#" />
      </div>

      <div className='textPart'>
        <h1>Our philosophy:</h1>
        <p className='paraf'>
          <span className='footerText'>Passion</span> is the driving force behind our work. 
          This enthusiasm fuels our commitment to delivering exceptional results for our clients.
          Whether it's crafting compelling content, devising innovative marketing strategies, or following the latest industry trends, our passion shines through in every project we undertake.
        </p>
        <p className='paraf'>
          <span className='footerText'>Teamwork</span> is not just a buzzword for us it is the foundation of everything we do.
          Our team is the heart of our agency a diverse and dynamic group of individuals who bring a wealth of expertise to the table.
          By fostering a positive environment for collaboration and communication, we ensure that every project benefits from the power of our team's collective intelligence and creativity.
        </p>
        <p className='paraf'>
          <span className='footerText'>Partnership</span> We pride ourselves on building strong, collaborative partnerships with our clients.
          We strongly believe in partnerships where your success is not just a goal but a shared journey.
          Thank you for considering our digital marketing agency for your marketing needs.
        </p>
        <p className='paraf pbold'>
          We are excited to combine our passion, love, skills, and knowledge to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default OurPhilosophy;
