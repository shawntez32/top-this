import React from "react";
import icon from "../images/topthis.png";

function Header() {
  return (
    <header>
      <div className="navbar">
        <img src={icon}></img>
        <a>Home</a>
        <a>Menu</a>
        <a>Contact Us</a>
        <a>Join Us</a>
      </div>
    </header>
  );
}

export default Header;
