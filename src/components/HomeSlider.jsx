import React, { useState, useEffect } from 'react';
import "../styles/HomeSlider.css"
import VideoEdit2 from "../images/VideoEdit2.jpg";
import mainPhoto from "../images/mainPhoto.jpg"
import graphDesign from "../images/graphDesign.jpg"

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    mainPhoto,
    VideoEdit2,
    graphDesign
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
      <div className="prev" onClick={prevSlide}>❮</div>
      <div className="next" onClick={nextSlide}>❯</div>
    </div>
  );
}

export default HomeSlider;
