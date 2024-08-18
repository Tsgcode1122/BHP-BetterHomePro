import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import droplet1 from "../Images/droplet1.png";
import droplet2 from "../Images/droplet2.png";
import droplet3 from "../Images/droplet3.png";
import droplet4 from "../Images/droplet4.png";
import droplet5 from "../Images/droplet5.png";

const moveDroplets = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-200px);
    opacity: 0;
  }
`;

const Droplet = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${moveDroplets} ${() => Math.random() * 10 + 5}s linear infinite;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WaterDropletsBackground = () => {
  const [numDroplets, setNumDroplets] = useState(5);

  useEffect(() => {
    const updateNumDroplets = () => {
      if (window.innerWidth >= 1000) {
        setNumDroplets(10);
      } else {
        setNumDroplets(5);
      }
    };

    window.addEventListener("resize", updateNumDroplets);
    updateNumDroplets();

    return () => {
      window.removeEventListener("resize", updateNumDroplets);
    };
  }, []);

  const dropletImages = [droplet1, droplet2, droplet3, droplet4, droplet5];
  const dropletElements = Array.from({ length: numDroplets }, (_, index) => (
    <Droplet key={index} img={dropletImages[index % dropletImages.length]} />
  ));

  return <Background>{dropletElements}</Background>;
};

export default WaterDropletsBackground;
