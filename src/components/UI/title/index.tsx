import React, { ReactNode } from "react";
import { TitleStyle } from "./styles";

interface IProps {
  children: ReactNode;
}

const SubTitle: React.FC<IProps> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};
export default SubTitle;
