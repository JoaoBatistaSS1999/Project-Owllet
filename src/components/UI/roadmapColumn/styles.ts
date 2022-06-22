import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  max-width: 270px;
  border: 1px solid #00ffff;
  border-radius: 12px;
  color: #000000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    border: 1px solid #ffff00;
    padding: 5px;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 35px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    border: 1px solid #ff001e;
  }
  img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    padding: 4px;
    width: 30px;
    height: 30px;
  }
`;
