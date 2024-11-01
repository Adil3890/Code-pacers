import React from "react";
import "./about.scss";
import { ReactSVG } from "react-svg";
import {
  slideimg,
  slideimg02,
  slideimg03,
  slideimg04,
  slideimg05,
  slideimg06,
  slideimg08,
  slideimg09,
  slideimg10,
} from "../../assets/Index";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      {/* header  */}
      <div className="aboutWrapper">
        <div id="aboutContainer">
          <h1 className="container-heading">
            {" "}
            <span>About </span> Us
          </h1>
          <div className="about-header">
            <div className="about-header-left"></div>
            <div className="about-header-right">
              <p>
                In this era of rapid technological advancement, our skilled
                experts serve as your guiding light in navigating the
                complexities of digital challenges. Equipped with extensive
                training and hands-on experience, our Tech Response Squad stands
                prepared to swiftly address any technological crisis you may
                encounter. Whether it's a data breach, software malfunction, or
                any other tech emergency, our team is dedicated to providing
                immediate support and solutions to safeguard your digital
                well-being.
              </p>
            </div>
          </div>
        </div>

        {/* slider  */}

        <div className="slides">
          <div className="slider">
            <Slider {...settings}>
              <div className="img">
                <img src={slideimg} alt="" />
              </div>
              <div className="img">
                <img src={slideimg02} alt="" />
              </div>
              <div className="img">
                <img src={slideimg03} alt="" />
              </div>
              <div className="img">
                <img src={slideimg04} alt="" />
              </div>
              <div className="img">
                <img src={slideimg05} alt="" />
              </div>
              <div className="img">
                <img src={slideimg06} alt="" />
              </div>
              <div className="img">
                <img src={slideimg08} alt="" />
              </div>
              <div className="img">
                <img src={slideimg09} alt="" />
              </div>
              <div className="img">
                <img src={slideimg} alt="" />
              </div>
              <div className="img">
                <img src={slideimg02} alt="" />
              </div>
              <div className="img">
                <img src={slideimg10} alt="" />
              </div>
              <div className="img">
                <img src={slideimg04} alt="" />
              </div>
            </Slider>
          </div>
        </div>

        {/* Commitment and Healthier lives */}

        <div className="container">
          <div className="commitment_and_healthier_lives">
            <div className="commitment_and_healthier_lives_left">
              <h2>
              Igniting Technological Empowerment 
              </h2>
              <p>
                Our mission is firmly grounded in delivering attentive,
                all-encompassing services to every client we engage with.
                Supported by a devoted team of seasoned experts, we are
                dedicated to cultivating an environment that champions progress
                while valuing your satisfaction.
              </p>
            </div>
            <div className="commitment_and_healthier_lives_right">
              <h2>Empowering Digital Futures, empowering the community</h2>
              <p>
                Welcome to Code Pacers, Our comprehensive strategy merges
                state-of-the-art technological prowess with a customized
                approach, guaranteeing that each project receives top-tier
                attention tailored to its specific requirements. Through our
                commitment to innovation and understanding, we aim to be your
                reliable ally in your pursuit of digital excellence and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
