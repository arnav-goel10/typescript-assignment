import { useEffect, useState } from "react";

interface NotificationMessage {
    msg_id: string;
    time: number;
    msg: string;
}

export const useSSE = (
    url: string,
    callback: (data: NotificationMessage) => void
) => {
    useEffect(() => {
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            const data: NotificationMessage = JSON.parse(event.data);
            callback(data);
        };

        return () => {
            eventSource.close();
        };
    }, [url, callback]);
};
