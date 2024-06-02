import React, { useEffect, useRef } from 'react';
import '../styles/MarketingReference.css';
import backgroundVideo from "../videos/socialVideo.mp4";

const MarketingReference = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play()
        .catch(error => {
          console.error('Autoplay prevented:', error);
        });
    };

    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (!iOS) {
      playVideo();
    }
  }, []);

  return (
    <div id="marketing-reference" className='marketing__container'>
      <video ref={videoRef} autoPlay loop muted playsInline className='background__video'>
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
