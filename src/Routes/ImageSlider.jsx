import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      src: "https://picsum.photos/600/400?random=1",
      alt: "image1",
    },
    {
      id: 2,
      src: "https://picsum.photos/600/400?random=2",
      alt: "image2",
    },
    {
      id: 3,
      src: "https://picsum.photos/600/400?random=3",
      alt: "image3",
    },
    {
      id: 4,
      src: "https://picsum.photos/600/400?random=4",
      alt: "image4",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="image-slider-container">
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          className={index === currentImage ? "active" : "inactive"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlider;