import React from "react";
import styled from "styled-components";
import imgb from "../assets/Images/t7.jpg";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Colors } from "../Colors/ColorComponent";

const QuickContact = () => {
  const Container = styled.div`
    padding: 1.5rem;
    position: relative;
    max-width: 600px;
    margin: auto;
  `;

  const Content = styled.div`
    position: relative;
    img {
      max-width: 100%;
      border-radius: 20px;
    }
  `;

  const Contact = styled.div`
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 10px;
    backdrop-filter: blur(3px);
    p {
      color: white;
      font-weight: 800;
    }
  `;

  const ContactItem = styled.div`
    display: flex;
    background: ${Colors.lightgreen};
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    gap: 20px;
    font-size: 1rem;
    color: ${Colors.coolBlack};
    margin-bottom: 10px;

    &:hover {
      border: 2px solid green;
    }

    a {
      color: ${Colors.coolBlack};
      text-decoration: none;
    }
  `;

  return (
    <>
      <Container>
        <Content>
          <img src={imgb} alt="Background" />
        </Content>
        <Contact>
          <p>Get a Free Quote Now !!!</p>
          <ContactItem>
            <PhoneOutlined />
            <a href="tel:+13072224021">307-222-4021</a>
          </ContactItem>
          {/* Add other contact items as needed */}
        </Contact>
      </Container>
    </>
  );
};

export default QuickContact;
