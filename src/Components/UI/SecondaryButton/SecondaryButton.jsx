import React from "react";
import './secondaryButton.scss'
const SecondaryButton = ({ label, onClick }) => {
  return <button onClick={onClick} className="secondaryButton">{label}</button>;
};

export default SecondaryButton;
