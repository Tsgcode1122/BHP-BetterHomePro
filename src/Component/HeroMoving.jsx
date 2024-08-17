import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import i1 from "../Images/clean.png";
import i2 from "../Images/air-conditioning.png";
import i3 from "../Images/chimney.png";
import i4 from "../Images/power-washing.png";
import i5 from "../Images/maintenance.png";
import { Colors, Gradients } from "../Colors/ColorComponent";
const HeroMoving = () => {
  const items = [
    { img: i1, text: "HVAC" },
    { img: i2, text: "Air Duct Cleaning" },
    { img: i3, text: "Chimney Repair" },
    { img: i4, text: "Carpet Cleaning" },
    { img: i5, text: "Home Improvement" },
  ];

  const repeatedItems = Array.from({ length: 20 }).flatMap(() => items);

  return (
    <ImageWrapper>
      <MovingImage
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <ImageContainer>
          {repeatedItems.map((item, index) => (
            <Item key={index}>
              <img src={item.img} alt={item.text} />
              {item.text}
            </Item>
          ))}
        </ImageContainer>
      </MovingImage>
    </ImageWrapper>
  );
};

export default HeroMoving;

const ImageWrapper = styled.div`
  overflow: hidden;

  width: 100%;
  padding: 20px 0;
  position: relative;
`;

const MovingImage = styled(motion.div)`
  display: flex;
  width: 100%;
  /* position: absolute; */
  left: 0;
  top: 0;
`;

const ImageContainer = styled.div`
  display: flex;

  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 0.7rem;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background: ${Gradients.greenToDarkGreen} !important;
  border-radius: 20px;
  color: black;
  min-width: 100px;

  img {
    max-width: 100%;
    height: 40px;
    margin-bottom: 10px;

    @media screen and (max-width: 320px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 30px;
      min-width: 30px;
    }
  }
`;
