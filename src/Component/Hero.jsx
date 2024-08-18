import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import heroimg from "../Images/heroImage.png";
import herobg from "../Images/t14.png";
import HeroMoving from "./HeroMoving";
import WaterBubblesBackground from "../FixedComponent/WaterBubblesBackground";
import ZoomInComponent from "../Motion/ZoomInComponent";
import { Link } from "react-router-dom";
import WaterDropletsBackground from "../Motion/WaterDropletsBackground";

const HeroContainer = styled.section`
  justify-content: center;
  align-items: left;
  position: relative;
  background: ${Gradients.greenToDarkGreen} !important;
  padding: 0 !important;
  background-size: cover;
  background-position: center;
  color: ${Colors.forest};
  text-align: center;
`;
const HeroBg = styled.div`
  justify-content: center;
  padding: 0 !important;
  align-items: left;
  position: relative;
  /* background: url(${herobg}) !important; */
  background-size: cover;
  background-position: center;
  color: ${Colors.forest};
  text-align: center;
`;
const Content = styled.div`
  padding: 2rem 2rem 0 2rem;
  flex-direction: column;
  @media screen and (max-width: 320px) {
    padding: 1rem 2rem 0 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem 1rem 0 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem 1rem 0 1rem;
  }
`;
const HeroContent = styled.div`
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 28px;
  padding: 0;
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 32px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.div`
  transform: rotate(-10deg);
  font-size: 18px;

  border-radius: 5px;
  color: ${Colors.darkgreen};
  border: 1px solid ${Colors.darkgreen};
  display: inline-block;
  padding: 0.5rem;
  p {
    margin: 0;
  }
`;
const HeroWriteup = styled.p`
  font-size: 18px;

  margin-bottom: 20px;
  line-height: 1.3;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 16px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 16px;
  }
`;
const HeroButton = styled(Link)`
  padding: 10px 20px;
  background: ${Gradients.lightToDark};
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${Colors.green};
  }
`;
const HeroButton2 = styled(Link)`
  padding: 10px 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: ${Colors.lightgreen};
  color: ${Colors.forest};
  text-decoration: none;
  font-size: 18px;
  border-radius: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${Colors.green};
  }
`;
const Image = styled.div`
  /* margin-left: 2rem; */
  @media screen and (max-width: 320px) {
    padding: 0 0.5rem 0rem 0.5rem;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 1rem 0rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 1rem 0rem 1rem;
  }
  /* border-radius: 20px 0 0 20px; */
  padding: 0 2rem 0rem 2rem;
  /* padding: 20px 20px 20px 100px; */
  img {
    border-radius: 20px 0 0 20px;
    max-width: 100%;
    margin-top: -5rem;
  }
`;
const Seperate = styled.div`
  border-radius: 30px 30px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.7) 0px 1px 3px,
    rgba(0, 0, 0, 0.5) 0px 0px 0px;
  margin-top: 6rem;
`;
const Cta = styled.div`
  display: flex;
  flex-direction: column;
`;
const Hero = () => (
  <HeroContainer>
    <HeroBg>
      <WaterBubblesBackground />
      <WaterDropletsBackground />
      <HeroContent>
        <Content>
          <ZoomInComponent>
            <HeroTitle>
              Top-notch cleaning services for a spotless home
            </HeroTitle>
          </ZoomInComponent>
          <HeroWriteup>
            From HVAC and air duct cleaning to chimney repair, carpet cleaning,
            and home improvement, we ensure your home is in perfect condition.
          </HeroWriteup>
          <Cta>
            <HeroButton to="/contact">Get a Free Quote</HeroButton>
            <HeroButton2 to="/appointment">Book a Service</HeroButton2>
          </Cta>
        </Content>
        <Seperate>
          <Image>
            <img src={heroimg} />
          </Image>
          <HeroMoving />
        </Seperate>
      </HeroContent>
    </HeroBg>
  </HeroContainer>
);

export default Hero;
