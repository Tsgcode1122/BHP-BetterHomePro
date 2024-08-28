import React, { useEffect } from "react";
import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../Images/newIm.jpg";
import ServicesContent from "../Component/ServicesContent";
import Contact from "../Component/Contact";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Services"
        intro="Discover Our Services: Explore our range of expert solutions designed to keep your home in top shape. We're here to serve your every need."
      />

      <ServicesContent />
      <Contact />
    </>
  );
};

export default Services;
