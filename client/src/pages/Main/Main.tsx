import React from "react";
import "./Main.css";
import NotificationList from "../../components/NotificationList/NotificationList";

interface MainProps {
    notiCount: number;
    notiPos: 1 | 2 | 3 | 4;
    notiDissapear: number;
}

const Main: React.FC<MainProps> = ({ notiCount, notiPos, notiDissapear }) => {
    return (
        <div className="notification-container">
            <NotificationList
                notiCount={notiCount}
                notiPos={notiPos}
                notiDisappear={notiDissapear}
            />
        </div>
    );
};

export default Main;
