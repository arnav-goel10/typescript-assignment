import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./pages/Settings/Settings";
import Main from "./pages/Main/Main";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<"Main" | "Settings">("Main");

    const renderPage = () => {
        switch (currentPage) {
            case "Main":
                return <Main />;
            case "Settings":
                return (
                    <Settings notiCount={2} notiDissapear={10} notiPos={1} />
                );
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
