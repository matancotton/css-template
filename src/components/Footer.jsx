import React from "react";
import group from "../images/group-9.png";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="form">
                    <span>
                        הצטרף לניוזלטר שלנו וקבל הנחה של 20 ₪ בהזמנה הראשונה שלך
                    </span>
                    <div className="input__container">
                        <input
                            type="text"
                            className="form__input"
                            placeholder="הכנס את האימייל שלך"
                        />
                        <button className="form__button">הירשם כמנוי</button>
                    </div>
                </div>
                <div className="group-img">
                    <img src={group} alt="group-9" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
