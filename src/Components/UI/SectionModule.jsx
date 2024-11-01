import React from "react";
import "./sectionModule.scss";
import { ReactSVG } from "react-svg";
import {
  miniModuleImg1,
  moduleImg1,
  moduleImg2,
  moduleImg3,
  moduleImg4,
  moduleImg5,
  moduleImg6,
  moduleImg7,
  moduleImg8,
} from "../../assets/Index";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
const SectionModule = ({
  id,
  img,
  category,
  title,
  description,
  img1,
  img2,
}) => {
  const handleCaseClick = () => {
    console.log("handleCaseClick  is pressed");
  };

  const dynamicHeadingClass = id === 1 || id === 3 ? 'dynamicHeading' : "";
  return (
    <div className="SectionModuleWrapper" data-id={id}>
      <div className="SectionModuleWrap">
        <div className="contentWrapper">
            {id === 1 || id === 3 ? (
              <div className="imgWrapper">
                <img src={img1.src} alt="module image" className="firstImg" />
                <img src={img2.src} alt="module image" className="secondImg" />
              </div>
            ) : null}
          <div className="contentWrap">
            <img src={img.src} alt="img" />
            <span>{category}</span>
            <h2 className={dynamicHeadingClass}>{title}</h2>
            <p>{description}</p>
            <PrimaryButton
              label={"View case study"}
              onClick={handleCaseClick}
            />
          </div>
        </div>
        {id === 2 ? (
          <div className="imgWrapper">
            <img src={img1.src} alt="module image" className="firstImg" />
            <img src={img2.src} alt="module image" className="secondImg" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SectionModule;
