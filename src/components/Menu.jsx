import React from "react";
import burger from "../images/burger4.jpg";
import cheese from "../images/a1.jpg";
import iceberg from "../images/iceberg5.jpg";
import romaine from "../images/romaine4.jpg";
import soup from "../images/soup.jfif";
import soup2 from "../images/bsoup.jfif"
import Header from "./Header";
import BurgerTopping from "./BurgerToppings";
import Apple from "./App";

var routes = {"header": <Header/>, "bg": <BurgerTopping/>}

function Menu() {
  return (
    <menu>
        <div className="space"></div>
        <div className="dinners">
            <div>
                <h2>Dinners</h2>
             <div className="foodBox">
                <div>
                <img src={burger} alt="Burger"></img>
                <h4 className="img-text">Build-It Burger</h4>
                </div>
                
                    <div className="foodDsc">
                    <h3>Burgers</h3>

                    <p>All beef patty served with your choice of tasty toppings.<br/>
                       All items come with premium limited toppings and some unlimited toppings.
                    </p>
                    <a href={routes.bg}>Order Now</a>
                    </div>
             </div>
                
            <div className="foodBox">
                <div>
                <img src={cheese} alt="Fries"></img>
                <h4 className="img-text">Famous fries</h4>
                </div>
                
                <div className="foodDsc">
                <h3>French Fries</h3>
                <p>  Our famous fries.<br/>
                         All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
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
               <div className="foodDsc">
                <h3>Iceberg Salad</h3>
                <p>Create your own everyday fresh iceberg Lettuce.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
               </div>
                
            </div>
            </div>
            <div>
               <div className="foodBox">
               <img src={romaine} alt="Romaine Lettuce"></img>
               <div className="foodDsc">
                <h3>Romaine Lettuce</h3>
                <p>Everyday fresh romaine Lettuce.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
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
               <div className="foodDsc">
                <h3>Cheese Based</h3>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
            </div>
            </div>
            <div className="foodBox">
               <img src={soup2} alt="Soup"></img>
               <div className="foodDsc">
                <h3>Broth Based</h3>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
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