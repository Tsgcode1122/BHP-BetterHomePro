import React from "react";
import Heading from "../FixedComponent/Heading";
import BeforeAndAfter from "./BeforeAndAfter";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
import WaterDropletsBackground from "../Motion/WaterDropletsBackground";
// import SideTop from "../FixedComponent/SideTop";
const SubHeading = styled.p`
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px 0 1px 0;
  padding: 5px;
  border-radius: 20px;
  display: inline-block;
  background: ${Colors.lightgreen};
  color: #555;
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    padding: 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
    padding: 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
    padding: 10px;
  }
`;
const SideTop = styled.div`
  @media screen and (min-width: 1200px) {
    height: 200px;
    top: 7rem;
    /* padding: 8rem; */
    /* right: 10rem; */
    content: "";
    border-radius: 60px;
    position: absolute;
    width: 100%;
    max-width: 900px;
    background-color: #e5efdc;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #e5efdc;
  @media screen and (min-width: 1200px) {
    margin: 0 9rem;
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 3rem;
  }
`;
const Before = () => {
  return (
    <Container>
      {/* <SideTop /> */}

      <Heading>Transformation</Heading>
      <SubHeading>Slide to reveal Before and After.</SubHeading>
      <BeforeAndAfter />
    </Container>
  );
};

export default Before;
