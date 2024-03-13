import React, { useState, useCallback } from "react";
import "./NotificationList.css";
import { useSSE } from "../../hooks/useSSE";
import Notification from "./Notifcation/Notification";

interface NotificationMessage {
    msg_id: string;
    time: number;
    msg: string;
}

const NotificationList: React.FC<{
    notiCount: number;
    notiPos: 1 | 2 | 3 | 4;
    notiDisappear: number;
}> = React.memo(({ notiCount, notiPos, notiDisappear }) => {
    const [notifications, setNotifications] = useState<NotificationMessage[]>(
        []
    );

    const handleNewNotification = useCallback(
        (notification: NotificationMessage) => {
            setNotifications((prev) =>
                [...prev, notification].slice(-notiCount)
            );
        },
        [notiCount]
    );

    useSSE("http://localhost:9000/events", handleNewNotification);

    const getPositionClassName = () => {
        switch (notiPos) {
            case 1:
                return "";
            case 2:
                return "top-right";
            case 3:
                return "bottom-right";
            case 4:
                return "bottom-left";
        }
    };

    return (
        <div className={`notification-list ${getPositionClassName()}`}>
            {notifications.map((notification) => (
                <Notification
                    key={notification.msg_id}
                    msg_id={notification.msg_id}
                    time={notification.time}
                    msg={notification.msg}
                    disappearTime={notiDisappear}
                />
            ))}
        </div>
    );
});

export default NotificationList;
