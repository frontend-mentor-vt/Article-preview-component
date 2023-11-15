import styled from "styled-components";

export const MainModalWrapp = styled.div`
  position: absolute;
  bottom: 70px;
  padding: 15px 0 15px 0;
  gap: 13px;
  width: 270px;
  background-color: hsl(217, 19%, 35%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  cursor: default;

  .icons-wrapp {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .text {
    font-size: 12px;
    text-transform: uppercase;
    color: hsl(212, 23%, 69%);
    letter-spacing: 10px;
    font-weight: 700;
  }
  &::after {
    position: absolute;
    bottom: -9px;
    right: 46%;
    content: "";
    width: 20px;
    height: 20px;
    background-color: hsl(217, 19%, 35%);
    display: block;
    transform: rotate(45deg);
  }
`;

export const MediaModalWrapp = styled(MainModalWrapp)`
  bottom: 0;
  right: 0;
  left: 0;
  width: auto;
  border-radius: 0 0 16px 16px;
  justify-content: space-between;
  padding: 18px 25px 18px 25px;
  .left-side-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .text {
    letter-spacing: 8px;
    font-size: 16px;
  }
  &::after {
    display: none;
  }
  .share-icon-wrapp {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: hsl(214, 17%, 51%);
    cursor: pointer;
  }
`;
