import React from "react";
import styled from "styled-components";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import SideBox from "../FixedComponent/SideBox";
import ColorComponent, { Colors } from "../Colors/ColorComponent";
import ContactUs from "./ContactUs";
import MiniContact from "./MiniContact";

const ContactContent = () => {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=1418+Manoa+Rd,+Wynnewood,+PA+19096";
  return (
    <ContactContainer>
      <MiniContact />
    </ContactContainer>
  );
};

export default ContactContent;

const ContactItem = styled.div`
  display: flex;
  background: ${Colors.lightgreen};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 5px;

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
const ContactContainer = styled.div`
  position: relative;
`;
const SubHead = styled.h5`
  font-size: 1.2rem;
  color: #070b0d;
  margin: 0;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const Contents = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
