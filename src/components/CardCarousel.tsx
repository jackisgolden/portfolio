import React, { useState } from 'react';
import './CardCarousel.css'; // Make sure to create a corresponding CSS file

interface CardData {
  title: string;
  date: string;
  description: string;
}

interface CardCarouselProps {
  data: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ data }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-carousel-container">
      <div className="card-carousel">
        {data.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentCardIndex ? 'active' : ''}`}
          >
            <h3>{card.title}</h3>
            <p>Date: {card.date}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevCard}>Prev</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default CardCarousel;

