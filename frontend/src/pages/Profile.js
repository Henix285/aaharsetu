import React from "react";
import MobileLayout from "../components/layout/MobileLayout";
import ProviderBottomNav from "../components/ui/ProviderBottomNav";
import { useAuth } from "../context/AuthContext";
import { User, Bell, Shield, CircleHelp, LogOut, ChevronRight, Settings } from "lucide-react";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { useSEO } from "../hooks/use-seo";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Profile() {
    useSEO({
        title: "My Profile - CulinaryConnect",
        description: "Manage your account settings and preferences."
    });

    const { currentUser, userProfile } = useAuth();
    const NavComponent = userProfile?.role === 'provider' ? ProviderBottomNav : undefined;

    return (
        <MobileLayout NavComponent={NavComponent}>
            <div className="p-6 space-y-8">
                <h1 className="text-2xl font-heading font-bold">Profile</h1>

                {/* Profile Card */}
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary p-0.5">
                        <img
                            src={currentUser?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} // Use firebase photo or fallback
                            alt="Profile"
                            className="w-full h-full rounded-full bg-muted"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{currentUser?.displayName || "User"}</h2>
                        <p className="text-muted-foreground text-sm">{currentUser?.email || "email@example.com"}</p>
                        <Button variant="link" className="p-0 h-auto text-primary text-xs font-bold mt-1">
                            Edit Profile
                        </Button>
                    </div>
                </div>

                {/* Settings Groups */}
                <div className="space-y-6">
                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2">General</h3>
                        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Personal Info</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <Bell className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Notifications</span>
                                </div>
                                <Switch />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2">Security & Support</h3>
                        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                            <div className="p-4 flex items-center justify-between border-b border-border/50 cursor-pointer hover:bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Security</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex items-center justify-between border-b border-border/50 cursor-pointer hover:bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <CircleHelp className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Help & Support</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                                        <Settings className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Preferences</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </section>
                </div>

                <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100 font-bold"
                    onClick={() => signOut(auth)} // Added logout functionality
                >
                    <LogOut className="w-4 h-4 mr-2" /> Log Out
                </Button>

                <p className="text-center text-xs text-muted-foreground pt-4">App Version 1.0.0</p>
            </div>
        </MobileLayout>
    );
}
