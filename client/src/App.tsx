import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./pages/Settings/Settings";
import Main from "./pages/Main/Main";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<"Main" | "Settings">("Main");
    const [notiCount, setNotiCount] = useState<number>(0);
    const [notiPos, setNotiPos] = useState<1 | 2 | 3 | 4>(1);
    const [notiDissapear, setNotiDissapear] = useState<number>(5);
    const handleNotiPosChange = (newPos: 1 | 2 | 3 | 4) => {
        setNotiPos(newPos);
    };

    const renderPage = () => {
        switch (currentPage) {
            case "Main":
                return <Main />;
            case "Settings":
                return (
                    <Settings
                        notiCount={2}
                        notiDissapear={10}
                        notiPos={1}
                        onNotiPosChange={handleNotiPosChange}
                    />
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
