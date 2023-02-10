import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductsItem } from "../components/header/ProductsItem";
import Button from "../components/UI/Button";

const Product = () => {
  const products = [
    {
      title: "Telephone",
      id: 1,
    },
    {
      title: "AirPods",
      id: 2,
    },
  ];

  return (
    <Container>
      <ProductsItem products={products} />
      <Link to="/">
        <Button>GO BACK</Button>
      </Link>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 40%;
  padding: 2rem 1rem ;
  margin: 3rem;
  align-items:center
`;
