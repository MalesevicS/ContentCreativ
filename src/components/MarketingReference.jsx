import React from 'react';
import '../styles/MarketingReference.css';
import backgroundVideo from "../videos/socialVideo.mp4";

const MarketingReference = () => {
  return (
    <div className='marketing__container'>
      <video autoPlay muted loop className='background__video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='marketing_text'>
        <h1>Social Media Marketing</h1>
      </div>
      <div className="marketing_paraf">
        <p>
          Networks are cost effective and create engaging opportunities to produce richer experiences for your current
          and future customers while increasing brand recognition and authority
        </p>
      </div>
    </div>
  );
};

export default MarketingReference;
