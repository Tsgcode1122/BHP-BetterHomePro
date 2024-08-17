import React, { useState } from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import Heading from "../FixedComponent/Heading";

const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "What is included in your HVAC services?",
      answer:
        "Our HVAC services include installation, maintenance, and repair of heating, ventilation, and air conditioning systems. We ensure that your system runs efficiently and effectively.",
    },
    {
      question: "How often should air ducts be cleaned?",
      answer:
        "Air ducts should be cleaned every 3 to 5 years, depending on usage and air quality. Regular cleaning can help maintain good indoor air quality and system efficiency.",
    },
    {
      question: "What is the process for chimney repair?",
      answer:
        "Chimney repair involves inspecting for damage, cleaning the chimney, and repairing any structural issues. We address problems like cracked flues, deteriorated mortar, and other issues to ensure safe operation.",
    },
    {
      question: "How do you handle carpet cleaning?",
      answer:
        "Our carpet cleaning service uses advanced techniques and equipment to remove stains, dirt, and allergens from your carpets. We offer both deep cleaning and maintenance options to keep your carpets looking fresh.",
    },
    {
      question: "What does home improvement include?",
      answer:
        "Home improvement encompasses a variety of services such as remodeling, renovations, and upgrades to enhance the functionality and aesthetics of your home. This includes kitchen and bathroom remodels, painting, and more.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content>
          <Heading>Faqs</Heading>
          <SubHead>Frequently Asked Questions</SubHead>
          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <Question onClick={() => toggleFaq(index)}>
                {faq.question}
                <IconWrapper>
                  {selectedFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </IconWrapper>
              </Question>
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selectedFaq === index ? "auto" : 0,
                  opacity: selectedFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </Answer>
            </FaqItem>
          ))}
        </Content>
      </FaqsContainer>
    </>
  );
};

export default Faqs;

const FaqsContainer = styled.div`
  position: relative;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 2rem;
  background-position: 10% top;
  background-size: 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    border-radius: 30px;
    margin: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 40px;
    margin: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 40px;
    margin: 1.5rem;
  }
`;

const Content = styled.div`
  padding: 2rem;
  border-radius: 50px;
  background: ${Colors.lightgreen};
  @media screen and (max-width: 320px) {
    border-radius: 30px;
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 40px;
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 40px;
    padding: 1.5rem;
  }
`;

const SubHead = styled.h5`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;

const FaqItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.div`
  padding: 1rem;
  background: ${Colors.light};
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
    padding: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 1rem;
  background: ${Colors.light};
  border-radius: 4px;
  color: ${Colors.forest};
  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
