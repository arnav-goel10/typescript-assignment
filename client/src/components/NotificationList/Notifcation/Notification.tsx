import React, { useEffect, useState, useRef } from "react";
import "./Notification.css";
import Cross from "./Cross/Cross";

interface NotificationProps {
    msg_id: string;
    time: number;
    msg: string;
    disappearTime: number;
}

const Notification: React.FC<NotificationProps> = React.memo(
    ({ msg_id, time, msg, disappearTime }) => {
        const [isVisible, setIsVisible] = useState(true);
        const [hover, setHover] = useState(false);

        useEffect(() => {
            let timer: ReturnType<typeof setTimeout> | null = null;
            if (!hover && isVisible) {
                timer = setTimeout(() => {
                    setIsVisible(false);
                }, disappearTime * 1000);
            }
            return () => {
                if (timer) {
                    clearTimeout(timer);
                }
            };
        }, [disappearTime, hover, isVisible]);

        const handleCrossClick = () => {
            setIsVisible(false);
        };

        return isVisible ? (
            <div
                className="notification-box"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <span className="notiText">{msg}</span>
                <Cross onClick={handleCrossClick} />
            </div>
        ) : null;
    }
);

export default Notification;
