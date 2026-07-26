import React, { useState, useEffect } from 'react';
import './carousel.scss'; 

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const images = [
    'https://avatars.mds.yandex.net/i?id=8212bb4fa705a7d9fca740435c0979b2_l-4298842-images-thumbs&ref=rim&n=13&w=1996&h=1121',
    'https://www.archaeolog.ru/media/2018/expedicii/baktriuskiu_otrayd/1.jpg',
    'https://avatars.mds.yandex.net/i?id=2cca8c0e97e09c2b053380812bc1b949_l-5449883-images-thumbs&n=13',
  ];

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
