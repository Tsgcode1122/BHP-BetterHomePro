import React, { useEffect } from "react";

import backgroundImage from "../Images/about.jpg";
import PrivacyPolicy from "../Component/PrivacyPolicy";
import styled from "styled-components";
import { Colors } from "../Colors/ColorComponent";

const PolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Privacy Policies "
        intro="Effective Date: July 3, 2025"
      />
      <PrivacyPolicy />
    </>
  );
};

const PageHeading = ({ backgroundImage, text, intro }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Heading>{text}</Heading>
      <SubText>{intro}</SubText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: 50% center;
  background-size: cover;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
`;

const Heading = styled.h1`
  font-size: 1.2rem;
  color: white;
  z-index: 3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.59);
  text-align: center;
  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.2rem;
  }
`;
const SubText = styled.div`
  color: ${Colors.green};
  padding: 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.59);
  font-size: 16px;
  text-align: center;
  z-index: 3;
  font-weight: bold;
  @media screen and (min-width: 800px) {
    padding: 0 4rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 12rem;
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 16rem;
    font-size: 20px;
  }
`;
export default PolicyPage;
