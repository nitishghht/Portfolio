import React from "react";

import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

import "../Footer/Footer.css";
const Footer = () => {
  return(
 <>
  <div className="row">
    <img className="images" src={location} alt="location" />
    <p className="text">51/17-A <br/> Khopoli Navi Mumbai</p>
    <img className="images"  src={telephone} alt="telephone" />
    <p className="text">+91-7058912667</p>
    <img className="images"  src={email} alt="email" />
    <p className="text">rajbharnit@gmailcom</p>
  

    <div className="row-n">
      <h1 className="headline"> About the company</h1>
      <p className="text-n">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>Natus, nemo fugiat exercitationem harum, velit veniam cumque <br/>at laudantium assumenda amet, adipisci recusandae cupiditate quisquam similique!</p>
      <a href="https://www.facebook.com/profile.php?id=100024347706204">
        <img src={facebook} alt="" className="image" />
      </a>
      <a href="https://www.instagram.com/_._nit_/">
        <img src={instagram} alt="" className="image" />
      </a>
      <a href="https://www.linkedin.com/in/nitish-rajbhar-3b6292220/">
        <img src={linkedin} alt="" className="image" />
      </a>
      <a href="https://github.com/nitishghht">
        <img src={github} alt="" className="image" />
      </a>


      </div>
      <center className="copyright">
        <h1 className="copy">@2024 CopyRight: Nitish Rajbhar</h1>
      </center>
    </div>
    </>

  );
};

export default Footer;
