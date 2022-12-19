import React from "react";
import soup from "../images/soup.jfif";
import soup2 from "../images/bsoup.jfif";

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
                <h3>Cheese Based</h3>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href="/SoupTopping">View Topping</a>
            </div>
            </div>
            <div className="foodBox">
                <div>
                    <img src={soup2} alt="Soup"></img>
                    <h4 className="img-text">Broth Soup</h4>
                </div>
               <div className="foodDsc">
                <h3>Broth Based</h3>
                <p>Delicious make your own soup.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <a href="/SoupTopping">View Topping</a>
            </div>
            </div>
        </div>
        <div className="space"></div>
        </>
    )
}

export default Soup;