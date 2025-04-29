import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import Check from "../../../assets/svg/check.svg";

export const CheckBox = () => {
  return (
    <CheckboxStyle>
      <BoxImage src={Check} />
    </CheckboxStyle>
  );
};

const CheckboxStyle = styled.div`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  gap: 10px;

  &:hover img {
    opacity: 1;
  }
`;

const BoxImage = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0;
`;
