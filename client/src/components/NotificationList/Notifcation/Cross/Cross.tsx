import React from "react";
import "./Cross.css";

interface CrossProps {
    onClick: () => void;
}

const Cross: React.FC<CrossProps> = ({ onClick }) => {
    return (
        <button className="cross" onClick={onClick}>
            &#10005;
        </button>
    );
};

export default Cross;
