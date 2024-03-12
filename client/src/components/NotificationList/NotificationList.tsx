import React from "react";
import Notification from "./Notifcation/Notification";
import "./NotificationList.css";

const NotificationList = () => {
    return (
        <div className="notification-list">
            <Notification
                msg_id="10"
                time={4}
                msg="Your goal is to implement a frontend of a notification system based on Server-Sent Events (SSE) technology, following the restrictions and design layout described below.
You may use this project template with prepared webpack config, eslint config and tsconfig."
            />
            <Notification
                msg_id="10"
                time={6}
                msg="This is notification message"
            />
        </div>
    );
};

export default NotificationList;
