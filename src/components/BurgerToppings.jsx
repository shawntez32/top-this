import React, { useState} from "react";
import DinnerLimitless from "./DinnerLimitless";
import Footer from "./Footer";
import Header from "./Header";
import {Menu, toppingClicked} from "./Menu";

var home = <Header/>
var dinners = <Menu/>

function BurgerTopping(props) {
    const [toppingClicked, clicker] = useState(false);
    
    function homeClicked() {
        clicker(false);
      }

    return (
    <>
    <burgertopping>
        <div></div>
        <div className="toppingBg">
            <div className="premium">
                <div className="menuItem">
                    <h3 className="topping">Bacon</h3>
                    <h4 className="price">$2.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Cheese</h3>
                    <h4 className="price">$1.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Chili</h3>
                    <h4 className="price">$0.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Egg</h3>
                    <h4 className="price">$0.99</h4>
                </div>
            </div>
            <div className="limitless">

            </div>
        </div>
        <div></div>
    </burgertopping>
    <DinnerLimitless
    text="Unlimited" />
    </>
    )
}

export default BurgerTopping;
export {toppingClicked};