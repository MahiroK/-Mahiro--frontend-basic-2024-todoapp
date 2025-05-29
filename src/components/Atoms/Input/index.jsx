import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import styled from "styled-components";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef();
  const handleBlur = () => {
    const value = inputRef.current.value;
    onEditComplete(value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const value = inputRef.current.value;
      onEditComplete(value);
    }
  };
  useEffect(() => {
    console.log("initialized");
    inputRef.current.focus();
  }, []);

  return (
    <BlackBarTextStyle
      ref={inputRef}
      type="text"
      defaultValue={defaultValue?.text ?? ""}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};

const BlackBarTextStyle = styled.input`
  width: 100%;
  padding: 0px 4px;
  border-radius: 2px;
  letter-spacing: 0%;
  background-color: ${COLOR.BLACK};
  border: none;
  outline: none;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXTS.S};
`;
