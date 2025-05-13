// インポート
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXTS from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

// 画面に表示する部分を作っている　exportを書くことによって、外部からでも参照ができるようになる
export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

// CSS部分　スタイリングを行う
// styled-componentsを使っている
const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.L};
  font-family: ${FONTFAMILY.ROBOTO};
  text-align: center;
  letter-spacing: 0;
  font-weight: 500;
  gap: 10px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXTS.M};
    font-family: ${FONTFAMILY.NOTO_SANS};
    width: 100%;
  }
`;
