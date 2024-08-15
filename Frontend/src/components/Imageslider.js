import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="overlay-content">
        <h1>Find Your Travel Buddy</h1>
        <h4>Discover a new and authentic way of travelling. Find Travel Buddies who fit your travel style and discover the world together.</h4>
        <div className="search-container">
          <input type="text" placeholder="Enter destination" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <img src="/images/overlay.gif" alt="Overlay GIF" className="gif-overlay" />
    </div>
  );
};

export default ImageSlider;
