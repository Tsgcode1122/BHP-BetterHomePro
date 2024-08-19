import React, { useState } from "react";

import { Form, Input, Select, Button, notification, message } from "antd";
import axios from "axios";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
// import Button from "../FixedComponent/Button";

const { Option } = Select;

const services = [
  "Select Service",
  "HVAC Services",
  "Air Duct Cleaning",
  "Chimney Repair",
  "Carpet Cleaning",
  "Home Improvemssent",
  "Others",
];

const ContactUs = () => {
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

  return (
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
          label="Message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea placeholder="Enter your message" rows={4} />
        </Form.Item>

        <Form.Item noStyle>
          <ButtonS type="primary" htmlType="submit" loading={loading}>
            Submit
          </ButtonS>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

export default ContactUs;

const FormContainer = styled.div`
  position: relative;
  border-radius: 10px;
  margin: -10rem 2rem 2rem 2rem;
  background: ${Colors.lightgreen};
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 20px;
  @media screen and (max-width: 320px) {
    margin: -10rem 1rem 1rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: -10rem 1rem 1rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: -10rem 1rem 1rem 1rem;
  }
  @media screen and (min-width: 800px) {
    margin: -10rem 8rem 1rem 8rem;
  }
  @media screen and (min-width: 1000px) {
    margin: -10rem 16rem 1rem 16rem;
  }
  @media screen and (min-width: 1200px) {
    margin: -10rem 24rem 1rem 24rem;
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
