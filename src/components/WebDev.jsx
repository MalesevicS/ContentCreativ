import React from 'react';
import "../styles/WebDev.css";
import seoImg from "../images/SeoOff.jpg";
import seoImgTwo from "../images/seoTwo.jpg";

const WebDev = () => {
  return (
    <div className='seo__container'>
      <div className="text_container">
        <h1>Empower Your Online Presence with Expert Web Development and SEO</h1>
        <div className="images__container">
            <img src={seoImg} alt="SEO" className="seo_image" />
            <img src={seoImgTwo} alt="SEO" className="seo_image" />
        </div>
        <p>
          Our dedicated team of web development experts is committed to crafting stunning and functional websites that captivate your audience and drive results. From responsive design to seamless navigation, we prioritize user experience to ensure your website stands out in the digital landscape. But it doesn't stop there. Understanding the importance of visibility online, our SEO specialists work tirelessly to optimize your website for search engines. Through keyword research, content optimization, and strategic link building, we enhance your website's visibility and drive organic traffic. Partner with us to unlock the full potential of your online presence and stay ahead of the competition in today's digital age.
        </p>
      </div>
    </div>
  );
}

export default WebDev;
