import styled from "styled-components";

export const Container = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: #000000;
    border-radius: 10px;

    img {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;

      @media (max-width: 400px) {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
