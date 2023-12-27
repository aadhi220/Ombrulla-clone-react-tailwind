import React from "react";

function Section1() {
  return (
    <section className="xl:h-[100vh] w-full mt-[20rem] xl:mt-[5rem] px-4  lg:px-20 ">
      <div className="xl:h-[83%] flex rounded-3xl section-2-bg text-white p-8">
        <div className="my-auto mx-auto grid grid-rows-1 md:gap-y-6 xl:gap-y-4 md:py-8 text-black">
          <div className="flex items-baseline">
            <i className="fa-solid fa-square fa-xs text-primary"></i>
            <div className="mb-3 ml-5 md:ml-4 md:mb-2 font-medium md:font-bold text-[13px] md:text-base md:leading-4">
              <h1>The Best AI Service Provider</h1>
            </div>
          </div>
          <h2 className="text-[1.5rem] md:text-5xl xl:text-5xl leading-tight font-medium mb-2 w-[20rem]  xl:w-[70rem] ">
            Crafting Tomorrow's World with{" "}
            <span className="text-primary font-normal">AI Excellence</span>
          </h2>
          <p className="text-[1rem] md:text-base xl:text-lg w-[20rem]  xl:w-[55rem]  leading-normal md:leading-relaxed text-gray-500  mb-4 md:mb-0">
            The majority of customers lack data-driven insights and automation.
            Using AI, Ombrulla assists clients in extracting data from diverse
            sources such as photos, videos, and data lakes, which can assist
            businesses in making data-driven insights and improving their bottom
            line.
          </p>
          <div className="flex  items-center mt-4">
            <button
              type="button"
              className="w-12 h-12 lg:h-[3.5rem] lg:w-[3.5rem] inline-flex items-center justify-center transition-all rounded-full border border-transparent bg-primary text-white hover:text-primary shadow-sm hover:bg-transparent  mr-4"
              aria-label="watch video"
            >
              <i className="fa-solid fa-play fa-lg"></i>
            </button>
            <div className="font-medium text-[1rem] md:text-base xl:text-lg font-sans cursor-pointer hover:text-primary">
              Watch Corporate Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
