import React from 'react';
import heroPhoto from "../images/mainPhoto.jpg";
import "../styles/MainPage.css"
import backgroundPic from "../images/mainPhoto.jpg"
import MarketingService from "../components/MarketingService"
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div className="hero-containerJ">
      <img className='bgPicMain' src={backgroundPic} alt="" />
      <div className="t-container">
        <h1>Digital marketing that delivers results!</h1>
        <h3 className='ptext'>Strategic positioning of your brand on the market, setting it apart from competitors and positioning it in the "top of mind" of your clients.</h3>
      </div>
      <MarketingService />
      
    </div>
  );
};

export default MainPage;
