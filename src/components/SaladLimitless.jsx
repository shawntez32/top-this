import React from "react";

function SaladLimitless(props) {
    return (
        <>
        <saladlimitless>
        <div></div>
                <div className="toppingBg">
                    <div className="limitless">
                        <div className="menuItem">
                            <h3 className="topping">Strawberry</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Carrots</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Diced Tomato</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Onion</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Cucumber</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Croutons</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Tortilla Chips</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Parmesian</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                    </div>
                </div>
                <div></div>
        </saladlimitless>
        </>
    )
}

export default SaladLimitless;