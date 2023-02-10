import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
const StyledButton = styled.button`
  background-color: #19ae9f;
  color: white;
  border: none;
  border-radius: 10px ;
  width: 100px;
  height: 30px;
`;
