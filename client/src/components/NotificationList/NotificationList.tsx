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
}> = ({ notiCount, notiPos, notiDisappear }) => {
    const [notifications, setNotifications] = useState<NotificationMessage[]>(
        []
    );

    // Memoize the callback using useCallback
    const handleNewNotification = useCallback(
        (notification: NotificationMessage) => {
            setNotifications((prev) =>
                [...prev, notification].slice(-notiCount)
            );
        },
        [notiCount]
    ); // Dependency on notiCount, if it changes, the callback is updated

    useSSE("http://localhost:9000/events", handleNewNotification);

    return (
        <div className={`notification-list position-${notiPos}`}>
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
};

export default NotificationList;
