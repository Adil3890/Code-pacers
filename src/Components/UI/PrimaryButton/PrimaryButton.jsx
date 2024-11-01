import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ onClick, label }) => {
  return (
    <div className="btnWrapper">
      <div className="border" />
      <button onClick={onClick} className="primaryButton">
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
