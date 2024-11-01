import React from "react";
import "./Footer.scss";
import { ReactSVG } from "react-svg";
import { SiFacebook, SiTwitter } from "react-icons/si";
// import { facebook, footerLogo, twitter } from "../../Assets";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer-container" >
       

      <div className="footer-content">
        <div className="logo-description">
          <div className="logo">
            {/* <ReactSVG src={footerLogo} /> */}
            <h2>Code Pacers</h2>
          </div>
          <p className="description">
            Welcome to Healthcare, your trusted online destination for
            accessible and affordable healthcare solutions. We are dedicated to
            providing you with easy access to top-notch medical professionals,
            expert advice, and convenient booking options. Whether you need a
            doctor's consultation, second opinion, or health information, our
            platform is designed to prioritize your well-being. Experience
            healthcare made simple and affordable with us.
          </p>
        </div>
        <div className="listed-social">
          <div className="listed-items">
            <h3>Useful Links</h3>
            <ul>
              <li>Careers</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="social-icons">
            <h3>Resources</h3>
            <div className="icons">
              <div className="icon">
              <SiFacebook />

              </div>
              <div className="icon">
               <SiTwitter />
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <p className="rights">Copyright © CodePacer {year}.</p>
    </div>
  );
};

export default Footer;
