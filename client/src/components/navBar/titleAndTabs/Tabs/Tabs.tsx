import React from "react";
import { NavLink } from "react-router-dom";
import "./Tabs.css";

const Tabs: React.FC = () => {
    return (
        <div className="tab-container">
            <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "selected" : "tab")}
                end
            >
                Main
            </NavLink>
            <NavLink
                to="/settings"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "selected" : "tab")}
            >
                Settings
            </NavLink>
        </div>
    );
};

export default Tabs;
