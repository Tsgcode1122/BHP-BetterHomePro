import React, { useEffect } from "react";
import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../assets/Images/newIm.jpg";
import GalleryContent from "../Component/GalleryContent";
import Before from "../Component/Before";
const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Gallery"
        intro="Explore Our Work: Browse through our gallery to see examples of our projects and services in action. Each image showcases the quality and attention to detail that defines our commitment to excellence."
      />
      <GalleryContent />
      <Before />
    </>
  );
};

export default Gallery;
