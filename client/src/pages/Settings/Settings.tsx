import React from "react";
import "./Settings.css";

interface SettingsProps {
    notiCount: number;
    notiPos: 1 | 2 | 3 | 4;
    notiDissapear: number;
    onNotiPosChange: (pos: 1 | 2 | 3 | 4) => void;
}

const Settings: React.FC<SettingsProps> = ({
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
        <div className="container">
            <div className="item">
                <span className="ind">Notification count</span>
                <span className="ind">{notiCount}</span>
            </div>
            <div className="item">
                <span className="ind">Notification position</span>
                <div>
                    {[1, 2, 3, 4].map((pos) => (
                        <span className="npos" key={pos}>
                            <label htmlFor={pos.toString()} key={pos}>
                                {"Position " + pos}
                            </label>
                            <input
                                type="radio"
                                id={pos.toString()}
                                name="notiPos"
                                value={pos}
                                checked={notiPos === pos}
                                onChange={handleRadioChange}
                                className="radio-button"
                            />
                        </span>
                    ))}
                </div>
            </div>
            <div className="item">
                <span className="ind">Notification disappear time</span>
                <span className="ind">{notiDissapear} sec</span>
            </div>
        </div>
    );
};

export default Settings;
