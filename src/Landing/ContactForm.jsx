import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import axios from "axios";
import styled from "styled-components";
import { Gradients } from "../Colors/ColorComponent";

const { Option } = Select;

const services = [
  "Air Duct Cleaning",
  "Chimney Service",
  "Carpet Cleaning",
  "Dryer Vent Cleaning",
  "Others",
];

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(
        "https://betterprobackend.onrender.com/api/email/formSubmission",
        values,
      );
      message.success("Thank you! Your request has been submitted.");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Header>Contact Us</Header>
        <SubText>
          Thank you for choosing The Better Home Pros to service your home or
          business. Please provide your complete details below and one of our
          team members will be in contact with you soon.
        </SubText>
        <Form
          form={form}
          name="contact_form"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="Your Email" size="large" />
          </Form.Item>

          <Form.Item
            name="number"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^\+?[0-9\s\-()]{7,15}$/,
                message: "Enter a valid phone number",
              },
            ]}
          >
            <Input placeholder="Phone Number" size="large" />
          </Form.Item>

          <Form.Item
            name="zip"
            rules={[{ required: true, message: "Please enter your zip code" }]}
          >
            <Input placeholder="Zip Code" size="large" />
          </Form.Item>

          <Form.Item
            name="service"
            rules={[{ required: true, message: "Please select a service" }]}
          >
            <Select placeholder="Select a Service" size="large">
              {services.map((service, index) => (
                <Option key={index} value={service}>
                  {service}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="coupon"
            rules={[
              { required: true, message: "Please enter your coupon code" },
            ]}
          >
            <Input placeholder="Coupon Code" size="large" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              { required: true, message: "Please provide additional info" },
            ]}
          >
            <Input.TextArea
              placeholder="Additional Information"
              rows={4}
              size="large"
            />
          </Form.Item>

          <ButtonS type="primary" htmlType="submit" loading={loading}>
            Submit
          </ButtonS>
        </Form>
      </FormContainer>
    </Wrapper>
  );
};

export default ContactForm;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background: #f5f5f5;
  @media screen and (min-width: 800px) {
    min-height: 90vh;
  }
`;

const FormContainer = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  width: 100%;
  max-width: 500px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #333;
`;

const SubText = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #777;
`;

const ButtonS = styled(Button)`
  width: 100%;
  background: ${Gradients.lightToDark};
  border: none;
  height: 45px;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    background-color: #5cb85c !important;
  }
`;
