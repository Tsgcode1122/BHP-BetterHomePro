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
      </Contain>
      <Group>
        <Ceo />
      </Group>
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

const Container = styled.div`
  @media screen and (min-width: 800px) {
    padding: 0 2rem;
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    padding: 0 4rem;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
`;
const Group = styled.div`
  @media screen and (min-width: 1000px) {
    flex: 1;
  }
  @media screen and (min-width: 1200px) {
  }
`;
const Contain = styled.div`
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 1.5;
    padding: 1rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 600px) {
      padding: 0rem 3rem 0 3rem;
    }
    @media screen and (min-width: 800px) {
      padding: 0rem 5rem 0 5rem;
    }
    @media screen and (min-width: 1000px) {
      padding: 0rem;
    }
    @media screen and (min-width: 1200px) {
      padding: 0rem;
    }
  }
`;
export default AboutContent;
