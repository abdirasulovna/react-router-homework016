import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const Order = () => {
  return (
    <>
      <StyledText>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          voluptate quis consequatur libero facilis dolorum dignissimos, non
          tempore necessitatibus debitis eveniet? Voluptatibus veritatis aliquam
          excepturi aut expedita impedit consequatur nihil!
        </p>
      </StyledText>
      <Link to="/carts">
        <Button>GO BACK</Button>
      </Link>
    </>
  );
};

export default Order;
const StyledText = styled.div`
  background-color: white;
  padding: 2rem 1.5rem;
  box-shadow: 2.5px 2px 2px 2px;
  width: 450px;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;
`;
