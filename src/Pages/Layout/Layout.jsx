import React from "react";
import Header from "../../Components/Header/Header";
import "../Layout/layout.scss";
import Home from "../../Components/Home/Home";
import ProductDevelopmentSection from "../../Components/ProductDevelopmentSection/ProductDevelopmentSection";
import Technologies from "../../Components/Technologies/Technologies";
// import SectionModule from "../../Components/UI/SectionModule";
import MicroPetsRunnerGame from "../../Components/MicroPetsRunnerGame/MicroPetsRunnerGame";
import OurProducts from "../../Components/OurProducts/OurProducts";
import Testimonials from "../../Components/Testimonials/Testimonials";
import AwardsSection from "../../Components/AwardsSection/AwardsSection";
// import CardCarousel from "../Components/AwardsSection/AwardsSection";
import Footer from "../../Components/Footer/footer";
export const Layout = () => {
  return (
    <>
      <div className="layoutWrapper">
        <div className="layoutWrap">
          {/* <Header /> */}
          <Home />
          <ProductDevelopmentSection /> 
          <MicroPetsRunnerGame />
          <OurProducts />
          <Testimonials />
           <Technologies />
         <AwardsSection />
          <Footer /> 
        </div>
      </div>
    </>
  );
};
