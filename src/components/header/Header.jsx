import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <h1>
          <Link to='/' style={{ color: "white",  }}>LOGO</Link>
        </h1>
        
        <UlStyled>
          <li>
            <Link to="/products" style={{ color: "white" }}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/carts" style={{ color: "white" }}>
              {" "}
              MY CARTS
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ color: "white" }}>
              MY ORDERS
            </Link>
          </li>
        </UlStyled>
      </HeaderStyled>
    </>
  );
};

export default Header;

const HeaderStyled = styled.header`
  color: #ffff;
  width: 100%;
  height: 50px;
  background-color: #2c88d9;
  display: flex;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  top: 0;
  align-items: center;
`;
const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;
