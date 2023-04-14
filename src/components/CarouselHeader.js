import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './CarouselHeader.css';

function CarouselHeader(props) {
  const carouselItems = props.items.map((slide) =>
    <Carousel.Item>
      <Carousel.Caption>
        <h3>{slide.label}</h3>
        <p>{slide.caption}</p>
      </Carousel.Caption>
      <img
        className="carousel-image"
        src={`../assets/images/${slide.path}`}  // points to public folder
        alt={slide.alt}
      />
    </Carousel.Item>
  )

  return (
    <div>
      <Carousel variant="light">
        {carouselItems}
      </Carousel>
    </div>
  );
}

export default CarouselHeader;