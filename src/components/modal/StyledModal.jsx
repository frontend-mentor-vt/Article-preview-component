import styled from "styled-components";

export const ModalWrapp = styled.div`
  position: absolute;
  bottom: 118px;
  padding: 30px 23px 30px 14px;
  gap: 20px;
  width: 330px;
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
    font-size: 18px;
    text-transform: uppercase;
    color: hsl(212, 23%, 69%);
    letter-spacing: 10px;
    font-weight: 700;
  }
  &::after {
    position: absolute;
    bottom: -13px;
    right: 46%;
    content: "";
    width: 30px;
    height: 30px;
    background-color: hsl(217, 19%, 35%);
    display: block;
    transform: rotate(45deg);
  }
`;
