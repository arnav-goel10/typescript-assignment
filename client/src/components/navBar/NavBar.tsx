import React from "react";
import TitleAndTabs from "./TitleAndTabs/TitleAndTabs";
import "./NavBar.css";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    return <TitleAndTabs />;
};

export default NavBar;
