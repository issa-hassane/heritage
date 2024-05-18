"use client";

import Carousel from "react-bootstrap/Carousel";

function CarouselImage({ text }) {
  // use next/Image component with real images
  return <img className="w-100" src={`https://placehold.it/800x400?text=${text}`} alt={text} />;
}

function HomeCarousel() {
  return (
    <Carousel className="mb-5 rounded-4 overflow-hidden">
      <Carousel.Item>
        <CarouselImage text="First_slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second_slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third_slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default HomeCarousel;
