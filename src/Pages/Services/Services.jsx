import React from "react";
import "./services.scss";
import { servicesData } from "../../Components/UI/ServicesCard/ServiceData";
import ServicesCard from "../../Components/UI/ServicesCard/ServicesCard";
const Services = () => {
  return (
    <div className="servicesWrapper">
      <div className="servicesWrap">
        <div className="servicesContent">
          <h1>
            Our <span>Services</span>
          </h1>
          <p>
            We are technologists and entrepreneurs, so we understand both the
            technical and business challenges of creating digital products.
          </p>
        </div>
        <div className="cardsWrapper">
          {servicesData.map((item, index) => {
            return (
              <ServicesCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                // icons={item.icons}
              />
            );
          })}
        </div>
      </div>
    
    </div>
  );
};

export default Services;
