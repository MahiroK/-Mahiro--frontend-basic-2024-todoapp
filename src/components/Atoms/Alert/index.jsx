// 例）isActive の Props に応じて文字色を変化させたい場合
import React from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../contexts/alert_handler.jsx";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts.js";

const Alert = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  return (
    <StyledWrapper active={AlertHandlerContext.visible}>
      {AlertHandlerContext.errorText}
    </StyledWrapper>
  );
};

export default Alert;

//ここにアニメーション機能と上に重なるように表示される機能を加える
const StyledWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 60px;
  left: 50%;
  color: ${COLOR.WHITE};
  padding: 10px 20px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  width: 360px;
  height: 20px;
  background-color: ${COLOR.RED};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) =>
    props.active ? "translate(-50%,40%)" : "translate(-50%,0%)"};
  transition: all 0.5s ease-in-out;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 280px;
  }
`;
