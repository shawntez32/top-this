import React from "react";
import soup from "../images/soup.jfif";
import soup2 from "../images/bsoup.jfif";
import { Link } from "react-router-dom";

function Soup() {
    return (
        <>
        <div></div>
        <div className="soup">
            <h2>Soup</h2>
            <div className="foodBox">
                <div>
                    <img src={soup} alt="Soup"></img>
                    <h4 className="img-text">Cheese Soup</h4>
                </div>
               <div className="foodDsc">
                <h2>Cheese Based</h2>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <button><Link to="/SoupTopping">View Topping</Link></button>
            </div>
            </div>
            <div className="foodBox">
                <div>
                    <img src={soup2} alt="Soup"></img>
                    <h4 className="img-text">Broth Soup</h4>
                </div>
               <div className="foodDsc">
                <h2>Broth Based</h2>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <button><Link to="/SoupTopping">View Topping</Link></button>
            </div>
            </div>
        </div>
        <div className="space"></div>
        </>
    )
}

export default Soup;