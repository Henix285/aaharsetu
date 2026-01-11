import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./Login";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Bookings from "./pages/Bookings";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import ProviderProfile from "./pages/ProviderProfile"; // Public provider view
import RoleSelection from "./pages/onboarding/RoleSelection";
import ProfileSetup from "./pages/onboarding/ProfileSetup";
import ProviderDashboard from "./pages/provider/Dashboard";
import ProviderOrders from "./pages/provider/Orders";
import ProviderMenu from "./pages/provider/Menu";
import ProviderWallet from "./pages/provider/Wallet";
import ProviderProfilePage from "./pages/provider/Profile"; // Provider private settings
import { Loader2 } from "lucide-react";

// 1. Basic Auth Guard
const RequireAuth = ({ children }) => {
    const { currentUser, loading } = useAuth();
    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
    return currentUser ? children : <Navigate to="/login" />;
};

// 2. Full Profile Guard (Checks Role + Profile Completion)
const RequireProfile = ({ children }) => {
    const { currentUser, userProfile, loading } = useAuth();
    const location = useLocation();

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

    if (!currentUser) return <Navigate to="/login" state={{ from: location }} />;

    if (!userProfile?.role) return <Navigate to="/role-selection" />;
    if (!userProfile?.isProfileComplete) return <Navigate to="/profile-setup" />;

    return children;
};

// 3. Smart Redirect based on Role
const RoleBasedRedirect = () => {
    const { currentUser, userProfile, loading } = useAuth();

    if (loading) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
    if (!currentUser) return <Navigate to="/login" />;

    if (userProfile?.role === 'provider') return <Navigate to="/provider-dashboard" />;
    return <Navigate to="/home" />;
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Public Route */}
                    <Route path="/login" element={<LoginWrapper />} />

                    {/* Onboarding */}
                    <Route path="/role-selection" element={<RequireAuth><RoleSelection /></RequireAuth>} />
                    <Route path="/profile-setup" element={<RequireAuth><ProfileSetup /></RequireAuth>} />

                    {/* Customer Routes */}
                    <Route path="/home" element={<RequireProfile><Home /></RequireProfile>} />
                    <Route path="/explore" element={<RequireProfile><Explore /></RequireProfile>} />
                    <Route path="/bookings" element={<RequireProfile><Bookings /></RequireProfile>} />

                    {/* Common Protected Routes */}
                    <Route path="/wallet" element={<RequireProfile><Wallet /></RequireProfile>} />
                    <Route path="/profile" element={<RequireProfile><Profile /></RequireProfile>} />
                    <Route path="/provider/:id" element={<RequireProfile><ProviderProfile /></RequireProfile>} />

                    {/* Provider Routes */}
                    <Route path="/provider-dashboard" element={<RequireProfile><ProviderDashboard /></RequireProfile>} />
                    <Route path="/provider-profile" element={<RequireProfile><ProviderProfilePage /></RequireProfile>} />
                    <Route path="/provider-orders" element={<RequireProfile><ProviderOrders /></RequireProfile>} />
                    <Route path="/provider-menu" element={<RequireProfile><ProviderMenu /></RequireProfile>} />
                    <Route path="/provider-wallet" element={<RequireProfile><ProviderWallet /></RequireProfile>} />

                    {/* Root Redirect */}
                    <Route path="/" element={<RoleBasedRedirect />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

// Wrapper to prevent logged-in users from seeing login
function LoginWrapper() {
    const { currentUser, loading } = useAuth();
    if (loading) return null;
    return currentUser ? <RoleBasedRedirect /> : <Login />;
}

export default App;
