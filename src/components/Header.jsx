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
        <button><a>Contact Us</a></button>
        <button><a>Join Us</a></button>
      </div>
    </header>
  );
}

export default Header;
