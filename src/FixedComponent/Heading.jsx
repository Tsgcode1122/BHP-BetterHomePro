// Heading.js
import React from "react";
import styled from "styled-components";

import { Colors } from "../Colors/ColorComponent";
import i1 from "../Images/clean.png";
import ZoomInComponent from "../Motion/ZoomInComponent";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 0rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 2rem 2rem 0rem 2rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 3rem 2rem 0rem 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 3rem 2rem 0rem 2rem;
  }
`;
const StyledHeading = styled.div`
  background: #f4faf1;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  position: relative;
  border-right: 1px solid ${Colors.darkgreen};
  border-left: 1px solid ${Colors.darkgreen};

  h3 {
    margin: 0;
  }
  text-align: center;
  color: ${Colors.darkgreen};
  align-items: center;
  display: inline-block;
  border-radius: 20px 5px 20px 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Icon = styled.div`
  margin-top: -2rem;
  img {
    box-shadow:
      rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;

    border-radius: 50%;
    background: white;
    border: 1px solid ${Colors.darkgreen};
    padding: 5px;
    max-width: 100%;
    height: 30px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: Bold;
`;

const Heading = ({ children }) => {
  return (
    <>
      <ZoomInComponent>
        <Container>
          <StyledHeading>
            <Icon>
              <img src={i1} />
            </Icon>
            <Title> {children}</Title>
          </StyledHeading>
        </Container>
      </ZoomInComponent>
    </>
  );
};

export default Heading;
