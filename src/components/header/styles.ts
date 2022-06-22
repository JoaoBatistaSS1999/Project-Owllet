import styled from "styled-components";

export const Navigation = styled.nav`
  height: 60px;
  width: 100%;
  background-color: #1f1d1d;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #ffffff;
  padding: 5px;
`;

export const Container = styled.div`
  border: 1px solid #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1400px;
  min-height: min-content;
  height: 50px;

  padding: 10px;
`;
