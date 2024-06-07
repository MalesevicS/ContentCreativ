import React from 'react';
import "../styles/AboutUs.css";
import backgroundPic from "../images/hb4.jpg";

const AboutUs = () => {
  return (
    <section id='about-us' className="about-us">
      <div className="about-us__background">
        <img src={backgroundPic} alt="Background" />
      </div>
      <div className="about-us__overlay">
        <div className="container_About">
          <div className="about-us__content">
            <p>We're not just a marketing firm, we're your growth partner. With our innovative strategies and relentless dedication, we drive your success forward.</p>
            <p>Our approach is simple: deliver results. From increasing brand visibility to boosting sales, we're here to make your goals a reality.</p>
            <p>Experience the power of personalized marketing solutions tailored to your unique needs. Let's take your business to new heights together.</p>
            <div className="about-us__cta">
              <button onClick={() => window.open('https://www.youtube.com/watch?v=S6ITNJa0eQ8', '_blank')}>
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
