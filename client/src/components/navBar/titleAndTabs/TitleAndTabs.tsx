import React from "react";
import Title from "./Title/Title"; // Update the path as necessary
import Tabs from "./Tabs/Tabs";
import "./TitleAndTabs.css";

interface TitleAndTabsProps {
    onTabChange: (tab: "Main" | "Settings") => void;
    currentTab: "Main" | "Settings";
}

const TitleAndTabs: React.FC<TitleAndTabsProps> = ({
    onTabChange,
    currentTab,
}) => {
    return (
        <div className="titleandtabs">
            <Title />
            <Tabs onTabChange={onTabChange} currentTab={currentTab} />
        </div>
    );
};

export default TitleAndTabs;
