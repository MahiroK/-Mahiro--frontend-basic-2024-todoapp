// EditButton.jsx
import React from "react";
import pencilIcon from "src/assets/svg/pencil.svg";

export const Editbutton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={pencilIcon} alt="Edit" />
    </button>
  );
};
