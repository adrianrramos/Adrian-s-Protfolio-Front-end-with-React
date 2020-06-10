import React from "react";
import Slider from "react-slick";

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

  return (
    <div className="carousel-container">
      <div>
        <Slider {...settings}>
          <div className="gif-slide">
            <img
              src={gifs.desktop}
              className="gif"
              alt="desktop demo preview"
            />
          </div>
          {gifs.mobile && (
            <div className="gif-slide">
              <img
                src={gifs.mobile}
                className="gif"
                alt="desktop demo preview"
              />
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;