import React, { useState } from "react";
import styled from "styled-components";
import { Skeleton } from "antd";
import heroimg2 from "../Images/t5.jpg";
import heroimg from "../Images/t2.jpg";
import heroimg3 from "../Images/t4.jpg";
import heroimg4 from "../Images/t8.jpg";
import heroimg5 from "../Images/t6.jpg";
import { Colors, Gradients } from "../Colors/ColorComponent";
import { Link } from "react-router-dom";
import DownToUp from "../Motion/DownToUp";

const services = [
  {
    id: 1,
    imgUrl: heroimg3,
    heading: "Chimney Repair",
    subheading: "Safe & Effective Chimney Solutions",
    content:
      "We offer comprehensive chimney repair services, ensuring your chimney is safe, functional, and up to code, protecting your home from potential hazards.",
    viewMoreUrl: "/services/chimney-repair",
  },
  {
    id: 2,
    imgUrl: heroimg,
    heading: "HVAC Services",
    subheading: "Efficient and Reliable Heating & Cooling",
    content:
      "Keep your home comfortable year-round with our professional HVAC services. From installation to maintenance, we ensure your systems run smoothly and efficiently.",
    viewMoreUrl: "/services/hvac",
  },
  {
    id: 3,
    imgUrl: heroimg2,
    heading: "Air Duct Cleaning",
    subheading: "Breathe Cleaner, Healthier Air",
    content:
      "Our thorough air duct cleaning services remove dust, allergens, and contaminants from your home's ventilation system, improving indoor air quality.",
    viewMoreUrl: "/services/air-duct-cleaning",
  },

  {
    id: 4,
    imgUrl: heroimg4,
    heading: "Carpet Cleaning",
    subheading: "Restore Your Carpets to Like-New Condition",
    content:
      "Our deep cleaning methods remove dirt, stains, and odors from your carpets, leaving them fresh, clean, and revitalized, enhancing your home's appearance.",
    viewMoreUrl: "/services/carpet-cleaning",
  },
  {
    id: 5,
    imgUrl: heroimg5,
    heading: "Home Improvement",
    subheading: "Transform Your Home with Expert Renovations",
    content:
      "From minor upgrades to major renovations, our home improvement services enhance the beauty, functionality, and value of your home.",
    viewMoreUrl: "/services/home-improvement",
  },
];

const ServicesContent = () => {
  return (
    <ServicesContainer>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <DownToUp>
            <ImageWrapper>
              <ServiceImage imgUrl={service.imgUrl} />
            </ImageWrapper>
            <ContentWrapper>
              <Heading>{service.heading}</Heading>
              <Subheading>{service.subheading}</Subheading>
              <Content>{service.content}</Content>
              <ViewMore to={`/services/${service.id}`}>View More</ViewMore>
            </ContentWrapper>
          </DownToUp>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

// Component to handle image loading with skeleton
const ServiceImage = ({ imgUrl }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Skeleton.Image active />}
      <img
        src={imgUrl}
        alt="Service"
        style={{ display: loading ? "none" : "block" }}
        onLoad={handleImageLoad}
      />
    </>
  );
};

export default ServicesContent;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
  padding: 10px;
  @media screen and (max-width: 320px) {
    padding: 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 9px;
    gap: 40px;
    margin-top: 30px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 5px;
    gap: 40px;
    margin-top: 30px;
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 800px) {
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

const ServiceCard = styled.div`
  padding: 10px;
  border: 2px solid ${Colors.green};
  background: #e5efdc;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  width: 100%;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (min-width: 600px) {
    max-width: 500px;
  }
  @media screen and (min-width: 800px) {
    max-width: 330px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 500px;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 20px;
  margin-bottom: 10px;
  img {
    width: 100%;
    border-radius: 20px;
    min-height: 230px;
    max-height: 230px;
    height: auto;
    border-bottom: 1px solid #ddd;
    @media screen and (max-width: 320px) {
      min-height: 170px;
      max-height: 180px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      min-height: 200px;
      max-height: 230px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      min-height: 200px;
      max-height: 230px;
    }
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin: 10px;
`;

const Content = styled.p`
  font-size: 0.9rem;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const ViewMore = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  display: block;

  /* width: 100%; */
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
