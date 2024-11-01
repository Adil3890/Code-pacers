import React from "react";
import "./productDevelopmentSection.scss";
import { ProductCard } from "../UI/ProductCard/ProductCard";
import { CiMobile3 } from "react-icons/ci";
import { SiBlockchaindotcom, SiGamedeveloper } from "react-icons/si";
import { BsWebcam } from "react-icons/bs";


const ProductDevelopmentSection = () => {
  const productData = [
    { icon: <CiMobile3 />, label1: "App", label2: "Development" },
    { icon: <SiGamedeveloper />, label1: "Game", label2: "Development" },
    { icon: <BsWebcam />, label1: "web", label2: "Development" },
    { icon: <SiBlockchaindotcom />, label1: "Blockchain", label2: "Development" },
  ];
  return (
    <div className="sectionWrapper">
      <div className="sectionWrap">
        <span>Design. Development. Consultancy.</span>
        <h2>
          Develop results-driven products for entrepreneurs, startups, and
          enterprises with a leading software development company.
        </h2>
        <div className="cardWrap">
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              icon={item.icon}
              label1={item.label1}
              label2={item.label2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopmentSection;
