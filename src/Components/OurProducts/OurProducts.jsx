import React from "react";
import "./ourProducts.scss";
import { modulesData } from "../../ProjectData";
import SectionModule from "../UI/SectionModule";
const OurProducts = () => {
  return (
    <div  id="work"  className="ourProductsWrapper">
      <div className="ourProductsWrap">
        {modulesData.map((item) => {
          return (
            <SectionModule
            key={item.id}
            id={item.id}
            data-id={item.id}
              img={item.img}
              category={item.category}
              title={item.title}
              description={item.description}
              img1={item.img1}
              img2={item.img2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurProducts;
