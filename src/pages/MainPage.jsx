import React from 'react';
import heroPhoto from "../images/mainPhoto.jpg";
import "../styles/MainPage.css"
import backgroundPic from "../images/mainPhoto.jpg"
import MarketingService from "../components/MarketingService"
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import WebDev from '../components/WebDev';
import Counter from '../components/Counter';
import AboutUs from '../components/AboutUs';
import HomePageMarking from '../components/HomePageMarking';
import HomeFirst from '../components/HomeFirst';
import JoinContent from '../components/JoinContent';


const MainPage = () => {
  return (
    <div className="hero_Container">
      <HomeFirst />
      <MarketingService />
      <JoinContent />
    </div>
  );
};

export default MainPage;
