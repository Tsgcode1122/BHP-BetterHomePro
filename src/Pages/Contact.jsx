import React, { useEffect } from "react";
import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../Images/newIm.jpg";

import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import ColorComponent, { Colors } from "../Colors/ColorComponent";
import styled from "styled-components";
import ContactUs from "../Component/ContactUs";
import WaterDropletsBackground from "../Motion/WaterDropletsBackground";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Contact Us"
        intro="Get in Touch: We're here to assist you with any inquiries or requests. Reach out to us for personalized support and prompt responses to ensure your needs are met."
      />
      <Container>
        <WaterDropletsBackground />
        <h3>Get An Instant Quote Now!</h3>
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
              href="https://www.facebook.com/ Better Home Pros"
              target="_blank"
              rel="noopener noreferrer"
            >
              Better Home Pros
            </a>
          </ContactItem>
        </Content>
      </Container>
      <ContactUs />
    </>
  );
};

export default Contact;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 20px 200px 20px;
  background: ${Colors.light};
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${Colors.forest};
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
    transform: scale(1.1);
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;
