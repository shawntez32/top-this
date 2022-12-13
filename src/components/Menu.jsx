import React, { useState } from "react";
import soup from "../images/soup.jfif";
import soup2 from "../images/bsoup.jfif"
import Header from "./Header";
import BurgerTopping from "./BurgerToppings";
import Dinner from "./Dinners";
import Salad from "./Salad";

var routes = {"header": <Header/>, "bg": <BurgerTopping/>}
var toppingClicked = false;


function Menu(props) {
    
    var [toppingClickedTrigger,clicker] = useState(false);
    function clicked(arg) {
        clicker = true;
        arg = clicker;
    }
    
  return (
    <menu>
        <Dinner />
        <Salad />
        <div></div>
        <div className="soup">
            <h2>Soup</h2>
            <div className="foodBox">
                <div>
                    <img src={soup} alt="Soup"></img>
                    <h4 className="img-text">Cheese Soup</h4>
                </div>
               <div className="foodDsc">
                <h3>Cheese Based</h3>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href={routes.header}>Order Now</a>
            </div>
            </div>
            <div className="foodBox">
                <div>
                    <img src={soup2} alt="Soup"></img>
                    <h4 className="img-text">Broth Soup</h4>
                </div>
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

export {Menu,toppingClicked};