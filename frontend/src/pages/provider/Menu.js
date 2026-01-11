import React from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import ProviderBottomNav from "../../components/ui/ProviderBottomNav";
import { Button } from "../../components/ui/button";
import { Plus, Edit2, Trash2 } from "lucide-react";

const MOCK_MENU = [
    { id: 1, name: "Hyderabadi Chicken Biryani", price: "₹250", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=60" },
    { id: 2, name: "Paneer Butter Masala", price: "₹180", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=60" },
    { id: 3, name: "Butter Naan", price: "₹40", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&auto=format&fit=crop&q=60" },
];

export default function ProviderMenu() {
    return (
        <MobileLayout showNav={true} NavComponent={ProviderBottomNav}>
            <div className="p-6 space-y-6 pb-24">
                <header className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold font-heading">My Menu</h1>
                        <p className="text-muted-foreground">3 items active</p>
                    </div>
                    <Button size="icon" className="rounded-full h-10 w-10 shadow-lg shadow-primary/20">
                        <Plus className="w-5 h-5" />
                    </Button>
                </header>

                <div className="grid gap-4">
                    {MOCK_MENU.map((item) => (
                        <div key={item.id} className="bg-card border border-border/50 rounded-2xl p-3 flex gap-4 shadow-sm">
                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-1">
                                <div>
                                    <h3 className="font-bold leading-tight line-clamp-1">{item.name}</h3>
                                    <p className="text-primary font-bold">{item.price}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                                        <Edit2 className="w-3 h-3 mr-1" /> Edit
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-7 px-2 text-destructive hover:text-destructive hover:bg-destructive/10">
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 text-center space-y-2 border border-dashed border-border">
                    <p className="text-muted-foreground text-sm">Want to add more variety?</p>
                    <Button variant="outline" className="w-full">Add New Category</Button>
                </div>
            </div>
        </MobileLayout>
    );
}
