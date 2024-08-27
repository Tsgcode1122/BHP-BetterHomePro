import React, { useEffect } from "react";
import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../Images/newIm.jpg";
import AboutContent from "../Component/AboutContent";
import WhyUs from "../Component/WhyUs";
import Contact from "../Component/Contact";
import Vision from "../Component/Vision";
import Reviews from "../Component/Reviews";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="About Us"
        intro="Get to Know US: Learn more about our commitment to quality and customer satisfaction."
      />

      <AboutContent />
      <Vision />
      <WhyUs />
      <Reviews />
      <Contact />
    </>
  );
};

export default About;
