import React from "react";
import icon from "../images/topthis.png";

function TopThis() {
  return (
    <topthis>
        <div className="Welcome">
            <img src={icon}></img>
            <h1>TopThis</h1>
        </div>
        <div className="about-topThis">
            <div></div>
            <div className="middle"><p>Top-This is a restaraunt where you take your favorite american cuisine<br></br>and use an unlimited amount of our choice of toppings. <br></br>We have chili, cheese, ketchup, mustard, ranch, barbeque, and so much more. <br></br></p>
            </div><div></div>
        </div>
    </topthis>
  );
}

export default TopThis;