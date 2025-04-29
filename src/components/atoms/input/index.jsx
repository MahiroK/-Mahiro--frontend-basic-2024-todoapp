import React, { useRef, useEffect } from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";
import styled from "styled-components";
import { use } from "react";

export const input = (onEditComplete, defaultValue) => {
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
    <BlackBarStyle>
      <BlackBarTextStyle
        ref={inputRef}
        type="text"
        defaultValue={defaultValue?.text ?? ""}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </BlackBarStyle>
  );
};

const BlackBarStyle = styled.div`
  width: 100%;
  padding: 0px 4px;
  border-radius: 2px;
  background-color: ${COLOR.BLACK};
`;

const BlackBarTextStyle = styled.input`
  letter-spacing: 0%;
  background-color: ${COLOR.BLACK};
  border: none;
  outline: none;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXTS.S};
`;
