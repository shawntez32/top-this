import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/topthis.png";

function Header(props) {
  return (
    <header>
      <div className="navbar">
        <img src={icon}></img>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/DinnerTopping">Menu</Link></button>
        <button><Link to="/ContactUs">Contact Us</Link></button>
        <button><Link to="/JoinUs">Join Us</Link></button>
      </div>
    </header>
  );
}

export default Header;
