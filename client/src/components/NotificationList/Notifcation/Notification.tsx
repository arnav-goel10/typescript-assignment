// Notification.tsx
import React, { useEffect, useState } from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";

interface NotificationProps {
    msg_id: string;
    time: number;
    msg: string;
    disappearTime: number;
}

const Notification: React.FC<NotificationProps> = ({
    msg_id,
    time,
    msg,
    disappearTime,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, disappearTime * 1000);

        return () => clearTimeout(timer);
    }, [time]);

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
