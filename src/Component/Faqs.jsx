import React, { useState } from "react";
import styled from "styled-components";
import { color, motion } from "framer-motion";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Colors } from "../Colors/ColorComponent";
import Heading from "../FixedComponent/Heading";
import faq from "../Images/faqs.png";
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
        "Our HVAC services include  maintenance and repair of heating, ventilation, and air conditioning systems. We ensure that your system runs efficiently and effectively.",
    },
    {
      question: "How often should air ducts and dryer vents be cleaned?",
      answer:
        "Air ducts and dryer vents should be cleaned every 1-2 years, depending on usage and other debris, such as animal hair, etc. that can affect the air quality and performance of your system.",
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
      question:
        " How do I know if my air ducts or dryer vent needs to be cleaned? ",
      answer:
        "If it takes more than 1 cycle to dry your clothes, this means your dryer vent is clogged and needs to be cleaned immediately. If your house has a lot of dust or you are experiencing allergies, excessive sneezing or coughing, your air ducts have been compromised and require immediate attention. Dirty air ducts can lead to mold and bacteria inside of your system, causing severe health issues.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content>
          <Heading>Faqs</Heading>
          <SubHead>Frequently Asked Questions</SubHead>

          <Split>
            <Image>
              <img src={faq} />
            </Image>
            <div>
              {faqs.map((faq, index) => (
                <FaqItem key={index}>
                  <Question onClick={() => toggleFaq(index)}>
                    {faq.question}
                    <IconWrapper>
                      {selectedFaq === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
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
            </div>
          </Split>
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
  @media screen and (min-width: 800px) {
    margin: 2rem 4rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 2rem 6rem;
  }
  @media screen and (min-width: 1200px) {
    margin: 2rem 9rem;
  }
  @media screen and (min-width: 1480px) {
    margin: 2rem 18rem;
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

const Split = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
  }
`;
const Image = styled.div`
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
  img {
    max-width: 100%;
  }
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
