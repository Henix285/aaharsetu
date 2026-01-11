import React from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import ProviderBottomNav from "../../components/ui/ProviderBottomNav";
import { useAuth } from "../../context/AuthContext";
import { User, Bell, Store, LogOut, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function ProviderProfile() {
    const { userProfile } = useAuth();
    const user = auth.currentUser;

    return (
        <MobileLayout showNav={true} NavComponent={ProviderBottomNav}>
            <div className="p-6 space-y-8 pb-24">
                <header>
                    <h1 className="text-2xl font-bold font-heading">Settings</h1>
                    <p className="text-muted-foreground">Manage your kitchen & account.</p>
                </header>

                {/* Profile Card */}
                <div className="flex items-center gap-4 bg-card p-4 rounded-2xl border border-border/50 shadow-sm">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                        {userProfile?.kitchenName?.[0] || "K"}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">{userProfile?.kitchenName || "My Kitchen"}</h2>
                        <p className="text-muted-foreground text-sm">{user?.email}</p>
                        <Badge variant="outline" className="mt-1 border-primary/20 text-primary bg-primary/5">
                            Provider
                        </Badge>
                    </div>
                </div>

                {/* Settings Groups */}
                <div className="space-y-6">
                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2">Kitchen Management</h3>
                        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                            <div className="p-4 flex items-center justify-between border-b border-border/50 cursor-pointer hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                                        <Store className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Kitchen Details</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex items-center justify-between border-b border-border/50 cursor-pointer hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Business Hours</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Delivery Radius</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider pl-2">App Settings</h3>
                        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                            <div className="p-4 flex items-center justify-between border-b border-border/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                                        <Bell className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Order Notifications</span>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-sm">Account Info</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                        </div>
                    </section>
                </div>

                <Button
                    variant="outline"
                    className="w-full h-12 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100 font-bold shadow-sm"
                    onClick={() => signOut(auth)}
                >
                    <LogOut className="w-4 h-4 mr-2" /> Log Out
                </Button>
            </div>
        </MobileLayout>
    );
}

// Simple Badge component since I haven't imported the UI one yet in this file scope
function Badge({ children, className, variant }) {
    return (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
            {children}
        </span>
    );
}
