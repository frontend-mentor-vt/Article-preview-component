import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  box-shadow: 24px 20px 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  .image-wrapp {
    overflow: hidden;
    width: 92%;
  }
  .main-image {
    height: 100%;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 32px 29px 15px 60px;

  .title {
    color: hsl(217, 19%, 35%);
    font-size: 43px;
  }

  .description {
    color: hsl(212, 23%, 69%);
    font-weight: 700;
    font-size: 27px;
    text-align: justify;
    max-width: 765px;
    line-height: 40px;
  }
  .text-wrapp {
  }
  .bottom-image-wrapp {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .sub-title{
    letter-spacing: 1.5px;
  }
`;

export const BottomWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-share-wrapp {
    margin-right: 30px;
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: hsl(210, 46%, 95%);
    cursor: pointer;
  }
  .bottom-image {
    width: 112px;
    height: 112px;
    border-radius: 50%;
  }
  .data {
    color: hsl(212, 23%, 69%);
    font-size: 21px;
  }
`;
