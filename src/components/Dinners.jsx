import React from "react";
import burger from "../images/burger4.jpg";
import cheese from "../images/a1.jpg";
import {toppingClicked} from "./Menu";
import { Link } from "react-router-dom";

function Dinner(props) {
    
    return (
        <><div className="space"></div><div className="dinners">
            <div>
                <h2>Dinners</h2>
                <div className="foodBox">
                    <div>
                        <img src={burger} alt="Burger"></img>
                        <h4 className="img-text">Build-It Burger</h4>
                    </div>

                    <div className="foodDsc">
                        <h3>Burgers</h3>

                        <p>All beef patty served with your choice of tasty toppings.<br />
                            All items come with premium limited toppings and some unlimited toppings.
                        </p>
                        <button><Link to="/DinnerTopping">{props.bname}</Link></button>
                    </div>
                </div>

                <div className="foodBox">
                    <div>
                        <img src={cheese} alt="Fries"></img>
                        <h4 className="img-text">Famous fries</h4>
                    </div>

                    <div className="foodDsc">
                        <h3>French Fries</h3>
                        <p>  Our famous fries.<br />
                            All items come with premium limited toppings and some unlimited toppings.</p>
                        <button><Link to="/DinnerTopping">{props.bname}</Link></button>
                    </div>
                </div>

            </div>
        </div><div className="space"></div></>
    );
}

export default Dinner;