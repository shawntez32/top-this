import React from "react";

function SaladTopping() {
    return (
    <saladtopping>
        <div className="toppingBg">
        <div className="premium">
                <div className="menuItem">
                    <h3 className="topping">Bacon</h3>
                    <h4 className="price">$2.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Extra Cheese</h3>
                    <h4 className="price">$1.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Extra Chicken</h3>
                    <h4 className="price">$3.99</h4>
                </div>
                <div className="menuItem">
                    <h3 className="topping">Egg</h3>
                    <h4 className="price">$0.99</h4>
                </div>
            </div>
        </div>
    </saladtopping>
    )
}

export default SaladTopping;