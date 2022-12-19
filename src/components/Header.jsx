import React from "react";
import icon from "../images/topthis.png";

function Header(props) {
  return (
    <header>
      <div className="navbar">
        <img src={icon}></img>
        <button><a href="/">Home</a></button>
        <a href="/DinnerTopping">Menu</a>
        <a>Contact Us</a>
        <a>Join Us</a>
      </div>
    </header>
  );
}

export default Header;
