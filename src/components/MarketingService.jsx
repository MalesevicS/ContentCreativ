import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/FrontServices.css";
import pic from "../images/socialMedia.jpg"
import seo from "../images/seo.jpg";
import graph from "../images/graphic.jpg";
import videop from "../images/videoprod.jpeg";


const serviceData = [
  {
    img: pic,
    title: "Social Media Marketing",
    desc: "Manage your social media presence, engage with your audience, and grow your brand.",
    to: '/reference',
    className: "picture"
  },
  {
    img: videop,
    title: "Video Production & Voice Over",
    desc: "From idea to realization. Product ad, Commercials, Corporate and Event video",
    to: '/reference',
    className: "video"
  },
  {
    img: graph,
    title: "Graphic & Web Design",
    desc: "Get custom print designs to capture your audience`s attention and empower your business.",
    to: '/reference',
    className: "graph"
  },
  {
    img: seo,
    title: "Website Development and SEO",
    desc: "Drive more traffic and engage your audience with our website design and SEO optimization.",
    to: '/reference',
    className: "seo"
  },
];

const MarketingService = () => {
  // Ref za scroll na vrh stranice
  const refP = useRef(0);

  // Funkcija za skrolovanje na vrh stranice
  const scrollToTop = () => {
    const servicesTopContent = document.getElementById('servicesTopContent');
    if (refP.current) {
      refP.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={refP} className="services">
      {/* Vrh sadržaja */}
      <div className="services__top-content" id="servicesTopContent">
        <h1>Services</h1>
      </div>

      {/* Wrapper za stavke usluga */}
      <div className="service_item-wrapper">
        {/* Mapiranje podataka o uslugama */}
        {serviceData.map((item, index) => (
          <Link to={item.to} key={index} style={{ textDecoration: 'none' }} onClick={scrollToTop}>
            <div className={`services__item ${item.className}`}>
              <img className='imgp' src={item.img} alt="" />
              <h3 className="services__title">{item.title}</h3>
              <p>{item.desc}</p>
              <button>More info</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );}

export default MarketingService