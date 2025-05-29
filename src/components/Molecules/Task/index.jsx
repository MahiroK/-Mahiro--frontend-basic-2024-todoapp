import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

import { CheckBox } from "../../Atoms/CheckBox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";

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
      <CheckBox onClick={onTaskComplete} />
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyleTextButton>
          <StyledText>{taskName}</StyledText>
          <EditButton onClick={onEditButtonClick} />
        </StyleTextButton>
      )}
    </StyledWrapper>
  );
};

const StyleTextButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 2px 6px;
`;

const StyledText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  margin: 0;
`;
