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
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPos = parseInt(event.target.value, 10) as 1 | 2 | 3 | 4;
        onNotiPosChange(newPos);
        console.log("lol", newPos);
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
                        <span className="npos">
                            <label htmlFor={"pos" + pos} key={pos}>
                                {"Position " + pos}
                            </label>
                            <input
                                type="radio"
                                id={"pos" + pos}
                                name="notiPos"
                                value={pos}
                                checked={notiPos === pos}
                                onChange={handleRadioChange}
                                style={{ width: "16px", height: "16px" }}
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
