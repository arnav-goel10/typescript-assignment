import React from "react";
import "./Tabs.css";

interface TabsProps {
    onTabChange: (tab: "Main" | "Settings") => void;
    currentTab: "Main" | "Settings";
}

const Tabs: React.FC<TabsProps> = ({ onTabChange, currentTab }) => {
    return (
        <div className="tab-container">
            <span
                className={currentTab === "Main" ? "selected" : "tab"}
                onClick={() => onTabChange("Main")}
            >
                Main
            </span>
            <span
                className={currentTab === "Settings" ? "selected" : "tab"}
                onClick={() => onTabChange("Settings")}
            >
                Settings
            </span>
        </div>
    );
};

export default Tabs;
