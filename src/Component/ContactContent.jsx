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
import ContactUs from "./ContactUs";
import MiniContact from "./MiniContact";

const ContactContent = () => {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=1418+Manoa+Rd,+Wynnewood,+PA+19096";
  return (
    <ContactContainer>
      <MiniContact />
      <ContactUs />
    </ContactContainer>
  );
};

export default ContactContent;

const ContactContainer = styled.div``;
const SubHead = styled.h5`
  font-size: 1.2rem;
  color: #070b0d;
  margin: 0;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const Content = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    -1deg,
    #0b090a 0%,
    #f0e8d7 10%,
    #f4ebd0 20%,
    #f4ebd0 50%,
    #f0e8d7 70%,
    #f4ebd0 90%,
    #0b090a 100%
  );
  padding: 10px 15px;
  border-radius: 10px;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${Colors.coolBlack};

  &:hover {
    background: #f7d782;
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;
