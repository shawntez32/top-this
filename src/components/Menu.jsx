import React, { useState } from "react";
import Header from "./Header";
import BurgerTopping from "./BurgerToppings";
import Dinner from "./Dinners";
import Salad from "./Salad";
import Soup from "./Soup";

var routes = {"header": <Header/>, "bg": <BurgerTopping/>}
var toppingClicked = false;


function Menu() {
    
  return (
    <menu>
        <Dinner 
        bname="View Toppings"
        />
        <Salad />
        <Soup />
    </menu>
  );
}

export {Menu,toppingClicked};