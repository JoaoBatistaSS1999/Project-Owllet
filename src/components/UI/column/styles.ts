import styled from "styled-components";

export const ColumnStyle = styled.ul`
  width: 170px;
  border: 1px solid #9aec0d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  font-size: 16px;

  @media (max-width: 400px) {
    width: 130px;
    padding: 5px;
    font-size: 12px;
  }

  ul {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
