import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function BurgerTopping() {
    return (
    <><Header />
            <burgertopping>
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
            </burgertopping>
            <Footer /></>
    )
}

export default BurgerTopping;