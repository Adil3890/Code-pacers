import React, { useState } from "react";
import "./testimonials.scss";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsArray = [
    {
      id: 1,
      text: ` "Willing to accommodate nonprofit budgets, Cubix brought their
  robust experience to the project. They checked in consistently, and
  were communicative, easy to reach, and responsive. The Android app
  shows over 500 downloads to date."`,
    },
    {
      id: 2,
      text: `"Cubix, recognizing the financial constraints of nonprofits, tailored their services accordingly for this project. Their extensive experience was invaluable as they provided consistent check-ins, maintained open lines of communication, and remained highly responsive."`,
    },
    {
      id: 3,
      text: `"Cubix's commitment to affordability didn't compromise the quality of their service. They remained attentive, approachable, and quick to respond throughout the project. The Android app they crafted has made a notable impact, boasting over 1000 downloads and counting."`,
    },
  ];

  function handleNextClick() {
    if (currentTestimonialIndex < testimonialsArray.length - 1) {
      setCurrentTestimonialIndex(currentTestimonialIndex + 1);
    }
  }
  function handlePrevClick() {
    if (currentTestimonialIndex > 0) {
      setCurrentTestimonialIndex(currentTestimonialIndex - 1);
    }
  }
  return (
    <div className="testimonialsWrapper">
      <div className="testimonialsWrap">
        <h1>We develop enterprise-grade software solutions for businesses.</h1>
        <div className="flexWrapper">
          <LeftCircleFilled
            className={`${currentTestimonialIndex === 0 ? "disabled" : ""}`}
            onClick={handlePrevClick}
          />

          <h2 key={currentTestimonialIndex} className="testimonialText">
            {testimonialsArray[currentTestimonialIndex].text}
          </h2>
          <RightCircleFilled
            className={`${
              currentTestimonialIndex === testimonialsArray.length - 1
                ? "disabled"
                : ""
            }`}
            onClick={handleNextClick}
          />
        </div>
        <div className="contentWrapper">
          <h3>Melissa teward, of Marketing</h3>
          <p>National Fatherhood Initiative</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
