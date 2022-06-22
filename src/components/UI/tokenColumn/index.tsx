import React from "react";
import { Container } from "./styles";

interface IProps {
  title: string;
  text: string;
  img: string;
}

const TokenColumn: React.FC<IProps> = ({ title, text, img }) => {
  return (
    <Container>
      <div className='img-container'>
        <img src={img} alt='gif' />
      </div>

      <div className='test-content'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Container>
  );
};
export default TokenColumn;
