import React from "react";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-[100vh] bg-gradient-to-t from-neutral-50 to-[#d0daff] grid md:grid-cols-2 md:px-24"
      >
        <div className="w-full flex flex-col gap-[2rem] pt-[12rem]">
          <h1 className="text-6xl text-black font-bold flex flex-col max-w-[22rem] leading-[1]">
            Manual Inspection is{" "}
            <span className="font-normal text-primary">
              Slow & Error-Prone
            </span>
          </h1>
          <p className="opacity-50 text-lg">
            AI visual inspection, powered by computer vision, revolutionizes the
            inspection process in manufacturing, enhancing precision and
            cost-effectiveness, all the while maintaining product excellence.
          </p>
          <div className="flex items-center justify-start">
            <button className="bg-primary me-8 px-8 py-4 rounded-full font-semibold border border-primary text-[#ffffffef] hover:text-primary hover:bg-transparent hover:border-black transition-all">
              Schedule Call
            </button>
            <button className="bg-primary w-[55px] h-[55px] rounded-full text-white hover:text-primary hover:bg-transparent transition-all">
              <i className="fa-solid fa-play fa-lg"></i>
            </button>
            <button className="px-7 py-3 font-semibold text-black hover:text-primary transition-all">
              Watch Video
            </button>
          </div>
        </div>
        <div className="pt-[7rem] ps-[2rem]">
          <img
            className="w-[90%] object-center"
            src="src/assets/hero.png"
            alt=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;