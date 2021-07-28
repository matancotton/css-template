import React, { useState } from "react";
import stars from "../images/stars.jpg";
import { ReactComponent as Cart } from "../svg/cart.svg";
import { ReactComponent as Heart } from "../svg/heart.svg";

const Item = ({ item, alt }) => {
    const [heartCss, setHeartCss] = useState("heart-icon");

    const onHeartClicked = () => {
        if (heartCss.includes("heart-active")) setHeartCss("heart-icon");
        else setHeartCss("heart-icon heart-active");
    };

    return (
        <div className="item">
            <img className="item-img" src={item} alt={alt} />
            <div className="item__info">
                <div className="item__info-content">
                    <div className="rate">
                        <img src={stars} alt="stars" className="stars" />
                        <span className="rate-text">(5 ביקורות)</span>
                    </div>

                    <h2 className="item-name">משאבת חלב אוונט נטורל</h2>
                    <div>
                        <span className="fade-price">650₪</span>
                        <span className="bold-price">525₪</span>
                    </div>
                </div>
                <button className="item-cart">
                    <Cart />
                    <span>הוסף לעגלה</span>
                </button>
            </div>
            <div className="sale">מבצע!</div>
            <Heart className={heartCss} onClick={onHeartClicked} />
        </div>
    );
};

export default Item;
