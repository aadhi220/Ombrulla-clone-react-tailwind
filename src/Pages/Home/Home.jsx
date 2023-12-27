import React from "react";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Section1 from "../../Components/Sections/Section1";
import Section2 from "../../Components/Sections/Section2";
import Section3banner from "../../Components/Sections/Section3banner";
import Section4Products from "../../Components/Sections/Section4Products";
import Section5Customers from "../../Components/Sections/Section5Customers";
import Section6Testimonials from "../../Components/Sections/Section6Testimonials";
import Section7Brands from "../../Components/Sections/Section7Brands";
import Section8Blog from "../../Components/Sections/Section8Blog";
function Home() {
  return (
    <>
      <Hero />
      <Section1/>
      <Section2/>
      <Section3banner/>
      <Section4Products/>
      <Section5Customers/>
      <Section6Testimonials/>
      <Section7Brands/>
      <Section8Blog/>
  

    


    </>
  );
}

export default Home;
