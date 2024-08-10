import React from 'react';
import "../styles/AboutPicture.css";
import aboutPic from "../images/abouPic.jpg";

const AboutPicture = () => {
  return (
    <div className='aboutP_container'>
        <div className="aboutImgWrapper">
            <img className='about_pic' src={aboutPic} alt="Description of the image" />
        </div>
        <div className="aboutSq"></div>
    </div>
  );
}

export default AboutPicture;
