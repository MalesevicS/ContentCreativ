import React, { useState, useEffect } from 'react';
import "../styles/AboutUs.css"; 
import backgroundPic from "../images/officeOne.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    observer.observe(document.querySelector(".aboutContainer"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`aboutContainer ${isVisible ? 'fadeIn' : ''}`}>
      <h1>About us:</h1>
      <p className='text_Paraf'>
        <span className='parafH'>Passion</span> Positive energy and love are at the core of everything we do. We are driven by a genuine enthusiasm for digital marketing, constantly pushing the boundaries to deliver outstanding results for our clients.
      </p>
      <p className='text_Paraf'>
        <span className='parafH'>Teamwork</span> Our team stays ahead of the curve, keeping a keen eye on industry trends, cutting-edge technologies, and best practices. This commitment to continuous learning ensures that we provide you with tailored solutions that align with your objectives.
      </p>
      <p className='text_Paraf'>
        <span className='parafH'>Partnership</span> At our agency, we value transparency and open communication. Your input and feedback play a vital role in our process, as we believe that collaboration with our clients leads to the most successful outcomes.
      </p>
      <p className='text_Paraf'>
        Our goal is to build strong, long-lasting partnerships, where we work together to achieve your brand's goals.
      </p>
    </div>
  );
};

export default AboutUs;
