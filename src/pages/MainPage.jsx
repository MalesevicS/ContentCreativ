import React from 'react';
import heroPhoto from "../images/mainPhoto.jpg";
import "../styles/MainPage.css"
import backgroundPic from "../images/mainPhoto.jpg"
import MarketingService from "../components/MarketingService"
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';

const MainPage = () => {
  return (
    <div className="hero_Container">
      <HomeSlider />
      <MarketingService />
    </div>
  );
};

export default MainPage;
