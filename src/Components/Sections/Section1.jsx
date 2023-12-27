import React from "react";

function Section1() {
  return (
    <section className="h-[100vh] w-full px-[4rem]">
      <div className="xl:h-[83%] flex xl:rounded-3xl section-2-bg text-white w-full">
        <div className="my-auto mx-auto grid grid-rows-1 md:gap-y-6 xl:gap-y-4 md:py-8 text-black">
          <div className="flex items-baseline">
            <i className="fa-solid fa-square fa-xs text-primary"></i>
            <div className="mb-3 ml-5 md:ml-4 md:mb-2 font-medium md:font-bold  text-5xl md:text-sm md:leading-4">
              <h1>The Best AI Service Provider</h1>
            </div>
          </div>
          <h2 className="text-8xl md:text-5xl xl:text-5xl leading-tight font-medium mb-2 md:max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl">
            Crafting Tomorrow's World with{" "}
            <span className="text-primary font-normal">AI Excellence</span>
          </h2>
          <p className="text-6xl md:text-lg xl:text-base md:max-w-2xl 2xl:max-w-4xl leading-normal md:leading-relaxed text-gray-500  mb-4 md:mb-0">
            The majority of customers lack data-driven insights and automation.
            Using AI, Ombrulla assists clients in extracting data from diverse
            sources such as photos, videos, and data lakes, which can assist
            businesses in making data-driven insights and improving their bottom
            line.
          </p>
          <div className="flex">
            <button
              type="button"
              className="md:w-12 md:h-12 lg:h-[3.5rem] lg:w-[3.5rem] inline-flex items-center justify-center transition-all rounded-full border border-transparent bg-primary  text-white hover:text-primary shadow-sm hover:bg-transparent  "
              aria-label="watch video"
            >
              {" "}
              <i className="fa-solid fa-play fa-lg"></i>
            </button>
            <div className="ml-5 mt-8 md:mt-3 xl:mt-4 font-medium text-5xl md:text-base xl:text-base font-sans cursor-pointer hover:text-primary">
              Watch Corporate Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
