import React from "react";
import "./home.scss";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  const handleHomeBtnClick = () => {
    console.log("handleHomeBtnClick clicked");
navigate("/contact")
  };
  return (
    <div className="mainHomeWrapper">
      <Header />
      <div className="homeWrapper ">
        <div className="homeWrap">
          <div className="homeContent">
            <h1 className="heading">Modernizing Mobile Platforms</h1>
            <p>
              Custom mobile apps. User experience & design. Engagement &
              intelligence. Native & cross-platform
            </p>
            <PrimaryButton onClick={handleHomeBtnClick} label="let's talk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
