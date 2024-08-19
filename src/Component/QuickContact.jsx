import React from "react";
import styled from "styled-components";
import imgb from "../Images/t7.jpg";
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
    @media screen and (max-width: 320px) {
      padding: 0rem;
    }

    @media screen and (min-width: 600px) {
      padding: 10px 2rem;
    }

    @media screen and (min-width: 800px) {
      padding: 10px 6rem;
    }
    @media screen and (min-width: 1000px) {
      padding: 10px 8rem;
      max-width: 800px;
      z-index: 4;
    }
    @media screen and (min-width: 1200px) {
      padding: 10px 10rem;
    }
  `;

  const Content = styled.div`
    position: relative;
    img {
      max-width: 100%;
      border-radius: 20px;
      @media screen and (max-width: 320px) {
        border-radius: 0px;
      }
      @media screen and (min-width: 1000px) {
        height: fit-content;
        border-radius: 40px;
      }
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

    @media screen and (max-width: 320px) {
      right: 0.4rem;
    }
    backdrop-filter: blur(3px);
    p {
      color: white;
      font-weight: 800;
    }
    @media screen and (max-width: 320px) {
      padding: 0.3rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      padding: 0.3rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      padding: 0.5rem;
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
