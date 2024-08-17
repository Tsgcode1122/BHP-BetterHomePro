import React from "react";
import styled from "styled-components";
import i1 from "../Images/clean.png";
import i2 from "../Images/clean.png";
import i3 from "../Images/chimney.png";
import i4 from "../Images/power-washing.png";
import i5 from "../Images/maintenance.png";
import { Colors } from "../Colors/ColorComponent";

const HeroFixed = () => {
  return (
    <>
      <Container>
        <Content>
          <Cont>
            <img src={i1} />
            <p> HVAC</p>
          </Cont>
          <Cont>
            <img src={i2} />
            <p> Air Duct Cleaning</p>
          </Cont>
          <Cont>
            <img src={i3} />
            <p> Chimney Repair</p>
          </Cont>
          <Cont>
            <img src={i4} />
            <p> Carpet Cleaning</p>
          </Cont>
          <Cont>
            <img src={i5} />
            <p> Home Improvement </p>
          </Cont>
          <Cont></Cont>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
  border-radius: 20px;

  background-color: ${Colors.white};
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: -4em 2rem 2rem 2rem;
`;
const Content = styled.div`
  padding: 1rem;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
const Cont = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: center;
  border-radius: 20px;
  p {
    margin: 0;
  }
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

export default HeroFixed;
