import React from "react";
import Title from "./Title/Title"; // Update the path as necessary
import Tabs from "./Tabs/Tabs";
import "./TitleAndTabs.css";

interface TitleAndTabsProps {}

const TitleAndTabs: React.FC<TitleAndTabsProps> = ({}) => {
    return (
        <div className="titleandtabs">
            <Title />
            <Tabs />
        </div>
    );
};

export default TitleAndTabs;
