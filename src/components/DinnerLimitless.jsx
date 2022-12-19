import React from "react";

function DinnerLimitless(props) {
    return(
        <>
        <dinnerlimitless>
                <div></div>
                <div className="toppingBg">
                    <div className="limitless">
                        <div className="menuItem">
                            <h3 className="topping">Chives</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Ketchup</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Mustard</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                        <div className="menuItem">
                            <h3 className="topping">Onion</h3>
                            <h4 className="price">{props.text}</h4>
                        </div>
                    </div>
                
                </div>
                <div></div>
            </dinnerlimitless>
        </>
    )
}

export default DinnerLimitless;
