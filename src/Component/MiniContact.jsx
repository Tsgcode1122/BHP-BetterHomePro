import React from "react";
import styled from "styled-components";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import ColorComponent, { Colors } from "../Colors/ColorComponent";

import Heading from "../FixedComponent/Heading";
import WaterDropletsBackground from "../Motion/WaterDropletsBackground";
const MiniContact = () => {
  return (
    <>
      <Container>
        <WaterDropletsBackground />
        <Heading>Contact Us</Heading>
        <h3>Get An Instant Quote Now!</h3>
        <Content>
          <ContactItem>
            <PhoneOutlined />
            <a href="tel:+13072224021">321-367-3509</a>
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
      </Container>
    </>
  );
};

export default MiniContact;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 20px 200px 20px;
  background: ${Colors.darkgreen};
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${Colors.lightgreen};
    padding: 20px;
    text-align: center;
  }
`;
const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
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

  &:hover {
    background: #cbd8b9;
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;
