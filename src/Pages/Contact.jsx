import React, { useState, useEffect } from "react";

import { Form, Input, Select, Button, notification, message } from "antd";
import axios from "axios";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
// import Button from "../FixedComponent/Button";
import faq from "../Images/contactus.png";
const { Option } = Select;

const services = [
  "Select Service",
  "HVAC Services",
  "Air Duct Cleaning",
  "Chimney Repair",
  "Carpet Cleaning",
  "Dryer Vent Cleaning",
  "Others",
];

import PageHeading from "../FixedComponent/PageHeading";
import backgroundImage from "../Images/newIm.jpg";

import Heading from "../FixedComponent/Heading";
const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("hy");
    setLoading(true);
    try {
      // Send form data to backend
      await axios.post(
        "https://betterprobackend.onrender.com/api/email/formSubmission",
        values,
      );

      // Show success notification
      message.success({
        content: "Your message has been sent successfully.",
        style: {
          textAlign: "center",
          marginTop: "20px",
        },
      });

      // Reset form fields
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Error",
        description: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
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
        <Cont>
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
          <Image>
            <img src={faq} />
          </Image>
        </Cont>
        <FormContainer>
          <Form
            form={form}
            name="contact_us"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              service: services[0],
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="zip"
              label="Zip Code"
              rules={[
                { required: true, message: "Please enter your zip code" },
              ]}
            >
              <Input placeholder="Enter your Zip code" />
            </Form.Item>

            <Form.Item
              name="service"
              label="Select Service"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select placeholder="Select a service">
                {services.map((service, index) => (
                  <Option key={index} value={service}>
                    {service}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="message"
              label="Additional Information"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Enter your additional information"
                rows={4}
              />
            </Form.Item>

            <Form.Item noStyle>
              <ButtonS type="primary" htmlType="submit" loading={loading}>
                Submit
              </ButtonS>
            </Form.Item>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Contact;
const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px 20px 100px 20px;
  background: ${Colors.light};
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${Colors.forest};
    padding: 20px;
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    display: grid;
    gap: 20px;
    margin: 1rem 2rem 5rem 2rem;
    grid-template-columns: 40% 60%;
  }
  @media screen and (min-width: 1000px) {
    margin: 1rem 5% 2rem 5rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 45% 55%;
    margin: 1rem 11rem 2rem 11rem;
    gap: 30px;
  }
`;

const Image = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    display: block;
  }
  img {
    max-width: 100%;
  }
`;
const Cont = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: left;
  flex-wrap: wrap;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

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

const FormContainer = styled.div`
  position: relative;
  border-radius: 10px;
  margin-top: 20px;
  background: ${Colors.lightgreen};
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 20px;
  @media screen and (min-width: 800px) {
    margin-top: 0px;
  }
`;
const ButtonS = styled(Button)`
  text-decoration: none;
  font-weight: bold;
  /* padding: 10px 20px !important; */
  display: block;
  text-align: center;
  width: 100%;
  background: ${Gradients.lightToDark};
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${Colors.green} !important;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
