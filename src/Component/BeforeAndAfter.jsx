import React from "react";
import styled from "styled-components";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import a1 from "../Images/a1.png";
import a1b from "../Images/a1b.png";
import a2 from "../Images/a2.png";
import a2b from "../Images/a2b.png";
import a3 from "../Images/a3b.png";
import a3b from "../Images/a3.png";
import a4 from "../Images/a4b.jpg";
import a4b from "../Images/a4.jpg";

const images = [
  {
    before: a4,
    after: a4b,
    beforeText: "Before ",
    afterText: "After ",
  },
  {
    before: a2,
    after: a2b,
    beforeText: "Before ",
    afterText: "After ",
  },
  {
    before: a3,
    after: a3b,
    beforeText: "Before",
    afterText: "After ",
  },
  {
    before: a1,
    after: a1b,
    beforeText: "Before ",
    afterText: "After ",
  },
];

const BeforeAndAfter = () => {
  return (
    <BeforeAfterContainer>
      {images.map((image, index) => (
        <BeforeAfterWrapper key={index}>
          <ImgComparisonSlider>
            <Image slot="first" src={image.before} alt={image.beforeText} />
            <Image slot="second" src={image.after} alt={image.afterText} />
          </ImgComparisonSlider>
          <Overlay before>{image.beforeText}</Overlay>
          <Overlay after>{image.afterText}</Overlay>
        </BeforeAfterWrapper>
      ))}
    </BeforeAfterContainer>
  );
};

export default BeforeAndAfter;

const BeforeAfterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 2rem 0rem !important;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 2rem !important;
  }
`;

const BeforeAfterWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 700px) {
  }
`;
const Image = styled.img`
  max-width: 100%;
  width: 25rem;
  height: 22rem;
  @media screen and (max-width: 320px) {
    width: 18rem;
    height: 18rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 20rem;
    height: 20rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 22rem;
    height: 22rem;
  }
  @media screen and (min-width: 1000px) {
    width: 25rem;
    height: 20rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  padding: 10px 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  ${({ before }) =>
    before &&
    `
    top: 10px;
    left: 10px;
  `}

  ${({ after }) =>
    after &&
    `
    bottom: 10px;
    right: 10px;
  `}
`;
