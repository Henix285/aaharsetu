import React from "react";
import MobileLayout from "../components/layout/MobileLayout";
import { BOOKINGS } from "../lib/mockData";
import { Calendar, Clock, MoreHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { useSEO } from "../hooks/use-seo";

export default function Bookings() {
    useSEO({
        title: "My Bookings - CulinaryConnect",
        description: "View and manage your upcoming and past bookings."
    });
    const upcomingBookings = BOOKINGS.filter(b => b.status === "upcoming");
    const pastBookings = BOOKINGS.filter(b => b.status === "completed");

    return (
        <MobileLayout>
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-heading font-bold">My Bookings</h1>

                {/* Upcoming Section */}
                {upcomingBookings.length > 0 && (
                    <section className="space-y-4">
                        <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Upcoming</h2>
                        {upcomingBookings.map((booking) => (
                            <div key={booking.id} className="bg-card rounded-3xl p-4 shadow-sm border border-border/50 space-y-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                                        <img src={booking.providerImage} alt={booking.providerName} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg leading-tight">{booking.providerName}</h3>
                                        <p className="text-primary font-bold">{booking.price}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 bg-muted/50 rounded-xl p-3 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                                            <Calendar className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase">Date</p>
                                            <p className="font-bold text-sm">{booking.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-muted/50 rounded-xl p-3 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-primary shadow-sm">
                                            <Clock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase">Time</p>
                                            <p className="font-bold text-sm">{booking.time}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button className="flex-1 rounded-xl font-bold">View Details</Button>
                                    <Button variant="outline" size="icon" className="rounded-xl">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Past Section */}
                <section className="space-y-4">
                    <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Past</h2>
                    {pastBookings.map((booking) => (
                        <div key={booking.id} className="bg-card/50 rounded-3xl p-4 border border-border/30 flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 grayscale">
                                <img src={booking.providerImage} alt={booking.providerName} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-heading font-bold text-base leading-tight text-muted-foreground">{booking.providerName}</h3>
                                <p className="text-xs text-muted-foreground">{booking.date} • {booking.price}</p>
                            </div>
                            <Button variant="ghost" size="sm" className="text-primary font-bold hover:bg-transparent h-auto p-0">
                                Rebook
                            </Button>
                        </div>
                    ))}
                </section>
            </div>
        </MobileLayout>
    );
}
