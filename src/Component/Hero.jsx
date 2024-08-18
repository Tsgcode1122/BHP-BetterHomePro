import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import heroimg from "../Images/heroImage.png";
import heroB from "../Images/cl.png";
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
  @media screen and (min-width: 600px) {
    padding: 3rem 3rem 0 3rem;
  }
  @media screen and (min-width: 800px) {
    padding: 3rem 5rem 0 5rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 3rem 5rem 2rem 5rem;
    flex: 1;
  }
  @media screen and (min-width: 1200px) {
    padding: 3rem 8rem 3rem 8rem;
    max-width: 1200px;
  }
`;
const HeroContent = styled.div`
  position: relative;
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  @media screen and (min-width: 600px) {
    font-size: 36px;
  }
  @media screen and (min-width: 800px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 52px;
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
  @media screen and (min-width: 600px) {
    font-size: 19px;
  }
  @media screen and (min-width: 800px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    padding: 0 4rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    padding: 0 8rem;
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
  @media screen and (max-width: 320px) {
    padding: 0 0.5rem 0rem 0.5rem;
  }

  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 1rem 0rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 1rem 0rem 1rem;
  }
  @media screen and (min-width: 600px) {
    padding: 0 2rem 0rem 2rem;
  }
  @media screen and (min-width: 800px) {
    padding: 0 4rem 0rem 4rem;
  }

  padding: 0 2rem 0rem 2rem;

  img {
    border-radius: 20px 20px 20px 20px;
    max-width: 100%;
    margin-top: -5rem;

    @media screen and (min-width: 1000px) {
      border-radius: 0;
      object-fit: cover;
      /* margin-top: 5rem; */
      width: 100%;
      height: 100%;
      display: block;
      margin-left: -5rem;
    }
  }
`;
const HeroBig = styled.div`
  img {
    max-width: 100%;
  }
  display: none;
  @media screen and (min-width: 1000px) {
    margin-top: -4rem;
    flex: 1;
    display: block;
    padding: 0 4rem 0rem 4rem;
  }
  @media screen and (min-width: 1200px) {
    margin-top: -6rem;
    max-width: 1200px;
    padding: 0 4rem 0rem 4rem;
  }
`;
const Seperate = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;

    /* height: 400px; */
  }
  border-radius: 30px 30px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.7) 0px 1px 3px,
    rgba(0, 0, 0, 0.5) 0px 0px 0px;
  margin-top: 5rem;
`;
const Cta = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 1000px) {
    padding: 0 8rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 10rem;
    max-width: 1200px;
  }
`;
const Show = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const Hide = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
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
          <Show>
            {" "}
            <HeroMoving />{" "}
          </Show>
        </Seperate>
        <HeroBig>
          <img src={heroB} />
        </HeroBig>
      </HeroContent>
    </HeroBg>
    <Hide>
      <HeroMoving />
    </Hide>
  </HeroContainer>
);

export default Hero;
