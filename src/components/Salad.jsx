import React from "react";
import iceberg from "../images/iceberg5.jpg";
import romaine from "../images/romaine4.jpg";

function Salad() {
    return (
        <>
        <div className="space"></div>
        <div className="salads">
            <h2>Salads</h2>
        <div>
               <div className="foodBox">
               <div>
                <img src={iceberg} alt="Iceberg Lettuce"></img>
                <h4 className="img-text">Iceberg Salad</h4>
               </div>
               <div className="foodDsc">
                <h3>Iceberg Salad</h3>
                <p>Create your own everyday fresh iceberg Lettuce.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <button><a href="/SaladTopping">View Topping</a></button>
               </div>
                
            </div>
            </div>
            <div>
               <div className="foodBox">
                <div>
                    <img src={romaine} alt="Romaine Lettuce"></img>
                    <h4 className="img-text">Romaine Salad</h4>
                </div>
               <div className="foodDsc">
                <h3>Romaine Lettuce</h3>
                <p>Everyday fresh romaine Lettuce.<br/>
                       All items come with premium limited toppings and some unlimited toppings.</p>
                <button><a href="/SaladTopping">View Topping</a></button>
               </div>
                
            </div>
            </div>
        </div>
        <div className="space"></div>
        </>
    )
}

export default Salad;