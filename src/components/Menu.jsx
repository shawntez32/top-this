import React from "react";
import burger from "../images/burger2.jpg";
import cheese from "../images/a1.jpg";

function Menu() {
  return (
    <menu>
        <div className="space"></div>
        <div className="dinners">
            <div>
             <div className="foodBox">
                <img src={burger} alt="Burger"></img>
                    <p>All beef burger.</p>
             </div>
                
            <div className="foodBox">
                <img src={cheese} alt="Fries"></img>
                <p>Our famous fries.</p>
            </div>
            
            </div>
        </div>
        <div className="space"></div>

        <div className="salads">
        <div>
               <div className="foodBox"></div>
               <div className="foodDesc"></div> 
            </div>
        </div>
        <div className="soup">
            <div>
               <div className="foodBox"></div>
               <div className="foodDesc"></div> 
            </div>
        </div>
        <div className="breakfast">
            <div>
               <div className="foodBox"></div>
               <div className="foodDesc"></div> 
            </div>
        </div>
    </menu>
  );
}

export default Menu;