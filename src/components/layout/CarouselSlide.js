import React from "react";

const CarouselSlide = ({ gif, className }) => {
  return (
    <div className="gif-slide">
      <img
        src={gif}
        className={className}
        alt="desktop demo preview"
        style={{ top: "50%" }}
      />
    </div>
  );
};

export default CarouselSlide;
