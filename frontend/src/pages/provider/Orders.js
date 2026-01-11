import React from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import ProviderBottomNav from "../../components/ui/ProviderBottomNav";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Calendar, Clock, MapPin, CheckCircle, XCircle } from "lucide-react";

const MOCK_ORDERS = [
    {
        id: "1",
        customer: "Alice Smith",
        items: ["Chicken Biryani x2", "Raita x1"],
        total: "₹450",
        status: "pending",
        time: "Today, 7:30 PM",
        location: "Block A, Sector 45"
    },
    {
        id: "2",
        customer: "Bob Jones",
        items: ["Paneer Butter Masala", "Naan x3"],
        total: "₹380",
        status: "confirmed",
        time: "Today, 8:00 PM",
        location: "Green Valley Apts"
    }
];

export default function ProviderOrders() {

    return (
        <MobileLayout showNav={true} NavComponent={ProviderBottomNav}>
            <div className="p-6 space-y-6 pb-24">
                <header>
                    <h1 className="text-2xl font-bold font-heading">Incoming Orders</h1>
                    <p className="text-muted-foreground">Manage your kitchen's requests.</p>
                </header>

                <div className="space-y-4">
                    {MOCK_ORDERS.map((order) => (
                        <div key={order.id} className="bg-card border border-border/50 rounded-2xl p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-bold text-lg">{order.customer}</h3>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <MapPin className="w-3 h-3" /> {order.location}
                                    </div>
                                </div>
                                <Badge variant={order.status === 'pending' ? 'outline' : 'default'} className={
                                    order.status === 'pending' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100 border-none' : 'bg-green-100 text-green-700 hover:bg-green-100 border-none'
                                }>
                                    {order.status.toUpperCase()}
                                </Badge>
                            </div>

                            <div className="bg-muted/30 p-3 rounded-xl mb-3">
                                <ul className="text-sm space-y-1">
                                    {order.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-2 border-t border-dashed border-border pt-2 flex justify-between items-center font-bold">
                                    <span>Total</span>
                                    <span>{order.total}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Today</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {order.status === 'pending' ? 'Due soon' : 'Scheduled'}</span>
                            </div>

                            {order.status === 'pending' && (
                                <div className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700">
                                        <XCircle className="w-4 h-4 mr-2" /> Reject
                                    </Button>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                                        <CheckCircle className="w-4 h-4 mr-2" /> Accept
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </MobileLayout>
    );
}
