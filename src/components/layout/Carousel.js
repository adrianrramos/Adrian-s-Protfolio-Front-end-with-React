import React from "react";
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide";

import "../../styles/ModalMarkup.css";

const Carousel = ({ gifs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    className: "slides",
  };

  const multiSlides = gifs.desktop.map(gif => {
    return <CarouselSlide gif={gif} className="gif dsk-gif" />;
  });

  return (
    <div className="carousel-container">
      <div>
        <Slider {...settings}>
          {gifs.desktop.length > 1 ? (
            multiSlides
          ) : (
            <CarouselSlide gif={gifs.desktop} className="gif dsk-gif" />
          )}
          {gifs.mobile && <CarouselSlide gif={gifs.mobile} className="gif" />}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
