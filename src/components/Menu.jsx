import React from "react";
import Dinner from "./Dinners";
import Salad from "./Salad";
import Soup from "./Soup";

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