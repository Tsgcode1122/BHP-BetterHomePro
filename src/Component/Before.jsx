import React from "react";
import Heading from "../FixedComponent/Heading";
import BeforeAndAfter from "./BeforeAndAfter";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Before = () => {
  return (
    <Container>
      <Heading>Transformation</Heading>
      <SubHeading>Slide to reveal the transformation.</SubHeading>
      <BeforeAndAfter />
    </Container>
  );
};

export default Before;
