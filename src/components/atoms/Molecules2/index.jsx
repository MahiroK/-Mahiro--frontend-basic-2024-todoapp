import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

import Checkbox from "../CheckBox";
import EditButton from "../Editbutton";
import Input from "../input";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <Checkbox onClick={onTaskComplete} />
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <Wrapper>
          <StyledText>{taskName}</StyledText>
          <EditButton onClick={onEditButtonClick} />
        </Wrapper>
      )}
    </StyledWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 2px 6px;
  justify-content: space-between;
`;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 2px 6px;
  align-items: center;
`;

const StyledText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  margin: 0;
`;
