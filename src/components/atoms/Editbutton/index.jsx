// EditButton.jsx
import React from "react";
import pencilIcon from "../../../assets/svg/pencil.svg";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;

  &:hover::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    background-color: rgba(185, 177, 177, 0.1);
    border-radius: 50%;
    z-index: 0;
  }
`;
const IconWrapper = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
export const EditButton = ({ onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <IconWrapper>
        <img src={pencilIcon} alt="Edit" />
      </IconWrapper>
    </ButtonWrapper>
  );
};
