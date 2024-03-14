import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./pages/Settings/Settings";
import Main from "./pages/Main/Main";

const App: React.FC = React.memo(() => {
    const [notiCount, setNotiCount] = useState<number>(5);
    const [notiPos, setNotiPos] = useState<1 | 2 | 3 | 4>(1);
    const [notiDissapear, setNotiDissapear] = useState<number>(5);

    const handleNotiPosChange = (newPos: 1 | 2 | 3 | 4) => {
        setNotiPos(newPos);
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main
                            notiCount={notiCount}
                            notiDissapear={notiDissapear}
                            notiPos={notiPos}
                        />
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <Settings
                            notiCount={notiCount}
                            notiDissapear={notiDissapear}
                            notiPos={notiPos}
                            onNotiPosChange={handleNotiPosChange}
                        />
                    }
                />
            </Routes>
        </Router>
    );
});

export default App;
