// import React from "react";
// import "./header.scss";
// import { IoCallOutline } from "react-icons/io5";
// import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
// import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
// const Header = () => {
//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//   const handleButtonClick = () => {
//     console.log("button is click");
//   };
//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };
//   return (
//     <div className={`headerWrapper ${isNavbarOpen ? "navbarOpen" : ""}`}>
//       <nav class="navbar navbar-expand-lg">
//         <div class="container-fluid lg-px-5">
//           <h1 class="navbar-brand" href="#">
//             Code Pacers
//           </h1>

//           <button
//             class="navbar-toggler bg-white"
//             type="button"
//             onClick={toggleNavbar}

//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded={isNavbarOpen ? "true" : "false"}
//             aria-label="Toggle navigation"

//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   Services
//                 </a>
//               </li>
//               {/* <li class="nav-item">
//                 <a class="nav-link">Solutions</a>
//               </li> */}

//               <li class="nav-item">
//                 <a class="nav-link ">Work</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link ">About</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>

//               {/* <li class="nav-item">
//                 <a class="nav-link callIconWrapper ">
//                   <IoCallOutline className="callIcon" /> +123456789
//                 </a>
//               </li> */}
//             </ul>
//             <SecondaryButton
//               onClick={handleButtonClick}
//               label="Estimate project"
//             />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import "./header.scss";
import { IoCallOutline } from "react-icons/io5";
import PrimaryButton from "../UI/PrimaryButton/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton/SecondaryButton";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
const navigate = useNavigate()
  const handleButtonClick = () => {
    console.log("button is clicked");
    navigate("/contact")
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className={`headerWrapper ${isNavbarOpen ? "navbarOpen" : ""}`}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid lg-px-5">
          <h1 class="navbar-brand" href="#">
            Code Pacers
          </h1>

          <button
            class="navbar-toggler bg-white"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/services"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Services
                </Link>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link">Solutions</a>
              </li> */}

              <li class="nav-item">
                <a id="work" class="nav-link ">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link ">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link" href="#">
                  Contact
                </Link>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link callIconWrapper ">
                  <IoCallOutline className="callIcon" /> +123456789
                </a>
              </li> */}
            </ul>
            <SecondaryButton
              onClick={handleButtonClick}
              label="Estimate project"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
