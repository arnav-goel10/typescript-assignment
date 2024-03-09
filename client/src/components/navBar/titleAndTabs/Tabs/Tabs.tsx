import React, { useState } from "react";
import "./Tabs.css";

const Tabs: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>("Main");

    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="tab-container">
            <span
                className={selectedTab === "Main" ? "selected" : "tab"}
                onClick={() => handleTabClick("Main")}
            >
                Main
            </span>
            <span
                className={selectedTab === "Settings" ? "selected" : "tab"}
                onClick={() => handleTabClick("Settings")}
            >
                Settings
            </span>
        </div>
    );
};

export default Tabs;
