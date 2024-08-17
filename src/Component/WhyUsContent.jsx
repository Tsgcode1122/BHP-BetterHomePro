import React from "react";
import styled from "styled-components";
import { FaMedal, FaThumbsUp, FaSmile, FaTools } from "react-icons/fa";
import videoBg from "../assets/Images/carpet.jpg";
import { Colors, Gradients } from "../Colors/ColorComponent";
import Heading from "../FixedComponent/Heading";
import Button from "../FixedComponent/Button";
import DownToUp from "../Motion/DownToUp";

const reasons = [
  {
    icon: <FaMedal />,
    title: "Expertise",
    content:
      "Our team consists of highly trained professionals with years of experience in the industry.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Quality Service",
    content:
      "We are committed to delivering top-notch services that exceed your expectations.",
  },
  {
    icon: <FaSmile />,
    title: "Customer Satisfaction",
    content:
      "Your satisfaction is our top priority, and we strive to ensure every client is happy.",
  },
  {
    icon: <FaTools />,
    title: "Advanced Tools",
    content:
      "We use the latest tools and techniques to provide efficient and effective services.",
  },
];

const WhyUsContent = () => {
  return (
    <>
      <WhyUsContainer>
        <VideoBackground>
          <img src={videoBg} autoPlay loop muted playsInline />
        </VideoBackground>

        <Heading>Why Us</Heading>

        <ContentWrapper>
          {reasons.map((reason, index) => (
            <ReasonCard key={index} isLast={index === reasons.length - 1}>
              <Join>
                {/* <IconWrapper>{reason.icon}</IconWrapper> */}
                <ReasonTitle>{reason.title}</ReasonTitle>
              </Join>
              <DownToUp>
                <ReasonContent>{reason.content}</ReasonContent>
              </DownToUp>
            </ReasonCard>
          ))}
        </ContentWrapper>
        {/* <ViewMore>View More</ViewMore> */}
      </WhyUsContainer>
    </>
  );
};

export default WhyUsContent;

const WhyUsContainer = styled.div`
  position: relative;
  color: ${Colors.forest};
  border-radius: 20px;
  padding: 10px 10px 30px 10px;
  margin: 50px 20px;
  text-align: center;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  img {
    width: 100%;
    height: 100%;
    /* filter: blur(4px); */
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  position: relative;
`;
const Join = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ReasonCard = styled.div`
  background: ${(props) =>
    props.isLast ? "#223A00" : "rgba(255, 255, 255, 0.5)"};
  color: ${(props) => (props.isLast ? "white" : "inherit")};
  border-radius: 20px;
  padding: 0 20px 20px 20px;
  max-width: 350px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  svg {
    padding: 0;
    margin: 0 !important;
  }
`;

const ReasonTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 4px;
`;

const ReasonContent = styled.p`
  font-size: 1rem;
  margin: 0;
`;
const ViewMore = styled.a`
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  display: flex;
  z-index: 999 !important;
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
    background-color: ${Colors.green};
  }
  &:hover {
    text-decoration: underline;
  }
`;
