import React from "react";
import styled from "styled-components";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import ColorComponent, { Colors, Gradients } from "../Colors/ColorComponent";

import Heading from "../FixedComponent/Heading";
import WaterDropletsBackground from "../Motion/WaterDropletsBackground";
import ContactUs from "./ContactUs";
const MiniContact = () => {
  return (
    <>
      <Container>
        <Heading>Contact Us</Heading>
        <h3>Get An Instant Quote Now!</h3>
      </Container>
      <ContactUs />
    </>
  );
};

export default MiniContact;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 20px 400px 20px;
  background: ${Colors.darkgreen};
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${Colors.lightgreen};
    padding: 20px;
    text-align: center;
  }
`;
