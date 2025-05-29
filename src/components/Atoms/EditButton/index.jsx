// EditButton.jsx
import React from "react";
import pencilIcon from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const EditButton = ({ onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <img src={pencilIcon} alt="Edit" />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  border: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 50%;
  }
`;
