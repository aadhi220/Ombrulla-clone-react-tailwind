import React from "react";

function Section3banner() {
  return (
    <>
      <div className="overflow-hidden bg-primary">
        <div className="max-w-7xl px-5 py-[5rem] md:py-28 md:px-28 md:max-w-none">
          <div className="grid  xl:gap-y-64 xl:gap-x-8 md:grid-cols-2">
            <div className="flex flex-col xl:gap-y-16 gap-y-6">
              <div className="flex flex-col gap-y-4 ">
                <div>
                  <img
                    src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp"
                    alt="Petran"
                    className="w-[6rem]  md:h-6 md:w-28"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h2 className=" md:text-base font-normal leading-8 tracking-tight text-white">
                    <span className="text-white font-bold">PE</span>rformance -{" "}
                    <span className="text-white font-bold">TR</span>acking -{" "}
                    <span className="text-white font-bold">AN</span>alytics
                  </h2>
                </div>
              </div>
              <div className="flex flex-col  leading-snug text-3xl md:text-4xl font-medium  text-white">
                <div>AI &amp; IoT Enabled</div>
                <div>Asset Performance Management</div>
              </div>
              <div>
                <p className=" leading-snug md:text-lg text-white">
                  Petran offers an Asset Performance Management (APM) system
                  that harnesses the power of artificial intelligence and the
                  Internet of Things (IoT) to empower data-driven
                  decision-making and enable proactive maintenance strategies.
                </p>
              </div>
              <div className="flex mt-5">
                <div>
                  <button
                    className="bg-white md:bg-transparent leading-5  md:leading-5 md:text-sm text-primary md:text-white
         font-medium hover:text-black border border-white
        rounded-full px-3 py-2 md:py-4 md:px-6 md:font-semibold"
                    aria-label="schedule call"
                  >
                    Schedule Call
                  </button>
                </div>
                <div className="flex ml-8">
                  <button
                    type="button"
                    className="ml-2 md:ml-0 w-[2.25rem] h-[2.25rem] md:h-[3.25rem] md:w-[3.25rem] inline-flex items-center justify-center rounded-full border  md:border-white  bg-transparent text-white shadow-sm  hover:text-black "
                    aria-label="watch video"
                  >
                    <i className="fa-solid fa-play xl:fa-lg "></i>
                  </button>
                  <div className="ml-8 font-medium md:font-semibold md:ml-4 text-white  xl:text-base   md:mt-3 cursor-pointer hover:text-black">
                    Watch Video
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-none md:min-w-full rounded-xl mt-10 flex justify-center items-center">
              <img
                src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
                alt="Asset Perfromance Management Software"
                className="w-[80%] xl:w-[100%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3banner;
