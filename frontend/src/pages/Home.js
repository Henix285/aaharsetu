import React from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/layout/MobileLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { MapPin, Search, Star } from "lucide-react";
import { CATEGORIES, PROVIDERS } from "../lib/mockData";
import { cn } from "../lib/utils";
import { useSEO } from "../hooks/use-seo";

// Provider Card Component
const ProviderCard = ({ provider }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/provider/${provider.id}`)}
            className="bg-card rounded-3xl p-3 shadow-sm border border-border/50 hover:shadow-md transition-all active:scale-95 cursor-pointer flex gap-4"
        >
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-1 pr-1">
                <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {provider.type}
                    </span>
                    <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold">{provider.rating}</span>
                    </div>
                </div>
                <h3 className="font-heading font-bold text-lg leading-tight mb-1 line-clamp-1">{provider.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {provider.location}
                </p>
                <div className="flex gap-2">
                    {provider.cuisine.slice(0, 2).map((c) => (
                        <span key={c} className="text-[10px] bg-muted px-2 py-0.5 rounded-md text-muted-foreground">
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    useSEO({
        title: "Home - CulinaryConnect",
        description: "Find and hire the best personal cooks, caterers, and cloud kitchens near you."
    });
    const navigate = useNavigate();

    return (
        <MobileLayout>
            <div className="p-6 pb-24 space-y-8">
                {/* Header */}
                <header className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-muted-foreground font-medium mb-1">Current Location</p>
                        <div className="flex items-center gap-1 text-primary font-bold">
                            <MapPin className="w-4 h-4" />
                            <span>New York, USA</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-muted overflow-hidden border-2 border-background shadow-sm">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                </header>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                        placeholder="Find cooks, caterers..."
                        className="h-14 pl-12 rounded-2xl bg-white shadow-sm border-transparent focus:border-primary/50 text-base"
                    />
                </div>

                {/* Categories */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-xl font-heading font-bold">Services</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {CATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                className="flex flex-col items-center gap-2 group cursor-pointer"
                                onClick={() => {
                                    const query = cat.name === "Hire a Cook" ? "Cook" :
                                        cat.name === "Book Caterer" ? "Caterer" :
                                            "Cloud Kitchen";
                                    navigate(`/explore?q=${encodeURIComponent(query)}`);
                                }}
                            >
                                <div className={cn(
                                    "w-full aspect-square rounded-3xl flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 shadow-sm",
                                    cat.color
                                )}>
                                    <cat.icon className="w-8 h-8" />
                                </div>
                                <span className="text-xs font-bold text-center">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured */}
                <section>
                    <div className="flex justify-between items-end mb-4">
                        <h2 className="text-xl font-heading font-bold">Top Rated</h2>
                        <Button variant="ghost" className="text-primary h-auto p-0 text-sm font-medium hover:bg-transparent">See all</Button>
                    </div>
                    <div className="space-y-4">
                        {PROVIDERS.map((provider) => (
                            <ProviderCard key={provider.id} provider={provider} />
                        ))}
                    </div>
                </section>
            </div>
        </MobileLayout>
    );
}
