import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "../Colors/ColorComponent";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${Colors.darkgreen};
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
  &:hover {
    background-color: ${Colors.green};
  }
`;

const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
