import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./pages/Settings"; // Adjust the import path as necessary
import Main from "./pages/Main";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<"Main" | "Settings">("Main");

    const renderPage = () => {
        switch (currentPage) {
            case "Main":
                return <Main />;
            case "Settings":
                return <Settings />;
            default:
                return null;
        }
    };

    return (
        <>
            <NavBar currentTab={currentPage} onTabChange={setCurrentPage} />
            <div>{renderPage()}</div>
        </>
    );
};

export default App;
