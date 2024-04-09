import React from "react";

import "./TitleAndTabs.css";
import Title from "./Title/Title";
import Tabs from "./Tabs/Tabs";

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
