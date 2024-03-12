import React from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";
const Notification = () => {
    return (
        <div className="notification-box">
            <span className="notiText">
                To solve this issue and ensure that such long strings wrap
                within their container, you just checking if it still continues
                working or not
            </span>
            <Cross />
        </div>
    );
};

export default Notification;
