import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { serviceData } from "./ServiceData";
import CheckOutlined from "../assets/Images/checked.png";
import { Colors, Gradients } from "../Colors/ColorComponent";

import Heading from "../FixedComponent/Heading";
import ZoomInComponent from "../Motion/ZoomInComponent";
const SingleService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { serviceId } = useParams();
  const service = serviceData.find(
    (service) => service.id === parseInt(serviceId),
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <ServiceWrapper>
      <ServiceName backgroundImage={service.backgroundImage}>
        <h1>{service.serviceName}</h1>
      </ServiceName>
      <ServiceContent>
        <ZoomInComponent>
          <ServiceDescription>
            <p>{service.serviceDescription}</p>
          </ServiceDescription>
        </ZoomInComponent>
        <ServiceButtons>
          <Button href={service.bookServiceUrl}>Book Service Now</Button>
          <Button2 to={service.getQuoteUrl}>Get a Free Quote Now</Button2>
        </ServiceButtons>
        <ServiceBenefits>
          <Heading>Benefits</Heading>
          <ul>
            {service.benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <img src={CheckOutlined} />
                {benefit}
              </BenefitItem>
            ))}
          </ul>
        </ServiceBenefits>
        <ImageContainer>
          <ServiceImage src={service.serviceImage1} alt={service.serviceName} />
          <ServiceImage src={service.serviceImage2} alt={service.serviceName} />
          <ServiceImage src={service.serviceImage3} alt={service.serviceName} />
          <ServiceImage src={service.serviceImage4} alt={service.serviceName} />
        </ImageContainer>
      </ServiceContent>
    </ServiceWrapper>
  );
};

export default SingleService;
const ServiceWrapper = styled.div`
  color: ${Colors.forest};
  margin-top: -2rem;
`;

const ServiceName = styled.div`
  text-align: center;
  margin-bottom: 20px;
  background-image: url(${(props) => props.backgroundImage});
  min-height: 10rem;
  background-size: cover;
  background-position: center;
  h1 {
    background-color: rgba(0, 0, 0, 0.5);
    color: ${Colors.light};
    padding: 4rem 1rem;
    font-size: 36px;
    font-weight: bold;
    @media screen and (max-width: 320px) {
      font-size: 28px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      font-size: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      font-size: 32px;
    }
  }
`;

const ServiceContent = styled.div`
  padding: 20px;
  border-radius: 8px;
`;

const ServiceDescription = styled.div`
  margin-bottom: 20px;

  p {
    margin: 0;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
  }
`;

const ServiceButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.a`
  padding: 10px 20px;
  background: ${Gradients.lightToDark};
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-bottom: 5px;
  &:hover {
    background-color: ${Colors.green};
  }
`;
const Button2 = styled(Link)`
  padding: 10px 20px;
  text-align: center;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: ${Colors.lightgreen};
  color: ${Colors.forest};
  text-decoration: none;
  font-size: 18px;
  border-radius: 20px;
  margin-bottom: 5px;
  &:hover {
    background-color: ${Colors.green};
  }
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const ServiceBenefits = styled.div`
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 8px;
  img {
    max-width: 100%;
    height: 20px;
  }
  gap: 20px;
`;

const CheckIcon = styled(CheckOutlined)`
  color: #2ecc71;
  width: 24px;
  margin-right: 10px;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
`;
