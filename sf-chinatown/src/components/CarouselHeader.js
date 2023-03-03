import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './CarouselHeader';

function CarouselHeader(props) {
  const carouselItems = props.items.map((slide) =>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require(`../assets/images/${slide.path}`)}
        alt={slide.alt}
      />
      <Carousel.Caption>
        <h3>{slide.label}</h3>
        <p>{slide.caption}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )

  return (
    <Carousel variant="dark">
      {carouselItems}
    </Carousel>
  );
}

export default CarouselHeader;