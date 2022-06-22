import React from "react";
import { ColumnStyle } from "./styles";

interface Props {
  title: string;
  blank?: null | boolean; // is it a link or a element on the page?

  items: Array<{
    text: string;
    link: string;
  }>;
}

const Column: React.FC<Props> = ({ title, items, blank }) => {
  return (
    <ColumnStyle>
      <h3>{title}</h3>
      <ul>
        {items.map((e) => (
          <li>
            {blank ? (
              <a href={e.link} target='_blank' rel='noreferrer'>
                {e.text}
              </a>
            ) : (
              <a href={`#${e.link}`}>{e.text}</a>
            )}
          </li>
        ))}
      </ul>
    </ColumnStyle>
  );
};
export default Column;
