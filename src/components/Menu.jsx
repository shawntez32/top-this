import React from "react";
import burger from "../images/burger4.jpg";
import cheese from "../images/a1.jpg";
import iceberg from "../images/iceberg5.jpg";
import romaine from "../images/romaine4.jpg";
import soup from "../images/soup.jfif";

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

        <div className="space"></div>
        <div className="salads">
            <h2>Salads</h2>
        <div>
               <div className="foodBox">
               <img src={iceberg} alt="Iceberg Lettuce"></img>
               <div>
                <p>Everyday fresh iceberg Lettuce</p>
                <a>Order Now</a>
               </div>
                
            </div>
            </div>
            <div>
               <div className="foodBox">
               <img src={romaine} alt="Romaine Lettuce"></img>
               <div>
                <p>Everyday fresh romaine Lettuce</p>
                <a>Order Now</a>
               </div>
                
            </div>
            </div>
        </div>
        <div className="space"></div>
        <div></div>
        <div className="soup">
            <h2>Soup</h2>
            <div className="foodBox">
               <img src={soup} alt="Soup"></img>
               <div>
                <p>Delicious make your own soup</p>
                <a>Order Now</a>
            </div>
            </div>
        </div>
        <div className="space"></div>
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