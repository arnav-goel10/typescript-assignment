import React from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";

interface NotificationProps {
    msg_id: string;
    time: number;
    msg: string;
}

const Notification: React.FC<NotificationProps> = ({ msg_id, time, msg }) => {
    return (
        <div className="notification-box">
            <span className="notiText">{msg}</span>
            <Cross />
        </div>
    );
};

export default Notification;
