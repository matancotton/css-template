import React from "react";
import phillips from "../images/phillips.jpg";
import shaving from "../images/shaving.jpg";
import bottels from "../images/bottels.gif";
import brush from "../images/brush.jpg";
import temperature from "../images/temperature.png";
import milk from "../images/milk.png";
import beurer from "../images/beurer.jpg";
import Item from "./Item";

const images = [shaving, bottels, brush, temperature, milk, beurer];

const Main = () => {
    return (
        <div className="main">
            <div className="main__banner">
                <img src={phillips} alt="phillips" />
            </div>
            <div className="main__items">
                {images.map((item, i) => (
                    <Item key={i} item={item} alt={i} />
                ))}
            </div>
        </div>
    );
};

export default Main;
