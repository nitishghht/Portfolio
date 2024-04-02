import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import contectimage from '../../assets/contact.png'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="Menu">
        <Link  activeClass="active" to="Intro" spy = {true} smooth={true} offset={-100} duration={500} className="MenuListItem">Home</Link>
        <Link activeClass="active" to="bio" spy = {true} smooth={true} offset={-200} duration={500} className="MenuListItem">Projects</Link>
        <Link activeClass="active" to="about" spy = {true} smooth={true} offset={-200} duration={500} className="MenuListItem">Skills</Link>
        <Link activeClass="active" to="Contact" spy = {true} smooth={true} offset={-200} duration={500} className="MenuListItem">Contact Us</Link>
      </div>
      {/* <Link  ctiveClass="active"  to="/Contact" spy = {true} smooth={true} offset={-100} duration={500} className="menubtn">
        <img src={contectimage} alt="" className="Menuimg" />
        Contact Me
      </Link> */}
    </nav>
  );
};

export default Navbar;
