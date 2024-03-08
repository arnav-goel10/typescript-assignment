import React from "react";
import Title from "./Title/Title";
import Tabs from "./Tabs/Tabs";

const TitleAndTabs = () => {
    return (
        <div style={{ display: "flex" }}>
            <Title />
            <Tabs />
        </div>
    );
};

export default TitleAndTabs;
