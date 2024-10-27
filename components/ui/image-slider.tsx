import React, { useState, useEffect } from "react";

interface Slide {
  imageUrl: string;
  dear: string;
  description: string;
}

interface ImageSliderProps {
  slides: Slide[];
  interval?: number; // Optional prop to control the interval between slides (in ms)
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides, interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides at a given interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
        >
          {/* Overlay to darken the image for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">{slide.dear}</h1>
            <p className="text-lg max-w-xl">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
