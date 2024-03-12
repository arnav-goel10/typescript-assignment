import { useEffect } from "react";

export const useSSE = (url: string, onMessage: (data: any) => void) => {
    useEffect(() => {
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onMessage(data);
        };

        return () => {
            eventSource.close();
        };
    }, [url, onMessage]);
};
