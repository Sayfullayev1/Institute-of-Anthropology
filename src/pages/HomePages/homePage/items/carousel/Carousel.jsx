import React, { useState, useEffect } from 'react';
import './carousel.scss';
import riverCanyon from '@/public/images/HomePagesImages/carouselImages/river-canyon.jpg';
import desert from '@/public/images/HomePagesImages/carouselImages/desert.jpg';
import excavation from '@/public/images/HomePagesImages/carouselImages/excavation.jpg';

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const images = [desert, riverCanyon, excavation];

  const goToSlide = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % images.length);
    };
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-page__carousel">
      <div className="home-page__carousel__slides">
        {images.map((src, i) => (
          <div 
            className={`home-page__carousel__slide ${i === index ? 'home-page__carousel__slide__active' : ''}`} 
            key={i}
          >
            <img src={src} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>

      <div className="home-page__carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`home-page__carousel__dot ${i === index ? 'home-page__carousel__dot-active' : ''}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
