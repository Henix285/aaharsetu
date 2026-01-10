import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileLayout from "../components/layout/MobileLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, Filter, Star, MapPin } from "lucide-react";
import { PROVIDERS } from "../lib/mockData";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose, DrawerFooter } from "../components/ui/drawer";
import { Slider } from "../components/ui/slider";
import { Badge } from "../components/ui/badge";
import { useSEO } from "../hooks/use-seo";

export default function Explore() {
    useSEO({
        title: "Explore Services - CulinaryConnect",
        description: "Search specifically for cooks, caterers, vegetarian or vegan options."
    });

    // Custom hook replacement for getting query params
    const getQueryParam = (name) => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        return params.get(name);
    };

    const query = getQueryParam("q");

    // Determine initial states
    let initSearch = "";
    let initFilter = "All";

    if (query) {
        if (query === "Cook") initFilter = "Cooks";
        else if (query === "Caterer") initFilter = "Caterers";
        else if (query === "Cloud Kitchen") initFilter = "Cloud Kitchens";
        else initSearch = query;
    }

    const [search, setSearch] = useState(initSearch);
    const [activeFilter, setActiveFilter] = useState(initFilter);

    const filteredProviders = PROVIDERS.filter(p => {
        // 1. Text Search behaves as an override or specific search
        if (search) {
            const term = search.toLowerCase();
            return (
                p.name.toLowerCase().includes(term) ||
                p.type.toLowerCase().includes(term) ||
                p.cuisine.some(c => c.toLowerCase().includes(term))
            );
        }

        // 2. Category Filter
        if (activeFilter === "All") return true;
        if (activeFilter === "Cooks") return p.type === "cook";
        if (activeFilter === "Caterers") return p.type === "caterer";
        if (activeFilter === "Cloud Kitchens") return p.type === "kitchen";
        if (activeFilter === "Nearby") return true; // Mock: return all for now
        if (activeFilter === "Top Rated") return p.rating >= 4.8; // Strict top rated

        return true;
    });

    return (
        <MobileLayout>
            <div className="p-4 sticky top-0 bg-background/80 backdrop-blur-md z-10 border-b border-border/50">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search specifically..."
                            className="h-10 pl-9 rounded-xl bg-muted/50 border-transparent focus:bg-background"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                if (e.target.value) setActiveFilter("All");
                            }}
                        />
                    </div>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button size="icon" variant="outline" className="rounded-xl shrink-0">
                                <Filter className="w-4 h-4" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="p-6 space-y-6">
                                <DrawerHeader className="px-0">
                                    <DrawerTitle className="text-2xl font-heading">Filters</DrawerTitle>
                                </DrawerHeader>

                                <div className="space-y-4">
                                    <h3 className="font-bold">Price Range</h3>
                                    <Slider defaultValue={[50]} max={100} step={1} />
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>$10</span>
                                        <span>$100+</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-bold">Categories</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {["Cook", "Caterer", "Cloud Kitchen", "Vegetarian", "Vegan"].map((tag) => (
                                            <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-sm cursor-pointer hover:bg-primary/20 hover:text-primary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-bold">Rating</h3>
                                    <div className="flex gap-2">
                                        {[5, 4, 3, 2].map((stars) => (
                                            <Button key={stars} variant="outline" className="flex-1 rounded-xl">
                                                {stars} <Star className="w-3 h-3 ml-1 fill-current" />
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <DrawerFooter className="px-0">
                                    <Button className="h-12 rounded-xl text-lg">Apply Filters</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className="h-12 rounded-xl">Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>

                {/* Horizontal Filter Pills */}
                <div className="flex gap-2 overflow-x-auto py-4 hide-scrollbar">
                    {["All", "Cooks", "Caterers", "Cloud Kitchens", "Nearby", "Top Rated"].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveFilter(item);
                                setSearch(""); // Clear search when picking a filter
                            }}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeFilter === item
                                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                : "bg-card border border-border text-foreground hover:bg-muted"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 grid grid-cols-2 gap-4 pb-24">
                {filteredProviders.map((provider) => (
                    <Link key={provider.id} to={`/provider/${provider.id}`}>
                        {/* Changed Link href to Link to (react-router-dom) */}
                        <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-95 group border border-border/50 cursor-pointer">
                            <div className="aspect-[4/5] relative">
                                <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    {provider.rating}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                                    {/* Fixed bg-linear-to-t to bg-gradient-to-t */}
                                    <p className="text-[10px] uppercase font-bold text-white/80 mb-1">{provider.type}</p>
                                    <h3 className="font-heading font-bold text-lg leading-tight mb-1">{provider.name}</h3>
                                    <p className="text-xs text-white/70 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {provider.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </MobileLayout>
    );
}
