import React, { useState } from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import ProviderBottomNav from "../../components/ui/ProviderBottomNav";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { ChefHat, ShoppingBag, DollarSign, Star, Plus, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

// Stats Card
const StatCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-card border border-border/50 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <p className="text-xs text-muted-foreground font-medium">{label}</p>
            <p className="text-xl font-bold font-heading">{value}</p>
        </div>
    </div>
);

export default function ProviderDashboard() {
    const { userProfile } = useAuth();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <MobileLayout showNav={true} NavComponent={ProviderBottomNav}>
            <div className="p-6 space-y-8">

                {/* Header */}
                <header className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">Kitchen Dashboard</p>
                        <h1 className="text-2xl font-bold font-heading text-primary">
                            {userProfile?.kitchenName || "My Kitchen"}
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 bg-card border border-border p-2 rounded-xl shadow-sm">
                        <span className={`text-xs font-bold ${isOpen ? 'text-green-600' : 'text-red-500'}`}>
                            {isOpen ? "OPEN" : "CLOSED"}
                        </span>
                        <Switch checked={isOpen} onCheckedChange={setIsOpen} />
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <StatCard icon={ShoppingBag} label="Active Orders" value="3" color="bg-blue-100 text-blue-600" />
                    <StatCard icon={DollarSign} label="Today's Earnings" value="₹1,250" color="bg-green-100 text-green-600" />
                    <StatCard icon={Star} label="Rating" value="4.8" color="bg-yellow-100 text-yellow-600" />
                    <StatCard icon={ChefHat} label="Total Orders" value="128" color="bg-purple-100 text-purple-600" />
                </div>

                {/* Quick Actions */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold font-heading">Quick Actions</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl border-dashed">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <Plus className="w-6 h-6" />
                            </div>
                            <span className="font-medium">Add Item</span>
                        </Button>
                        <Button variant="outline" className="h-24 flex flex-col gap-2 rounded-2xl border-dashed">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                <UtensilsCrossed className="w-6 h-6" />
                            </div>
                            <span className="font-medium">Manage Menu</span>
                        </Button>
                    </div>
                </section>

                {/* Recent Orders (Placeholder) */}
                <section className="space-y-4">
                    <h2 className="text-lg font-bold font-heading">Recent Orders</h2>
                    <div className="bg-muted/30 rounded-2xl p-8 text-center space-y-2">
                        <ShoppingBag className="w-10 h-10 mx-auto text-muted-foreground/50" />
                        <p className="text-muted-foreground">No new orders yet.</p>
                    </div>
                </section>
            </div>
        </MobileLayout>
    );
}
