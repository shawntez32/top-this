import React from "react";

function SoupLimitless(props) {
    return (
        <>
        <souplimitless>
        <div></div>
                <div className="toppingBg">
                    <div className="limitless">
                        <div className="menuItem">
                            <h3 className="topping">Broccoli</h3>
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
                            <h3 className="topping">Celery</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Noodle</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Tortilla Chips</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Parmesian Crisp</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                    </div>
                </div>
                <div></div>
        </souplimitless>
        </>
    )
}

export default SoupLimitless;