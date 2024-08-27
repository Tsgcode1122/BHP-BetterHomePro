import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Images/Logoo.png";
import { Form, Input, Button as AntdButton } from "antd";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import axios from "axios";
import { Link } from "react-router-dom";
const Footer = () => {
  const [form] = Form.useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Send email to backend
      await axios.post(
        "https://betterprobackend.onrender.com/api/email/subscriber",
        values,
      );
      // Reset form fields
      form.resetFields();
      // Set success message
      setSuccessMessage("Thank you for subscribing to our newsletter!");
    } catch (error) {
      console.error("Error subscribing email:", error);
      setSuccessMessage("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FooterContainer>
      <Content>
        <Dov>
          <LogoContainer>
            <img src={logo} alt="Company Logo" />
          </LogoContainer>

          <OpenHours>
            <span>Open Hours:</span> Sunday-Friday
          </OpenHours>
        </Dov>
        <Dov>
          <QuickLink>
            <p>Quick Links:</p>
            <LinkBig>
              <LinkC to="/">
                <span>Home {""} ||</span>
              </LinkC>
              <LinkC to="/about">
                <span>About Us {""} ||</span>
              </LinkC>
              <LinkC to="/services">
                <span>Services {""} || </span>
              </LinkC>
              <LinkC to="/contact">
                <span>Contact Us {""} ||</span>
              </LinkC>
              <LinkC to="/appointment">
                <span>Book a Service {""} ||</span>
              </LinkC>
              <LinkC to="/gallery">
                <span>Gallery {""} ||</span>
              </LinkC>
            </LinkBig>
          </QuickLink>
          <SocialMedia>
            <SocialIcon href="https://www.facebook.com/BetterHomePros">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/BetterHome_pros">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="mailto:contact@thebetterhomepros.com">
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon href="tel:+13213673509">
              <FaPhone />
            </SocialIcon>
          </SocialMedia>
        </Dov>
      </Content>
      <CopyRight>© 2024. All rights reserved.</CopyRight>
    </FooterContainer>
  );
};

export default Footer;

const QuickLink = styled.div`
  p {
    font-weight: bold;
  }
`;
const LinkBig = styled.div`
  background-color: #e5efdc;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  align-items: center;
  padding: 0 2rem 0rem 2rem;

  justify-content: center;
`;
const LinkC = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  padding-right: 30px;
  padding-bottom: 10px;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    padding-right: 20px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding-right: 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding-right: 20px;
  }
`;
const ButtonS = styled(AntdButton)`
  background: ${Colors.green};
  color: white;
  border: none;
  margin-left: -30px;
  border-radius: 0 5px 5px 0;
  padding: 4px 15px;
  cursor: pointer;
  &:hover {
    background: ${Colors.darkgreen} !important;
  }
`;

const Dov = styled.div`
  @media screen and (min-width: 1000px) {
    flex: 1;
  }
`;
const SuccessMessage = styled.div`
  margin-top: 10px;
  color: ${Colors.green};
  font-weight: bold;
`;

const FooterContainer = styled.footer`
  background: ${Colors.lightgreen};
  color: ${Colors.forest};
  border-radius: 20px;
  margin-top: 4rem;
  text-align: center;
  @media screen and (max-width: 320px) {
    padding: 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 1rem 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 320px) {
    gap: 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    gap: 0.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    gap: 0.5rem;
  }
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  margin-top: -3rem;

  img {
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    max-width: 150px;
    @media screen and (min-width: 1000px) {
      max-width: 250px;
    }
  }
`;

const OpenHours = styled.div`
  font-size: 1rem;
  padding-top: 10px;
  font-weight: 500;
  span {
    font-weight: bold;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 20px;
`;

const SocialIcon = styled.a`
  color: black;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: ${Colors.green};
  }
`;

const CopyRight = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem;
`;
