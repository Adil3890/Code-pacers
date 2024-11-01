import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./awardsSection.scss";
import { testimonialImg1 } from "../../assets/Index";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const AwardsSection = () => {
  // const swiper = useSwiper()
  const swiperRef = useRef(null);

  const awardsData = [
    {
      id: 1,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
    {
      id: 2,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
    {
      id: 3,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
    {
      id: 4,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
    {
      id: 5,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
    {
      id: 6,
      img: testimonialImg1,
      text: "Top Android App Development Companies",
      descripton: `Cubix is listed as Top Android App Development Companies by   GoodFirms  `,
    },
  ];

  const handlePrevClick = () => {
    swiperRef.current?.swiper?.slidePrev();
    console.log("object");
  };
  const handleNextClick = () => {
    swiperRef.current?.swiper?.slideNext();
  };
  return (
    <>
      <div className="awardsSectionWrapper">
        <div className="awardsSectionWrap">
          <h1>Awards & Recognitions</h1>
          <Swiper
            modules={[Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4.5,
              },
              1240: {
                slidesPerView: 4,
              },
            }}
          >
            {awardsData.map((item) => {
              return (
                <SwiperSlide>
                  <div
                    key={item.id}
                    // className="card"
                    className={`card${item.id % 2 === 1 ? " margined" : ""}`}
                    // style={{ marginTop: item.id % 2 === 1 ? "50px" : "0" }}
                  >
                    <img src={item.img} alt="Card 1" />
                    <div className="card-body">
                      <h5>{item.text}</h5>
                      <p>{item.descripton}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <div className="iconWrapper">
           <LeftCircleFilled  onClick={handlePrevClick}/>
           <RightCircleFilled onClick={handleNextClick} />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default AwardsSection;
