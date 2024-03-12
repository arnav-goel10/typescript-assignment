import React from "react";
import "./Main.css";
import NotificationList from "../../components/NotificationList/NotificationList";

interface MainProps {
    notiCount: number;
    notiPos: 1 | 2 | 3 | 4;
    notiDissapear: number;
    onNotiPosChange: (pos: 1 | 2 | 3 | 4) => void;
}

const Main: React.FC<MainProps> = ({
    notiCount,
    notiPos,
    notiDissapear,
    onNotiPosChange,
}) => {
    const handleRadioChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newPos = parseInt(event.target.value, 10) as 1 | 2 | 3 | 4;
        onNotiPosChange(newPos);
    };

    return (
        <div className="notification-container">
            <NotificationList />
        </div>
    );
};

export default Main;
