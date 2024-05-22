import React, { useState, useEffect } from 'react';
import "../styles/AboutPhoto.css";
import backgroundPic from "../images/socialBanner2.jpg";
import backgroundPicTwo from "../images/VideoEdit.jpg";

const ServicesSlider = () => {
  const [currentImage, setCurrentImage] = useState(backgroundPic);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => prevImage === backgroundPic ? backgroundPicTwo : backgroundPic);
    }, 2000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="about-photo-container">
    <div className="slider" style={{ height: '70vh' }}>
      <img src={currentImage} className="fullscreen-image" alt="About" />
    </div>
  </div>
  );
}

export default ServicesSlider;
