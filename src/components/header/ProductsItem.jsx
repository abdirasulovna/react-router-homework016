import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsItem = ({ products }) => {
  return (
    <div>
      {products.map((item, index) => {
        return (
          <List key={index}>
            <li key={item.id}>{item.title}</li>

            <Link to={`${item.id}`}>
              <Button>Details</Button>
            </Link>
          </List>
        );
      })}
    </div>
  );
};
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2.5px 2px 2px 2px;
  border-radius: 5px;
 text-align: center;
  background-color: white;
  padding: 1rem;
  list-style: none;
  font-size: large;
  margin-bottom: 2rem;
`;
