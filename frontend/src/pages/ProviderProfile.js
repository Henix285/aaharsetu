import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Changed to react-router-dom
import MobileLayout from "../components/layout/MobileLayout";
import { Button } from "../components/ui/button";
import { PROVIDERS } from "../lib/mockData";
import { ArrowLeft, Star, MapPin, BadgeCheck, ShieldCheck, Heart, MessageCircle, Calendar, Clock } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerFooter, DrawerClose } from "../components/ui/drawer";
import { CreditCard, Wallet, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../lib/utils";

import { useSEO } from "../hooks/use-seo";

export default function ProviderProfile() {
    const { id } = useParams(); // Use useParams from react-router-dom
    const navigate = useNavigate(); // Use useNavigate for navigation

    const provider = PROVIDERS.find(p => p.id === id) || PROVIDERS[0];

    useSEO({
        title: provider ? `${provider.name} - CulinaryConnect` : "Provider Profile",
        description: provider ? `Book ${provider.name}, a ${provider.type} in ${provider.location}.` : "View provider details."
    });

    const [bookingStep, setBookingStep] = useState("details"); // Removed TypeScript type annotation

    const handleBook = () => {
        setBookingStep("success");
        toast.success("Booking Confirmed!", {
            description: "You have successfully booked this service."
        });
    };

    return (
        <MobileLayout showNav={false}>
            {/* Header Image */}
            <div className="relative h-72">
                <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                {/* Fixed bg-linear-to-b to bg-gradient-to-b */}

                {/* Navigation */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center pt-6">
                    <button
                        onClick={() => navigate(-1)} // Use navigate(-1) for back
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all text-white"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all text-white">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Basic Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary text-white hover:bg-primary border-none">
                            {provider.type}
                        </Badge>
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-xs font-medium">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {provider.rating} ({provider.reviewCount} reviews)
                        </div>
                    </div>
                    <h1 className="text-3xl font-heading font-bold mb-1 shadow-black/20 drop-shadow-md">{provider.name}</h1>
                    <div className="flex items-center gap-2 text-sm text-white/90">
                        <MapPin className="w-4 h-4" />
                        {provider.location}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="bg-background relative rounded-t-3xl mt-4 px-6 pt-8 pb-32 min-h-[50vh]">
                <div className="flex flex-wrap gap-2 mb-6">
                    {provider.badges.map(badge => (
                        <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/30 text-accent-foreground text-xs font-bold border border-accent/20">
                            {badge.includes("Verified") ? <BadgeCheck className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                            {badge}
                        </div>
                    ))}
                </div>

                <Tabs defaultValue="about" className="w-full">
                    <TabsList className="w-full bg-muted/50 p-1 rounded-xl mb-6 grid grid-cols-3">
                        <TabsTrigger value="about" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">About</TabsTrigger>
                        <TabsTrigger value="menu" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Menu</TabsTrigger>
                        <TabsTrigger value="reviews" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">Reviews</TabsTrigger>
                    </TabsList>

                    <TabsContent value="about" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">About Provider</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {provider.description}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">Specialties</h3>
                            <div className="flex flex-wrap gap-2">
                                {provider.cuisine.map(c => (
                                    <span key={c} className="px-4 py-2 bg-muted rounded-xl text-sm font-medium">
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">Availability</h3>
                            <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-100">
                                <Calendar className="w-5 h-5" />
                                <span className="font-medium">{provider.availability}</span>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="menu" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-4">
                            {provider.menu?.map((item, index) => (
                                <div key={index} className="flex gap-4 p-3 bg-card rounded-2xl border border-border/50 shadow-sm">
                                    <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-muted">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-0.5">
                                        <div>
                                            <h4 className="font-bold text-base leading-tight mb-1">{item.name}</h4>
                                            <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                                        </div>
                                        <div className="font-bold text-primary">{item.price}</div>
                                    </div>
                                </div>
                            ))}
                            {(!provider.menu || provider.menu.length === 0) && (
                                <div className="text-center py-10 text-muted-foreground">
                                    No menu items available
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="space-y-4">
                            {provider.reviews?.map((review) => (
                                <div key={review.id} className="p-4 bg-card rounded-2xl border border-border/50 shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                                                <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-bold text-sm">{review.user}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">{review.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn("w-3 h-3", i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30")}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-foreground/80">{review.comment}</p>
                                </div>
                            ))}
                            {(!provider.reviews || provider.reviews.length === 0) && (
                                <div className="text-center py-10 text-muted-foreground">
                                    No reviews yet
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Floating Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border z-20 flex gap-4 max-w-md mx-auto w-full">
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl shrink-0 border-2">
                    <MessageCircle className="w-6 h-6" />
                </Button>

                <Drawer onOpenChange={(open) => !open && setTimeout(() => setBookingStep("details"), 200)}>
                    <DrawerTrigger asChild>
                        <Button className="flex-1 h-14 rounded-2xl text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all">
                            Book Now
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="p-6 max-w-md mx-auto w-full">
                            <DrawerHeader className="px-0 pt-0">
                                <DrawerTitle className="text-2xl font-heading text-center mb-4">
                                    {bookingStep === "details" && "Booking Details"}
                                    {bookingStep === "payment" && "Payment"}
                                    {bookingStep === "success" && "Confirmed"}
                                </DrawerTitle>
                            </DrawerHeader>

                            {bookingStep === "details" && (
                                <div className="space-y-6">
                                    <div className="bg-muted/50 p-4 rounded-2xl space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground font-medium">Service</span>
                                            <span className="font-bold">{provider.type === "cook" ? "Personal Chef" : provider.type}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground font-medium">Rate</span>
                                            <span className="font-bold">{provider.priceRange}</span>
                                        </div>
                                        <div className="h-px bg-border/50" />
                                        <div className="flex justify-between items-center text-lg">
                                            <span className="font-bold">Total Est.</span>
                                            <span className="font-bold text-primary">{provider.priceRange.split('/')[0]}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Date & Time</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="p-3 border rounded-xl flex items-center gap-2 font-medium">
                                                <Calendar className="w-4 h-4 text-primary" /> Today
                                            </div>
                                            <div className="p-3 border rounded-xl flex items-center gap-2 font-medium">
                                                <Clock className="w-4 h-4 text-primary" /> 7:00 PM
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={() => setBookingStep("payment")} className="w-full h-12 rounded-xl text-lg font-bold">
                                        Proceed to Payment
                                    </Button>
                                </div>
                            )}

                            {bookingStep === "payment" && (
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Payment Method</label>

                                        <div className="p-4 border-2 border-primary bg-primary/5 rounded-2xl flex items-center justify-between cursor-pointer transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                                    <Wallet className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Wallet Balance</p>
                                                    <p className="text-xs text-muted-foreground">$1,250.00 Available</p>
                                                </div>
                                            </div>
                                            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                            </div>
                                        </div>

                                        <div className="p-4 border border-border/50 rounded-2xl flex items-center justify-between opacity-60 grayscale cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                    <CreditCard className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Credit Card</p>
                                                    <p className="text-xs text-muted-foreground">**** 4242</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={handleBook} className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20">
                                        Pay & Book {provider.priceRange.split('/')[0]}
                                    </Button>
                                </div>
                            )}

                            {bookingStep === "success" && (
                                <div className="space-y-6 text-center py-4">
                                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in duration-300">
                                        <CheckCircle2 className="w-12 h-12" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Booking Successful!</h3>
                                        <p className="text-muted-foreground">Your booking with {provider.name} has been confirmed.</p>
                                    </div>
                                    <DrawerClose asChild>
                                        <Button className="w-full h-12 rounded-xl text-lg font-bold" onClick={() => setBookingStep("details")}>
                                            View My Bookings
                                        </Button>
                                    </DrawerClose>
                                </div>
                            )}
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </MobileLayout>
    );
}
