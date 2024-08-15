import React from 'react';
import ImageSlider from './Imageslider'; // Import the ImageSlider component
import '../styles/Home.css';

const Home = () => {
  const content = [
    {
      image: '/images/image5.jpg',
      title: 'Explore the Unseen',
      text: 'Discover hidden gems and breathtaking destinations around the world. Your adventure starts here, with endless possibilities waiting to be uncovered.'
    },
    {
      image: '/images/image6.jpg',
      title: 'Journey Beyond Limits',
      text: 'Push your boundaries and experience the thrill of new cultures and landscapes. Every trip is a new story waiting to be told, filled with unforgettable moments.'
    },
    {
      image: '/images/image7.jpg',
      title: 'Connect and Wander',
      text: 'Find travel buddies who share your passion for exploration. Together, create lasting memories and embark on adventures that will stay with you forever.'
    }
  ];

  const whyUseContent = [
    {
      image: '/images/unique.png',
      title: 'Memorably Unique',
      text: 'Our TripLeaders have a magic touch to make each trip special! Explore extraordinary destinations, walk off-the-beaten-path, and experience unique itineraries.'
    },
    {
      image: '/images/authentic.png',
      title: 'Incredibly Authentic',
      text: 'Find like-minded travel buddies and discover an authentic and exciting new way of traveling.'
    },
    {
      image: '/images/support.png',
      title: '24/7 Support',
      text: 'We provide round-the-clock support and assistance to ensure that your travel experience exceeds your expectations.'
    }
  ];

  return (
    <div className="home-container">
      <ImageSlider /> {/* Add the ImageSlider component here */}
      
      <div className="alternating-content">
        {content.map((item, index) => (
          <div className={`content-block ${index % 2 === 0 ? 'left-image' : 'right-image'}`} key={index}>
            <div className="content-text">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div className="content-image">
              <img src={item.image} alt={`Content ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <div className="why-use-container">
        <h1>Why Use Travel Buddy Finder?</h1>
         <div className="why-use-content">
          {whyUseContent.map((item, index) => (
            <div className="content-item" key={index}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
