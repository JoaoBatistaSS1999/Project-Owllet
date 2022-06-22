import styled from "styled-components";

export const CommunityStyle = styled.div`
  width: 100%;
  max-width: 540px;
  border: 1px solid #f6ff00;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;

  .image {
    width: 150px;
    height: 100px;
    border: 1px solid #000000;
    background-color: #914646;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 15px 20px;

    @media (max-width: 560px) {
      padding: 30px 20px;
    }

    @media (max-width: 420px) {
      width: 20%;
      padding: 30px 5px;
    }

    img {
      height: 40px;
      width: 40px;
      cursor: pointer;

      @media (max-width: 742px) {
        height: 30px;
        width: 30px;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #00a2ff;
    height: 100px;
    width: 70%;
    text-align: left;

    @media (max-width: 742px) {
      p {
        font-size: 12px;
      }
    }

    @media (max-width: 640px) {
      width: 95%;
    }
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;

    h3 {
      @media (max-width: 600px) {
        font-size: 15px;
      }
    }

    .redirect-arrow {
      @media (max-width: 742px) {
        width: 16px;
        height: 16px;
      }
    }

    .redirect {
      width: 18px;
      height: 18px;
      background-color: #000000;
      padding: 2px;

      @media (max-width: 742px) {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
