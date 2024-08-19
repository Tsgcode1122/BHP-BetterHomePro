import React from "react";
import styled from "styled-components";
import myImage from "../Images/design.png";

const SideTop = () => {
  return (
    <>
      <BoxContainer>
        <Overlay />
      </BoxContainer>
      <Box>
        <Overlay2 />
      </Box>
    </>
  );
};

export default SideTop;

const Box = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  content: "";
  height: 170px;
  border-radius: 30px;
  width: 180px;

  background: rgba(229, 239, 220, 0.1);

  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
    top: 16rem;
    left: 4rem;
  }
  @media screen and (min-width: 1200px) {
    left: 10rem;
  }
`;
const BoxContainer = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  content: "";
  height: 300px;
  border-radius: 30px;
  width: 180px;
  background: rgba(229, 239, 220, 0.3);

  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
    top: 16rem;
    right: 4rem;
  }
  @media screen and (min-width: 1200px) {
    right: 10rem;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  content: "";
  height: 170px;
  border-radius: 30px;
  width: 180px;
  background: rgba(229, 239, 220, 0.4);

  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
    top: 20rem;
  }
  @media screen and (min-width: 1200px) {
  }
`;
const Overlay2 = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  content: "";
  height: 170px;
  border-radius: 30px;
  width: 180px;
  background: rgba(229, 239, 220, 0.4);
  height: 300px;
  border-radius: 30px;
  width: 180px;
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
    top: 12rem;
  }
  @media screen and (min-width: 1200px) {
  }
`;
