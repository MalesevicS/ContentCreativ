import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../styles/FrontServices.css";
import pic from "../images/socialMedia.jpg";
import seo from "../images/seo.jpg";
import graph from "../images/graphic.jpg";
import videop from "../images/videoprod.jpeg";

const serviceData = [
  {
    img: pic,
    title: "Social Media Marketing",
    desc: "Manage your social media presence, engage with your audience, and grow your brand.",
    to: '/reference#marketing-reference',  
    className: "picture"
  },
  {
    img: videop,
    title: "Video Production & Voice Over",
    desc: "From idea to realization. Product ad, Commercials, Corporate and Event video",
    to: '/reference#video-prod',  
    className: "video"
  },
  {
    img: graph,
    title: "Graphic & Web Design",
    desc: "Get custom print designs to capture your audience`s attention and empower your business.",
    to: '/reference#graphic-web',  
    className: "graph"
  },
  {
    img: seo,
    title: "Website Development and SEO",
    desc: "Drive more traffic and engage your audience with our website design and SEO optimization.",
    to: '/reference#web-dev',  
    className: "seo"
  },
];

const MarketingService = () => {
  return (
    <div className="services">
      <h1 className='serviceHeader'>SERVICES</h1>
      <div className="service_item-wrapper">
        {serviceData.map((item, index) => (
          <Link to={item.to} key={index} style={{ textDecoration: 'none' }} >
            <div className={`services__item ${item.className}`}>
              <img className='imgp' src={item.img} alt={item.title} />
              <div className='item_det'>
                <h3 className="services__title">{item.title}</h3>
                <div className="btnIcon">
                <button className='serBtn'>see more</button>
                <div className="arrowService">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MarketingService;
