import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { User, ChefHat, ArrowRight, Loader2 } from "lucide-react";
// Button import removed as it was causing ESLint warning

export default function RoleSelection() {
    const { currentUser, refreshProfile } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSelectRole = async (role) => {
        if (!currentUser) {
            alert("User not authenticated!");
            return;
        }
        setLoading(true);

        const timeout = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Request timed out. Check your internet connection or if Firestore is enabled in Firebase Console.")), 15000)
        );

        try {
            console.log("Setting role for user:", currentUser.uid, role);

            // Race between DB write and 15s timeout
            await Promise.race([
                setDoc(doc(db, "users", currentUser.uid), {
                    role: role,
                    email: currentUser.email,
                    createdAt: new Date(),
                }, { merge: true }),
                timeout
            ]);

            console.log("Role set inside Firestore. Refreshing profile...");

            // Race between Profile Refresh and 15s timeout
            await Promise.race([
                refreshProfile(),
                timeout
            ]);

            console.log("Profile refreshed. Navigating...");
            navigate("/profile-setup");
        } catch (error) {
            console.error("Error setting role:", error);
            alert("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

            <div className="w-full max-w-4xl space-y-12 relative z-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
                        How will you use <span className="text-primary">AaharSetu?</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Choose your role to get started. Don't worry, you can't switch this later without contacting support.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Customer Card */}
                    <button
                        onClick={() => handleSelectRole("customer")}
                        disabled={loading}
                        className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-3xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <User className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">I want to order food</h3>
                        <p className="text-muted-foreground mb-8">
                            Discover authentic homemade meals from local kitchens near you.
                        </p>
                        <div className="mt-auto flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                            Continue as Customer <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                        {loading && <div className="absolute inset-0 bg-background/50 flex items-center justify-center rounded-3xl"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>}
                    </button>

                    {/* Provider Card */}
                    <button
                        onClick={() => handleSelectRole("provider")}
                        disabled={loading}
                        className="group relative flex flex-col items-center text-center p-8 md:p-12 rounded-3xl border border-border/50 bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                        <div className="w-24 h-24 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <ChefHat className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">I want to cook & sell</h3>
                        <p className="text-muted-foreground mb-8">
                            Turn your kitchen into a business and share your culinary passion.
                        </p>
                        <div className="mt-auto flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                            Continue as Chef <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                        {loading && <div className="absolute inset-0 bg-background/50 flex items-center justify-center rounded-3xl"><Loader2 className="animate-spin w-8 h-8 text-primary" /></div>}
                    </button>
                </div>
            </div>
        </div>
    );
}
