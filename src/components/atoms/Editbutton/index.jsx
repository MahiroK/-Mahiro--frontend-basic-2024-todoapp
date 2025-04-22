// EditButton.jsx
import React from "react";
import pencilIcon from "../../../assets/svg/pencil.svg";

export const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={pencilIcon} alt="Edit" />
    </button>
  );
};
