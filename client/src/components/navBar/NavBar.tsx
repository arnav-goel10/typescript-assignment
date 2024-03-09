import React from "react";
import TitleAndTabs from "./TitleAndTabs/TitleAndTabs";
import "./NavBar.css";

interface NavBarProps {
    onTabChange: (tab: "Main" | "Settings") => void;
    currentTab: "Main" | "Settings";
}

const NavBar: React.FC<NavBarProps> = ({ onTabChange, currentTab }) => {
    return <TitleAndTabs onTabChange={onTabChange} currentTab={currentTab} />;
};

export default NavBar;
