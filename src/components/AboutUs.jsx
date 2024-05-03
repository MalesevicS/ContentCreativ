import React from 'react';
import "../styles/AboutUs.css"; 
import OfficeP from "../images/officeOne.jpg";

const AboutUs = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutText'>
        <h1>About us:</h1>
        <p>
          Positive energy and love are at the core of everything we do. We are driven by a genuine enthusiasm for digital marketing, constantly pushing the boundaries to deliver outstanding results for our clients.
        </p>
        <p>
          Our team stays ahead of the curve, keeping a keen eye on industry trends, cutting-edge technologies, and best practices. This commitment to continuous learning ensures that we provide you with tailored solutions that align with your objectives.
        </p>
        <p>
          At our agency, we value transparency and open communication. Your input and feedback play a vital role in our process, as we believe that collaboration with our clients leads to the most successful outcomes.
        </p>
        <p>
          Our goal is to build strong, long-lasting partnerships, where we work together to achieve your brand's goals.
        </p>
      </div>

      <div className='imgCont'>
        <img className='imgO' src={OfficeP} alt="#" />
      </div>
    </div>
  );
};

export default AboutUs;
