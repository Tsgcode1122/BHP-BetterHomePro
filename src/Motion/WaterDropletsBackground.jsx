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
    transform: translateY(-300px);
    opacity: 0;
  }
`;

const Droplet = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  animation: ${moveDroplets} ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const WaterDropletsBackground = () => {
  const [numDroplets, setNumDroplets] = useState(15);

  useEffect(() => {
    const updateNumDroplets = () => {
      if (window.innerWidth >= 1000) {
        setNumDroplets(30);
      } else {
        setNumDroplets(10);
      }
    };

    window.addEventListener("resize", updateNumDroplets);
    updateNumDroplets();

    return () => {
      window.removeEventListener("resize", updateNumDroplets);
    };
  }, []);

  const generateRandomPosition = () => {
    // Use random numbers for both top and left positions to ensure an even spread
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return { top, left };
  };

  const dropletImages = [droplet1, droplet2, droplet3, droplet4, droplet5];
  const dropletElements = Array.from({ length: numDroplets }, (_, index) => {
    const { top, left } = generateRandomPosition();
    return (
      <Droplet
        key={index}
        img={dropletImages[index % dropletImages.length]}
        top={top}
        left={left}
        duration={Math.random() * 15 + 5}
        delay={Math.random() * 5}
      />
    );
  });

  return <Background>{dropletElements}</Background>;
};

export default WaterDropletsBackground;
