import React from "react";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="w-full h-[100vh] bg-gradient-to-t from-neutral-50 to-[#d0daff] grid md:grid-cols-2 px-5 xl:px-24"
      >
        <div className="w-full flex flex-col gap-[2rem] pt-[7rem] xl:pt-[12rem]">
          <h1 className="text-[3.5rem] xl:text-6xl text-black font-bold xl:flex xl:flex-col w-[17rem] xl:w-[22rem] leading-[1.2] xl:leading-[1]">
            Manual Inspection is{" "}
            <span className="font-normal text-primary">
              Slow & Error-Prone
            </span>
          </h1>
          <p className="opacity-70 xl:opacity-50  text-left text-[1.1rem] xl:text-lg w-[95%] xl:w-full">
            AI visual inspection, powered by computer vision, revolutionizes the
            inspection process in manufacturing, enhancing precision and
            cost-effectiveness, all the while maintaining product excellence.
          </p>
          <div className="flex items-center justify-start mb-[8rem] xl:mb-0">
            <button className="bg-primary me-4 xl:me-8  px-4 xl:px-8 py-2 xl:py-4 text-[1rem] rounded-full xl:font-semibold border border-primary text-[#ffffffef] hover:text-primary hover:bg-transparent hover:border-black transition-all">
              Schedule Call
            </button>
            <button className="bg-primary w-[42px] xl:w-[55px] h-[42px] xl:h-[55px] rounded-full text-white hover:text-primary hover:bg-transparent transition-all">
              <i className="fa-solid fa-play fa-sm xl:fa-lg"></i>
            </button>
            <button className="px-4 xl:px-7 py-3 text-[1rem] font-semibold text-black hover:text-primary transition-all">
              Watch Video
            </button>
          </div>
        </div>
        <div className=" xl:pt-[7rem] xl:ps-[2rem]">
          <img
            className="w-[90%] object-center"
            src="../../../public/hero.png"
            alt=""
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;