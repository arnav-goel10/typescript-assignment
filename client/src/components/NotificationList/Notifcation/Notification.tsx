import React from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";
const Notification = () => {
    return (
        <span className="notification-box">
            <span className="notiText">Notification</span>
            <Cross />
        </span>
    );
};

export default Notification;
