import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

import CheckBox from "../../Atoms/CheckBox/index";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";

const Task = ({
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
    <StyleFrame>
      <StyledWrapper>
        <CheckBox onClick={onTaskComplete} />
        {isEditing ? (
          <Input onEditComplete={onEditComplete} defaultValue={taskName} />
        ) : (
          <StyledText>{taskName}</StyledText>
        )}
        {!isEditing && <EditButton onClick={onEditButtonClick} />}
      </StyledWrapper>
    </StyleFrame>
  );
};
export default Task;

const StyleFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  margin: 0;
`;
