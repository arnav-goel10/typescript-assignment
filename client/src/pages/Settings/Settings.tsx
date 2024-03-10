import React from "react";
import "./Settings.css";

interface SettingsProps {
    notiCount: number;
    notiPos: 1 | 2 | 3 | 4;
    notiDissapear: number;
}

const Settings: React.FC<SettingsProps> = ({
    notiCount,
    notiPos,
    notiDissapear,
}) => {
    return (
        <div className="container">
            <div className="item">
                <span className="ind">Notification count</span>
                <span className="ind">{notiCount}</span>
            </div>
            <div className="item">
                <span className="ind">Notification position</span>
            </div>
            <div className="item">
                <span className="ind">Notification disappear time</span>
                <span className="ind">{notiDissapear} sec</span>
            </div>
        </div>
    );
};

export default Settings;
