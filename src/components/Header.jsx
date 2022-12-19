import React from "react";
import icon from "../images/topthis.png";

function Header(props) {
  return (
    <header>
      <div className="navbar">
        <img src={icon}></img>
        <button><a href="/">Home</a></button>
        <button><a href="/DinnerTopping">Menu</a></button>
        <button><a>Contact Us</a></button>
        <button><a>Join Us</a></button>
      </div>
    </header>
  );
}

export default Header;
