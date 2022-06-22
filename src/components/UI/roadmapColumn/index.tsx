import React from "react";
import { Container } from "./styles";

import check from "../../../assets/logos/check.png";
import clock from "../../../assets/logos/clock.png";

interface IProps {
  title: string;
  items: Array<{
    checked: boolean;
    text: string;
  }>;
}

const RoadmapColumn: React.FC<IProps> = ({ title, items }) => {
  const checkedStatus = <img src={check} alt='checked-status' />;
  const inProgressStatus = <img src={clock} alt='not-checked-status' />;

  return (
    <Container>
      <h2>{title}</h2>
      <ul>
        {items.map((el) => (
          <li>
            {el.checked ? checkedStatus : inProgressStatus}
            <h4>{el.text}</h4>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default RoadmapColumn;
