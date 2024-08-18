import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import heroimg from "../Images/newIm.jpg";
import Button from "../FixedComponent/Button";

import DownToUp from "../Motion/DownToUp";
import { Link } from "react-router-dom";
import Ceo from "./Ceo";

const AboutContent = () => {
  return (
    <Container>
      <Contain>
        <DownToUp>
          <p>
            At The Better Home Pros, we are a family-owned business committed to
            delivering exceptional service with a personal touch. Our certified
            technicians are trained in the latest techniques to thoroughly clean
            your air ducts, ensuring a healthier living environment. We take
            pride in our work, offering a satisfaction guarantee and a warranty
            for peace of mind. Whether the job is big or small, we tailor our
            solutions to meet your needs and exceed expectations.
          </p>
        </DownToUp>
        <StyledButton to="/appointment">Book a Service </StyledButton>

        <Image>{/* <img src={heroimg} /> */}</Image>
      </Contain>
      <Ceo />
    </Container>
  );
};

const StyledButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${Colors.darkgreen};
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${Colors.green};
  }
`;
const Image = styled.div`
  /* margin-right: 2rem; */
  margin-top: 2rem;
  border-radius: 40px 40px 0 0;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
  /* padding: 20px 20px 20px 100px; */
  img {
    border-radius: 40px 40px 0 0;
    max-width: 100%;
  }
`;
const Container = styled.div``;
const Contain = styled.div`
  text-align: center;
  p {
    line-height: 1.5;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
export default AboutContent;
