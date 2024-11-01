import React from "react";
import "./customCard.scss";
import { ReactSVG } from "react-svg";
import { Project1 } from "../../../assets/Index";
const CustomCard = ({ svg,title, category }) => {
  return (
    <div className="customCardWrapper">
      <div className="customCardWrap">
        <div className="customCard">
          <ReactSVG src={svg.src} />
          <h1>{title}</h1>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
