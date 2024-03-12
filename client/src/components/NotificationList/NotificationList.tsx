import React from "react";
import Notification from "./Notifcation/Notification";
import "./NotificationList.css";

const NotificationList = () => {
    return (
        <div className="notification-list">
            <Notification />
            <Notification />
        </div>
    );
};

export default NotificationList;
