import React from "react";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Section1 from "../../Components/Sections/Section1";
import Section2 from "../../Components/Sections/Section2";
import Section3banner from "../../Components/Sections/Section3banner";
import Section4Products from "../../Components/Sections/Section4Products";
function Home() {
  return (
    <>
      <Hero />

    <Section1/>
    <Section2/>
    <Section3banner/>
    <Section4Products/>
    


    </>
  );
}

export default Home;
