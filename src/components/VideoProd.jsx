import React from 'react';
import "../styles/VideoProd.css";
import { FaCamera, FaFilm, FaVideo } from 'react-icons/fa';
import backgroundImageVideo from "../images/Telefon.jpg";

const VideoProd = () => {
  return (
    <div className="video-prod-container" style={{ backgroundImage: `url(${backgroundImageVideo})` }}>
      <div className="video-prod-background">
        <h1 className="video-prod-title">Video Production & Voice Over</h1>
        <div className="video-prod-content">
          <div className="video-prod-item">
            <FaCamera className="video-prod-icon" />
            <p className="video-prod-text">High-Resolution Cameras: Modern marketing videos often use cameras capable of 4K and even 8K resolution, providing incredibly detailed and sharp visuals that captivate audiences.
            Drones have transformed marketing content by allowing businesses to capture stunning aerial shots that enhance the appeal and professionalism of their videos.</p>
          </div>
          <div className="video-prod-item">
            <FaFilm className="video-prod-icon" />
            <p className="video-prod-text">Post-Production: The editing process is critical in marketing, as editors work meticulously to create a polished, compelling narrative that resonates with the target audience.
            Effective sound design, including background music and sound effects, enhances the overall impact of marketing videos, making them more engaging and memorable.</p>
          </div>
          <div className="video-prod-item">
            <FaVideo className="video-prod-icon" />
            <p className="video-prod-text">Localization: Voice-overs are essential for localizing marketing videos for different languages and cultures, helping businesses reach a global audience and increase their market presence.
            Advances in technology allow voice-over artists to record high-quality audio from home studios, making it easier and more cost-effective for businesses to produce marketing content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProd;
