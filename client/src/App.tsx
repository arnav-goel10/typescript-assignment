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
                return (
                    <Main
                        notiCount={notiCount}
                        notiDissapear={notiDissapear}
                        notiPos={notiPos}
                    />
                );
            case "Settings":
                return (
                    <Settings
                        notiCount={notiCount}
                        notiDissapear={notiDissapear}
                        notiPos={notiPos}
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
