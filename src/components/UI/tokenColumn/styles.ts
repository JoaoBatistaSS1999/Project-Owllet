import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ff0800;
  width: 300px;
  height: min-content;
  padding: 10px;
  gap: 10px;

  @media (max-width: 450px) {
    width: 280px;
  }

  .img-container {
    width: 60%;
    height: min-content;
    border: 1px solid #0022ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    img {
      width: 150px;
      height: 150px;
      border: 1px solid #ffff00;
    }
  }

  .test-content {
    border: 1px solid #00bcb0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
  }
`;
