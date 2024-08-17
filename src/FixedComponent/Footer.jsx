import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/Images/Logoo.png";
import { Form, Input, Button as AntdButton } from "antd";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import axios from "axios";

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
        <LogoContainer>
          <img src={logo} alt="Company Logo" />
        </LogoContainer>

        <OpenHours>
          <span>Open Hours:</span> Mon- Sat: 8 am - 8 pm | Sunday: Closed
        </OpenHours>

        <NewsletterSection>
          <NewsletterTitle>Newsletter:</NewsletterTitle>
          <p>
            Subscribe to our newsletter to get 10% off your first purchase and
            stay updated with our latest news.
          </p>
          <FormContainer
            name="newsletter"
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              style={{ width: "80%" }}
            >
              <Input
                placeholder="Enter your email Address"
                style={{ border: "none" }}
              />
            </Form.Item>
            <Form.Item>
              <ButtonS type="primary" htmlType="submit" loading={loading}>
                Submit
              </ButtonS>
            </Form.Item>
          </FormContainer>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        </NewsletterSection>

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
          <SocialIcon href="tel:+13072224021">
            <FaPhone />
          </SocialIcon>
        </SocialMedia>

        <CopyRight>© 2024. All rights reserved.</CopyRight>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const LogoContainer = styled.div`
  margin-top: -3rem;

  img {
    box-shadow:
      rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    max-width: 150px;
  }
`;

const OpenHours = styled.div`
  font-size: 1rem;
  font-weight: 500;
  span {
    font-weight: bold;
  }
`;

const NewsletterSection = styled.div`
  width: 100%;
  max-width: 400px;

  p {
    margin: 0.5rem 0 1rem;
    font-size: 0.9rem;
  }
`;

const NewsletterTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
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
