import React from "react";
import styled from "styled-components";
import myImage from "../Images/design.png";

const SideTop = () => {
  return (
    <ImageContainer>
      <StyledImage>
        <img src={myImage} />
      </StyledImage>
    </ImageContainer>
  );
};

export default SideTop;

const ImageContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  @media screen and (max-width: 320px) {
    top: 0rem;
    right: 0rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    top: 0rem;
    right: 0rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    top: 0rem;
    right: 0rem;
  }
  @media screen and (min-width: 600px) {
    top: 1rem;
    right: 1rem;
  }
  @media screen and (min-width: 800px) {
    top: 2rem;
    right: 4rem;
  }
  @media screen and (min-width: 1000px) {
    top: 6rem;
    right: 2rem;
  }
  @media screen and (min-width: 1200px) {
    top: 6rem;
    right: 2rem;
  }
`;

const StyledImage = styled.div`
  height: 40px;
  img {
    width: 100%;
    height: auto;
    max-width: 300px;
  }
`;
