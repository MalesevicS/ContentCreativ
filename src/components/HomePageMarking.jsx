import React from 'react'
import "../styles/HomePageMarking.css"
import backgroundPic from "../images/social.png";

const HomePageMarking = () => {
  return (
    <section id='home-page-marketing' className="home-page-marketing">
      <div className="home-page-marketing__background">
        <img src={backgroundPic} alt="Background" />
      </div>
      <div className="home-page-marketing__overlay">
        <div className="container_HomePageMarketing">
          <div className="home-page-marketing__content">
            <p>We're not just a marketing firm, we're your growth partner. With our innovative strategies and relentless dedication, we drive your success forward.</p>
            <p>Our approach is simple: deliver results. From increasing brand visibility to boosting sales, we're here to make your goals a reality.</p>
            <p>Experience the power of personalized marketing solutions tailored to your unique needs. Let's take your business to new heights together.</p>
            <div className="home-page-marketing__cta">
              <button onClick={() => window.open('https://youtu.be/Z4g0pXAooCU?si=-x2k6GfuM3m1ymVN', '_blank')}>
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMarking;
