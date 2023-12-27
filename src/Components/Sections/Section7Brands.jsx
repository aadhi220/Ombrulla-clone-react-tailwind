import React from "react";

function Section7Brands() {

    const brands =[
        {
          imgSrc: "https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp",
          alt: "unv",
          className: "h-32 w-32",
        },
        {
          imgSrc:
            "https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp",
          alt: "Dahua",
          className: "h-36 w-36",
        },
        {
          imgSrc:
            "https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp",
          alt: "Nvidia",
          className: "h-32 w-32",
        },
        {
          imgSrc:
            "https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp",
          alt: "Amazon",
          className: "h-36 w-36",
        },
        {
          imgSrc:
            "https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp",
          alt: "Hikvision",
          className: "h-36 w-36",
        },
        {
          imgSrc:
            "https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp",
          alt: "Azure",
          className: "h-24 w-28",
        },
      ]
  return (
    <div className="hidden xl:block bg-white mx-auto max-w-7xl px-6 lg:py-16 lg:px-8">
      <div className="flex justify-center items-center">
        <i className="fa-solid fa-square fa-xs text-primary"></i>
        <h4 className="text-center text-sm font-medium p-2 mx-2">
          BRANDS WE WORK WITH
        </h4>
        <i className="fa-solid fa-square fa-xs text-primary"></i>
      </div>
      <h2 className=" font-medium text-center tracking-tight mb-10">
        Trusted by Thousands of Businesses
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`col-span-1 flex justify-center bg-gray-50 py-8 px-8`}
          >
            <img
              src={brand.imgSrc}
              alt={brand.alt}
              className={brand.className}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section7Brands;
