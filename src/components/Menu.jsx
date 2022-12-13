import React, { useState } from "react";
import Header from "./Header";
import BurgerTopping from "./BurgerToppings";
import Dinner from "./Dinners";
import Salad from "./Salad";
import Soup from "./Soup";

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
        <Soup />
    </menu>
  );
}

export {Menu,toppingClicked};