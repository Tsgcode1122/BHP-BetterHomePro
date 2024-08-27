import React, { useEffect } from "react";
import Hero from "../Component/Hero";
import HeroMoving from "../Component/HeroMoving";
import About from "../Component/About";
import HeroFixed from "../Component/HeroFixed";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";
import Before from "../Component/Before";
import Contact from "../Component/Contact";
import Faqs from "../Component/Faqs";
import QuickContact from "../Component/QuickContact";
import Gallery from "../Component/Gallery";
import Reviews from "../Component/Reviews";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <About />
      <Services />
      <QuickContact />
      <WhyUs />
      <Reviews />
      <Before />

      <Faqs />
      <Contact />
      <Gallery />
    </>
  );
};

export default Home;
