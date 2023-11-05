import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  box-shadow: 24px 20px 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  .image-wrapp {
    overflow: hidden;
    width: 96%;
  }
  .main-image {
    height: 100%;
  }

  @media screen and (max-width: 500px) {
    & {
      flex-direction: column;
    }
    .main-image {
      max-width: 100%;
    }

    .image-wrapp {
      overflow: hidden;
      width: 100%;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 70px 61px 36px 70px;
  gap: 20px;

  .title {
    color: hsl(217, 19%, 35%);
    font-size: 41px;
  }

  .description {
    color: hsl(212, 23%, 69%);
    font-weight: 700;
    font-size: 26px;
    text-align: justify;
    max-width: 737px;
    line-height: 40px;
  }
  .avatar-name {
    color: hsl(217, 19%, 35%);
  }
  .sub-title {
    letter-spacing: 1.5px;
  }

  @media screen and (max-width: 500px) {
    & {
      padding: 35px;
      gap: 16px;
    }
    .title {
      font-size: 19px;
      line-height: 32px;
    }
    .sub-title {
      letter-spacing: normal;
    }
  }
  .description {
    font-size: 15px;
    line-height: 27px;
    text-align: left;
  }
`;

export const BottomWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-share-wrapp-main {
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: hsl(210, 46%, 95%);
    cursor: pointer;
  }
  .icon-share-wrapp-back {
    width: 66px;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: hsl(214, 17%, 51%);
    cursor: pointer;
  }
  .share-icon-total-wrapp {
    position: relative;
  }
  .bottom-image-wrapp {
    display: flex;
    align-items: center;
    gap: 30px;
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

  @media screen and (max-width: 500px) {
    .bottom-image-wrapp {
      gap: 18px;
    }
    .bottom-image {
      width: 60px;
      height: 60px;
    }
    .avatar-name {
      font-size: 16px;
      margin: 0;
    }
    .data {
      font-size: 15px;
    }
    .arrow-icon {
      transform: scale(0.6);
    }

    .icon-share-wrapp-main,
    .icon-share-wrapp-back {
      width: 40px;
      height: 40px;
    }
    .share-icon-total-wrapp {
      /* position: initial; */
      display: none;
    }
  }
`;
