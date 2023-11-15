import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 736px;
  height: 300px;
  display: flex;
  box-shadow: 24px 20px 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  .main-image {
    width: 305px;
    height: 100%;
    object-fit: cover;
    object-position: 0% 100%;
    border-radius: 20px 0 0 20px;
  }

  /* ContentContainer media query */

  @media screen and (max-width: 500px) {
    & {
      flex-direction: column;
      width: 88%;
      box-shadow: none;
    }
    .main-image {
      width: 100%;
      /* height: 30%; */
      border-radius: 16px 16px 0 0;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  .title {
    color: hsl(217, 19%, 35%);
    font-size: 20px;
  }

  .description {
    color: hsl(212, 23%, 69%);
    font-weight: 700;
    font-size: 13px;
    text-align: justify;
    max-width: 368px;
  }

  .sub-title {
    letter-spacing: 0.5px;
  }

  /* RightSide media query */

  @media screen and (max-width: 500px) {
    & {
      position: relative;
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
    .description {
      font-size: 16px;
      line-height: 27px;
      text-align: left;
    }
  }
`;

export const BottomWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon-share-wrapp-main {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: hsl(210, 46%, 95%);
    cursor: pointer;
  }
  .icon-share-wrapp-back {
    width: 30px;
    height: 30px;
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
    gap: 17px;
  }
  .bottom-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .avatar-name {
    font-size: 15px;
    margin: 0;
    color: hsl(217, 19%, 35%);
  }
  .data {
    color: hsl(212, 23%, 69%);
    font-size: 13px;
  }
  .hide {
    display: none;
  }

  /* BottomWrapp media query */

  @media screen and (max-width: 500px) {
    .share-icon-total-wrapp {
      position: initial;
    }
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
      /* transform: scale(0.6); */
    }

    .icon-share-wrapp-main,
    .icon-share-wrapp-back {
      width: 40px;
      height: 40px;
    }
  }
`;
