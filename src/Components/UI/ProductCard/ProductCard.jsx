import React from "react";
import "./productCard.scss";
import { CiMobile3 } from "react-icons/ci";

export const ProductCard = ({ icon, label1, label2 }) => {
  return (
    <div className="productCardWrapper">
      <div className="card">
        {icon}
        <h2>
          {label1} <br /> {label2}{" "}
        </h2>
      </div>
    </div>
  );
};
