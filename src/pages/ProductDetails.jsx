import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <Container>
      <Text>Product {productId}</Text>
      <Link to="/products">
        <Button>GO BACK</Button>
      </Link>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  font-size: 20px;
  width: 600px;
  background-color: #fff;
  margin: 0 auto;
  height: 250px;
  text-align: left;
`;

const Text = styled.p`
  padding: 10px;
`;
