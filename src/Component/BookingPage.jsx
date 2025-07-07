import React, { useState } from "react";
import { Form, Input, DatePicker, Button, message, TimePicker } from "antd";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftOutlined, RightOutlined } from "@ant-design/icons";
import axios from "axios";

const services = [
  "Air Duct Maintenance & Cleaning",
  "Dryer vent Maintenance & Cleaning",
  "Chimney sweep & inspection",
  "Carpet Cleaning",
];

const Main = styled.div`
  background-color: white;
`;
const BookingContainer = styled.div`
  max-width: 800px;
  background-color: white;

  margin: 50px auto;
  padding: 20px;
  overflow: hidden;
  height: 80vh;
`;

const ServicesContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 40px;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const ServiceCard = styled.div`
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: #4f7716;
  }
`;

const PageWrapper = styled.div`
  position: relative;
  background-color: #fcfcfc;
  /* min-height: 400px; */
  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
`;

const pageVariants = {
  initial: { opacity: 0.9 },
  in: { opacity: 1 },
  out: { opacity: 0.9 },
};

const transition = { duration: 0.3, ease: "easeInOut" }; // Faster animation

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedService("");
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(
        "https://betterprobackend.onrender.com/api/email/createBooking",
        {
          ...values,
          service: selectedService,
        },
      );
      message.success("Booking confirmed! Check your email.");
      setSelectedService("");
      setStep(1);
    } catch (err) {
      message.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main>
      <BookingContainer>
        <PageWrapper>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="services"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={transition}
              >
                <h2>Select a Service</h2>
                <ServicesContainer>
                  {services.map((service, index) => (
                    <ServiceCard
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                    >
                      {service}

                      <RightOutlined />
                    </ServiceCard>
                  ))}
                </ServicesContainer>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="booking"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={transition}
              >
                <Button
                  type="link"
                  icon={<ArrowLeftOutlined />}
                  onClick={handleBack}
                  style={{
                    marginBottom: "20px",
                    marginLeft: "-15px",
                    color: "black",
                  }}
                >
                  Back
                </Button>
                <h3>Book: {selectedService}</h3>
                <Form layout="vertical" onFinish={onFinish}>
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input placeholder="Full Name" />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
                    name="date"
                    rules={[
                      { required: true, message: "Please select a date" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item
                    name="time"
                    rules={[
                      { required: true, message: "Please select a time" },
                    ]}
                  >
                    <TimePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item name="comment">
                    <Input.TextArea placeholder="Additional Comments (Optional)" />
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                    style={{
                      backgroundColor: "green",
                      borderColor: "green",
                      marginBottom: "20px",
                    }}
                  >
                    Confirm Booking
                  </Button>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </PageWrapper>
      </BookingContainer>
    </Main>
  );
};

export default BookingPage;
