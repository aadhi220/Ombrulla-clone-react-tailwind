import React from 'react'
import { Link } from 'react-router-dom'

function Section4Products() {
  return (
    <>
    <div className=" md:mb-16 md:mt-[7rem]  py-0 px-16 md:h-[32rem] md:mx-auto lg:max-w-none" >
    <div className="flex flex-col md:flex-row gap-x-10">
            <div className="flex flex-col pt-0 gap-y-10 basis-1/3">
              <div className="flex items-baseline">
              <i className="fa-solid fa-square fa-xs text-primary"></i>
                <div className="text-5xl md:text-sm md:leading-4 font-medium md:font-bold  ml-6 md:mt-10 md:ml-4">
                  PRODUCTS
                </div>
              </div>
              <div className="">
                <h3 className="text-8xl md:text-5xl  leading-tight font-semibold">
                  Our HR Tools
                </h3>
              </div>
              <div className="">
                <p className="text-6xl leading-snug md:text-base md:leading-6 text-gray-500">
                  Our job grading and evaluation tool, combined with the
                  compensation management tool, is a highly effective SaaS-based
                  solution. It greatly assists HR consultants and managers in
                  carrying out their roles with efficiency and precision. <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="basis-2/3 flex flex-col gap-y-20 md:flex-row gap-x-10">
              <div className="flex flex-col gap-y-20 md:gap-y-5 bg-[#eff1f5] w-fit mx-10 md:mx-0 p-32 md:p-9 rounded-2xl">
                <div className="flow-root">
                  <h4 className="font-medium  text-8xl md:text-2xl md:leading-8">
                    Job Grading and Evaluation
                  </h4>
                </div>
                <div>
                  <p className="text-6xl leading-snug md:text-base md:leading-7 text-gray-500">
                    Job evaluation assesses and ranks job roles in an
                    organization based on responsibilities and skills, often for
                    compensation and structuring purposes.
                  </p>
                </div>
                <div className="my-4 flex justify-center items-center">
                  <img
                    src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp"
                    alt="Job Grading and Evaluation"
                    className="w-3/4"
                    loading="lazy"
                  />
                </div>
                <div className="flex">
                  <div>
                    <Link
                      className="text-5xl md:text-base font-medium"
                    >
                      Free Trial
                    </Link>
                  </div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-20 md:gap-y-5 bg-[#eff1f5] w-fit mx-10 md:mx-0 p-32 md:p-9 rounded-2xl">
                <div className="flow-root">
                  <h4 className="font-medium  text-8xl md:text-2xl md:leading-8">
                    Compensation Management
                  </h4>
                </div>
                <div>
                  <p className="text-6xl leading-snug md:text-base md:leading-7 text-gray-500">
                    Compensation management software automates salary planning,
                    budget management, and equity analysis, ensuring fair and
                    competitive pay practices.
                  </p>
                </div>
                <div className="my-4 flex justify-center items-center">
                  <img
                    src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp"
                    alt="Compensation Management"
                    className="w-3/4"
                    loading="lazy"
                  />
                </div>
                <div className="flex">
                  <div>
                    <Link
                      className="text-5xl md:text-base font-medium"
                    >
                      Book For Demo
                    </Link>
                  </div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="blue" fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>

    
    </>
  )
}

export default Section4Products