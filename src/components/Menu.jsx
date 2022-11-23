import React from "react";
import burger from "../images/burger2.jpg";
import cheese from "../images/a1.jpg";

function Menu() {
  return (
    <menu>
        <div className="space"></div>
        <div className="dinners">
            <div>
                <h2>Dinners</h2>
             <div className="foodBox">
                <img src={burger} alt="Burger"></img>
                    <div>
                    <p>All beef patty served with your choice of tasty toppings.</p>
                    <a>Order Now</a>
                    </div>
             </div>
                
            <div className="foodBox">
                <img src={cheese} alt="Fries"></img>
                <div>
                <p>Our famous fries.</p>
                <a>Order Now</a>
                </div>
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