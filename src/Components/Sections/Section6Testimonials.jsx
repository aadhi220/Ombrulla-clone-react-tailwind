import React, { useState, useEffect } from "react";

function Section6Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const cards = [
    <blockquote className="flex flex-col bg-white rounded-lg ">
      <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
        <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
        <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
          Ombrulla demonstrates how AI could quickly extract value from our data
          and show significant economic benefits. Ombrulla comes highly
          recommended by us and we look forward to collaborating with them on
          future initiatives.
        </p>
      </div>
      <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
        <div className="flex items-center">
          <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
            <img
              src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
              className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
              alt="Planet Fitness"
              width={230}
              height={230}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="ml-4">
            <div className="text-xl md:text-base font-medium">Joseph</div>
            <div className="text-xl md:text-base font-medium text-indigo-400">
              Planet Fitness
            </div>
          </div>
        </div>
      </footer>
    </blockquote>,
        <blockquote className="flex flex-col bg-white rounded-lg ">
        <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
          <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
          <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
            Ombrulla demonstrates how AI could quickly extract value from our data
            and show significant economic benefits. Ombrulla comes highly
            recommended by us and we look forward to collaborating with them on
            future initiatives.
          </p>
        </div>
        <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
              <img
                src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
                alt="Planet Fitness"
                width={230}
                height={230}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ml-4">
              <div className="text-xl md:text-base font-medium">Joseph</div>
              <div className="text-xl md:text-base font-medium text-indigo-400">
                Planet Fitness
              </div>
            </div>
          </div>
        </footer>
      </blockquote>,
          <blockquote className="flex flex-col bg-white rounded-lg ">
          <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
            <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
            <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
              Ombrulla demonstrates how AI could quickly extract value from our data
              and show significant economic benefits. Ombrulla comes highly
              recommended by us and we look forward to collaborating with them on
              future initiatives.
            </p>
          </div>
          <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
            <div className="flex items-center">
              <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                <img
                  src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                  className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
                  alt="Planet Fitness"
                  width={230}
                  height={230}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="ml-4">
                <div className="text-xl md:text-base font-medium">Joseph</div>
                <div className="text-xl md:text-base font-medium text-indigo-400">
                  Planet Fitness
                </div>
              </div>
            </div>
          </footer>
        </blockquote>,
            <blockquote className="flex flex-col bg-white rounded-lg ">
            <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
              <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
              <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
                Ombrulla demonstrates how AI could quickly extract value from our data
                and show significant economic benefits. Ombrulla comes highly
                recommended by us and we look forward to collaborating with them on
                future initiatives.
              </p>
            </div>
            <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
              <div className="flex items-center">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                    className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
                    alt="Planet Fitness"
                    width={230}
                    height={230}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-xl md:text-base font-medium">Joseph</div>
                  <div className="text-xl md:text-base font-medium text-indigo-400">
                    Planet Fitness
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>,
              <blockquote className="flex flex-col bg-white rounded-lg ">
              <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
                <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
                <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
                  Ombrulla demonstrates how AI could quickly extract value from our data
                  and show significant economic benefits. Ombrulla comes highly
                  recommended by us and we look forward to collaborating with them on
                  future initiatives.
                </p>
              </div>
              <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
                <div className="flex items-center">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                      className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
                      alt="Planet Fitness"
                      width={230}
                      height={230}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-xl md:text-base font-medium">Joseph</div>
                    <div className="text-xl md:text-base font-medium text-indigo-400">
                      Planet Fitness
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>,
                <blockquote className="flex flex-col bg-white rounded-lg ">
                <div className="relative text-lg md:flex-grow px-3 xl:px-10 py-5 xl:py-16 text-slate-500">
                  <i className="fa-solid fa-quote-left fa-2xl text-primary"></i>
                  <p className="relative text-xl leading-snug md:text-base md:leading-7 text-gray-500 py-2 md:py-1">
                    Ombrulla demonstrates how AI could quickly extract value from our data
                    and show significant economic benefits. Ombrulla comes highly
                    recommended by us and we look forward to collaborating with them on
                    future initiatives.
                  </p>
                </div>
                <footer className="xl:mt-8 bg-slate-300 xl:py-10 py-5 px-5">
                  <div className="flex items-center">
                    <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                      <img
                        src="https://www.ombrulla.com/_astro/planet-fitness.2b86950e_Z1XdacQ.webp"
                        className="h-10 w-10 xl:h-20 xl:w-20 rounded-full"
                        alt="Planet Fitness"
                        width={230}
                        height={230}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-xl md:text-base font-medium">Joseph</div>
                      <div className="text-xl md:text-base font-medium text-indigo-400">
                        Planet Fitness
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>,
  
        
    

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="bg-blue-950 px-5 xl:px-20 py-20 md:py-16 flex flex-col gap-y-4">
      <div className="flex items-center ">
        <i className="fa-solid fa-square fa-xs text-primary"></i>
          <h3 className="text-xl md:text-sm md:leading-4 font-medium md:font-bold ml-6 md:ml-4 text-white">
            OUR TESTIMONIALS
          </h3>
        
      </div>
      <h2 className="text-xl leading-snug md:text-4xl font-medium text-white">
        What Customers Say About Us
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full py-16 md:py-8 rounded-lg h-[28rem]">
          <button
            type="button"
            aria-label="previous slide"
            className="absolute h-full top-0 left-[1rem] z-10"
            onClick={prevSlide}
          >
            <i className="fa-solid fa-chevron-left fa-xl opacity-90 hover:opacity-95"></i>
          </button>
          <ul
            className=""
            style={{
              transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)`,
              transitionDuration: "1000ms",
            }}
          >
            <li className="flex justify-start  gap-[2rem]">
              {cards.map((card, index) => (
                <div className="flex shrink-0 max-w-[22rem]  xl:max-w-2xl" key={index}>
                  {card}
                </div>
              ))}
            </li>
          </ul>
          <button
            type="button"
            aria-label="next slide"
            className="absolute h-full top-0 right-[1rem] z-10"
            onClick={nextSlide}
          >
            <i className="fa-solid fa-chevron-right fa-xl opacity-90 hover:opacity-95"></i>
          </button>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6Testimonials;
