import React from "react";
import cheese from "../images/a1.jpg";

function HomeImage() {
  return (
    <div className="homeImage">
        <img src={cheese} alt="cheese-fries" />
    </div>
  );
}

export default HomeImage;