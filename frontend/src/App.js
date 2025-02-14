import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ScanResult from "./pages/ScanResult";
import Profile from "./components/Profile";

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/scan-result" element={<ScanResult />} />
            </Routes>
        </div>
    );
}

export default App;
