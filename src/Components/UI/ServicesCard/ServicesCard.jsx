import React from "react";
import "./servicesCard.scss";
import { ReactSVG } from "react-svg";
const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="cardWrapper">
      <div className="cardWrap">
        <div className="card">
            <div className="border"/>
          <ReactSVG src={icon.src} />
          <h2>{title}</h2>
          <p>{description}</p>
          {/* <div className="iconWrapper">
            {icons.map((icon, index) => {
              console.log("icons", icon);
              return <ReactSVG key={index} src={icon.src} />;
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
