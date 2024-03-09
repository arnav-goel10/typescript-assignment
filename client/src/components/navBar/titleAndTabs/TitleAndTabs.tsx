import React from "react";
import Title from "./Title/Title";
import Tabs from "./Tabs/Tabs";
import "./TitleAndTabs.css";

const TitleAndTabs = () => {
    return (
        <div className="titleandtabs">
            <Title />
            <Tabs />
        </div>
    );
};

export default TitleAndTabs;
