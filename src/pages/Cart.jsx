import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/UI/Button";

export const Cart = () => {
  return (
    <>
      <TextStyled>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo veniam
          enim saepe alias cum minus? Officiis eos odit velit quae. Reiciendis
          nihil vero sequi, non exercitationem perspiciatis ipsum! Perferendis,
          quia!
        </p>
      </TextStyled>
      <Link to="/products">
        <Button>GO BACK</Button>
      </Link>
    </>
  );
};
const TextStyled = styled.div`
  background-color: white;
  padding: 2rem 1.5rem;
  box-shadow: 2.5px 2px 2px 2px;
  width: 450px;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;
`;
