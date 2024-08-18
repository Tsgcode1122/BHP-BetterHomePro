import React from "react";
import Heading from "../FixedComponent/Heading";
import AboutContent from "./AboutContent";
import styled from "styled-components";
const Container = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const About = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <AboutContent />
    </Container>
  );
};

export default About;
