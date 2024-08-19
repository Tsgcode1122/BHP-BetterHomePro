import React from "react";
import styled from "styled-components";
import {
  CheckCircleOutlined,
  CustomerServiceOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Colors } from "../Colors/ColorComponent";
import DownToUp from "../Motion/DownToUp";

const Vision = () => {
  return (
    <Container>
      <Section>
        <IconContainer>
          <CheckCircleOutlined />
        </IconContainer>
        <Title>Expert Technicians</Title>
        <DownToUp>
          <Description>
            We are dedicated to delivering top-notch services with a focus on
            precision and quality. Our team employs the latest technology and
            methods to ensure that every job meets our high standards.
          </Description>
        </DownToUp>
      </Section>

      <Section>
        <IconContainer>
          <TeamOutlined />
        </IconContainer>
        <Title>Dedicated Professionals</Title>
        <DownToUp>
          <Description>
            Our team consists of highly trained professionals who are passionate
            about their work. We prioritize your satisfaction and work
            diligently to exceed your expectations with every service provided.
          </Description>
        </DownToUp>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  background-color: #f5f5f5;
  @media screen and (max-width: 320px) {
    padding: 0.5rem;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;

  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: 320px) {
    max-width: 400px;
  }
  @media screen and (min-width: 800px) {
    flex: 1 1 (50% - 2rem);
    max-width: 300px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 350px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 400px;
  }
`;

const IconContainer = styled.div`
  font-size: 2rem;
  color: ${Colors.green};
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 10px;
  color: ${Colors.forest};

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
  text-align: center;
  line-height: 1.5;
`;

export default Vision;
