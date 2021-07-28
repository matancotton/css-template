import React from "react";

const Advantage = ({ Icon, title }) => {
    return (
        <div className="advantage">
            <Icon />
            <h2>{title}</h2>
            {title === "שירות" && (
                <p>
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם
                    סולג.
                </p>
            )}
        </div>
    );
};

export default Advantage;
