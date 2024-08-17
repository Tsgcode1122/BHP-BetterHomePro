import React from "react";
import Heading from "../FixedComponent/Heading";
import ServicesContent from "./ServicesContent";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";

const Services = () => {
  return (
    <Container>
      <Heading>Services</Heading>
      <ServicesContent />
    </Container>
  );
};
const Container = styled.div`
  border-radius: 20px 20px 0 0;
  margin: 1rem;
`;
export default Services;
