import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookings from "./pages/Bookings";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import ProviderProfile from "./pages/ProviderProfile";

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
                <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
                <Route path="/explore" element={user ? <Explore /> : <Navigate to="/login" />} />
                <Route path="/bookings" element={user ? <Bookings /> : <Navigate to="/login" />} />
                <Route path="/wallet" element={user ? <Wallet /> : <Navigate to="/login" />} />
                <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/provider/:id" element={user ? <ProviderProfile /> : <Navigate to="/login" />} />

                {/* Redirect root to home if logged in, else login */}
                <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
            </Routes>
        </Router>
    );
}

export default App;
