import React, { useState } from "react";

function Section5Customers() {
  const imagesSet = [
    "https://www.ombrulla.com/best-western.webp",
    "https://www.ombrulla.com/dubai-festival-city.webp",
    "https://www.ombrulla.com/wild-leaf.webp",
    "https://www.ombrulla.com/emirates.webp",
    "https://www.ombrulla.com/burger-king.webp",
    "https://www.ombrulla.com/damac.webp",
    "https://www.ombrulla.com/planet-fitness.webp",
    "https://www.ombrulla.com/suja.webp",
    "https://www.ombrulla.com/azelit.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center items-baseline mb-8 md:mb-1">
          <i className="fa-solid fa-square fa-xs text-primary"></i>
          <h4 className="text-center text-5xl md:text-sm font-medium  mb-8 md:mb-[1.125rem] mx-4">
            OUR CUSTOMERS
          </h4>
          <i className="fa-solid fa-square fa-xs text-primary"></i>
        </div>
        <h2 className="text-8xl md:text-5xl font-medium text-center tracking-tight mb-[1.125rem]">
          They Trust Us
        </h2>
        <div className="mt-16 flow-root lg:mt-10 mx-6">
          <div className="w-[100%] relative overflow-hidden">
            <button
              type="button"
              aria-label="previous slide / item"
              className="absolute h-full top-0 left-0 z-10"
              onClick={prevSlide}
            >
              <i class="fa-solid fa-chevron-left opacity-20 hover:opacity-95 fa-xl"></i>
            </button>
            <ul
              className="slider"
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0px, 0px)`,
                transitionDuration: "350ms",
              }}
            >
              <li className="flex">
                {imagesSet.map((image, index) => (
                  <div className="flex-none p-2" key={index}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{ width: 230, padding: 40 }}
                    />
                  </div>
                ))}
              </li>
            </ul>
            <button
              type="button"
              aria-label="next slide / item"
              className="absolute h-full top-0 right-0 z-10"
              onClick={nextSlide}
            >
              <i class="fa-solid fa-chevron-right fa-xl opacity-20 hover:opacity-95 "></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5Customers;
