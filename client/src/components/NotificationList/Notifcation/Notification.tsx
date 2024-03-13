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
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    // Function to start the disappearance timeout
    const startDisappearTimeout = () => {
        const id = setTimeout(() => {
            setIsVisible(false);
        }, disappearTime * 1000);
        setTimeoutId(id);
    };

    // Function to clear the disappearance timeout
    const clearDisappearTimeout = () => {
        if (timeoutId) clearTimeout(timeoutId);
    };

    useEffect(() => {
        startDisappearTimeout();

        return () => clearDisappearTimeout();
    }, [disappearTime, msg_id]);

    const handleMouseEnter = () => {
        clearDisappearTimeout();
    };

    const handleMouseLeave = () => {
        startDisappearTimeout();
    };

    const handleCrossClick = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
            className="notification-box"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className="notiText">{msg}</span>
            <Cross onClick={handleCrossClick} />
        </div>
    );
};

export default Notification;
