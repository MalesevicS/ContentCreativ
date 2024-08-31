import React from 'react';
import "../styles/MainPage.css"
import MarketingService from "../components/MarketingService"
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
