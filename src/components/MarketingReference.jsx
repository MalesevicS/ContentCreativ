import React, { useEffect, useRef } from 'react';
import '../styles/MarketingReference.css';
import backgroundVideo from "../videos/socialVideo.mp4";

const MarketingReference = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            console.log("Video playback started successfully");
          })
          .catch((error) => {
            console.error("Error starting video playback:", error);
          });
      }
    };
    playVideo();
  }, []);

  return (
    <div className='marketing__container'>
      <video ref={videoRef} autoPlay loop muted className='background__video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='marketing_text'>
        <h1>Social Media Marketing</h1>
      </div>
      <div className="marketing_paraf">
        <p>
          Networks are cost-effective and create engaging opportunities to produce richer experiences for your current
          and future customers while increasing brand recognition and authority.
        </p>
      </div>
    </div>
  );
};

export default MarketingReference;
