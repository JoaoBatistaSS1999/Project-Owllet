import React from "react";
import { Container } from "./styles";

interface IProps {
  link: string;
  icon: string;
  alt: string;
}

const Icon: React.FC<IProps> = ({ link, icon, alt }) => {
  return (
    <Container>
      <li>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={icon} alt={alt} />
        </a>
      </li>
    </Container>
  );
};
export default Icon;
