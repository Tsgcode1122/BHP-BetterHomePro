import React from "react";
import styled from "styled-components";

// Styling for individual bubbles
const Bubble = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: #325300;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  filter: blur(3px);

  &:nth-child(even) {
    background: #325300;
  }
`;

// Container for the background
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const WaterBubblesBackground = () => {
  const bubblesData = [
    { size: 50, top: 1, left: 1 },
    { size: 80, top: 1, left: 90 },
    { size: 10, top: 5, left: 20 },

    { size: 80, top: 15, left: 70 },

    { size: 30, top: 50, left: 10 },
    { size: 300, top: 60, left: 80 },
    { size: 30, top: 70, left: 50 },
    { size: 70, top: 85, left: 30 },
    { size: 55, top: 90, left: 60 },
    { size: 65, top: 40, left: 85 },
    { size: 45, top: 20, left: 40 },
  ];

  const bubbleElements = bubblesData.map((bubble, index) => (
    <Bubble
      key={index}
      size={bubble.size}
      top={bubble.top}
      left={bubble.left}
    />
  ));

  return <Background>{bubbleElements}</Background>;
};

export default WaterBubblesBackground;
