import React from "react";
import styled from "styled-components";
import ceo1 from "../Images/ceo1.jpg";
import ceo2 from "../Images/ceo2.jpg";
import ceo3 from "../Images/ceo3.jpg";
import { Colors } from "../Colors/ColorComponent";

const Cont = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  color: ${Colors.forest};

  background: ${Colors.lightgreen};
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;
const SubHeading = styled.p`
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 0 10px 0;
  padding: 5px;
  border-radius: 20px;
  display: inline-block;
  background: ${Colors.lightgreen};
  color: #555;
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 60px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.7rem;
    padding: 0 70px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  flex-shrink: 0;
  background: #fffefe;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  text-align: left;
  margin: 20px 10px;
  scroll-snap-align: center;
  overflow: hidden;

  img {
    max-width: 100%;
    height: 20rem;
    min-width: 300px;
    border-radius: 10px;
  }

  @media screen and (max-width: 320px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    min-width: 250px;
    padding: 8px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    min-width: 250px;
    padding: 8px;
  }
`;

const SlideDiv = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Ceo = () => {
  return (
    <Cont>
      <SubHeading>Swipe to See the faces behind our success</SubHeading>
      <Container>
        <SlideDiv>
          <ImageWrapper>
            <img src={ceo1} alt="CEO 1" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={ceo2} alt="CEO 2" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={ceo3} alt="CEO 3" />
          </ImageWrapper>
        </SlideDiv>
      </Container>
    </Cont>
  );
};

export default Ceo;
