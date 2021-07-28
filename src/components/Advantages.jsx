import React from "react";
import Advantage from "./Advantage";
import { ReactComponent as Box } from "../svg/box.svg";
import { ReactComponent as Chat } from "../svg/chat.svg";
import { ReactComponent as Sheald } from "../svg/sheald.svg";

const Advantages = () => {
    return (
        <div className="advantages__container">
            <div className="advantages">
                <div className="advantages__description">
                    <h2>למה כמיפל?</h2>
                    <span></span>
                    <p>
                        נולוס ארווס סאפיאן - פוסילים קווים אקוודמן קוואזי במר
                        מודוף. אודיפו בלאסטיק מונפץ קליר. בנפח נפקט למסון בלרק
                        ועווף לפרומי בלוף קיוץ תתיח לרעח
                    </p>
                </div>
                <Advantage Icon={Box} title="משלוח מהיר" />
                <Advantage Icon={Chat} title="שירות" />
                <Advantage Icon={Sheald} title="מהימן" />
            </div>
        </div>
    );
};

export default Advantages;
