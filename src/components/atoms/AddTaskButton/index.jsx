import React from "react";
import Plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXTS from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";

export const AddTaskButton = () => {
  return (
    <ButtonStyle>
      <ButtonImage src={Plus} />
      <ButtonText> タスクを追加 </ButtonText>
    </ButtonStyle>
  );
};
const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;
const ButtonText = styled.p`
  margin: 0;
`;

const ButtonStyle = styled.button`
  color: ${COLOR.GREEN};
  ${TEXTS.S};
  font-family: ${FONTFAMILY.NOTO_SANS};
  letter-spacing: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 6px;
  background: transparent;
  border: none;
  margin: 0;

  &:hover {
    cursor: pointer;
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
`;
