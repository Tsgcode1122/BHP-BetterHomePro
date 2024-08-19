import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import heroimg from "../Images/newIm.jpg";
import Button from "../FixedComponent/Button";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

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
        <>
          <Content>
            <ContactItem>
              <PhoneOutlined />
              <a href="tel:+13072224021">307-222-4021</a>
            </ContactItem>
            <ContactItem>
              <InstagramOutlined />
              <a
                href="https://www.instagram.com/BetterHome_pros"
                target="_blank"
                rel="noopener noreferrer"
              >
                BetterHome_pros
              </a>
            </ContactItem>
            <ContactItem>
              <MailOutlined />
              <a href="mailto:contact@thebetterhomepros.com">
                contact@thebetterhomepros.com
              </a>
            </ContactItem>
            <ContactItem>
              <FacebookOutlined />
              <a
                href="https://www.facebook.com/share/YpFgnHscrGzgyn9H/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                Better Home Pros
              </a>
            </ContactItem>
          </Content>
        </>
      </Contain>
      <Group>
        <Ceo />
      </Group>
    </Container>
  );
};
const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding: 10px;
  background: #cbd8b9;
  margin: 0 2rem;
  @media screen and (max-width: 320px) {
    margin: 0 1rem;
  }
  @media screen and (min-width: 600px) {
    margin: 0 4rem;
  }
  @media screen and (min-width: 800px) {
    gap: 5px;
    margin: 0 6rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 1rem;
    gap: 10px;
  }
`;
const ContactItem = styled.div`
  display: flex;
  background: ${Colors.lightgreen};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 20px;

  font-size: 1rem;
  color: ${Colors.coolBlack};
  @media screen and (max-width: 320px) {
    gap: 5px;
  }
  @media screen and (min-width: 800px) {
    gap: 2px;
  }
  &:hover {
    background: #cbd8b9;
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;
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
