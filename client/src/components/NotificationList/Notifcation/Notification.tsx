// Notification.tsx
import React, { useEffect, useState } from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";

interface NotificationProps {
    msg_id: string;
    time: number; // time in seconds
    msg: string;
}

const Notification: React.FC<NotificationProps> = ({ msg_id, time, msg }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, time * 1000); // Convert time to milliseconds for setTimeout

        // Cleanup function
        return () => clearTimeout(timer);
    }, [time]);

    // Function to manually hide the notification
    const handleCrossClick = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="notification-box">
            <span className="notiText">{msg}</span>
            <Cross onClick={handleCrossClick} />
        </div>
    );
};

export default Notification;
