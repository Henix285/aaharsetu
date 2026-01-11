import React from "react";
import MobileLayout from "../../components/layout/MobileLayout";
import ProviderBottomNav from "../../components/ui/ProviderBottomNav";
import { Button } from "../../components/ui/button";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon, FileText } from "lucide-react";
import { Badge } from "../../components/ui/badge";

const TRANSACTIONS = [
    { id: 1, type: "payout", title: "Weekly Payout", amount: "-₹5,240", date: "Today, 10:00 AM", status: "processing" },
    { id: 2, type: "earning", title: "Order #1234", amount: "+₹450", date: "Yesterday, 8:30 PM", status: "completed" },
    { id: 3, type: "earning", title: "Order #1233", amount: "+₹380", date: "Yesterday, 7:15 PM", status: "completed" },
];

export default function ProviderWallet() {
    return (
        <MobileLayout showNav={true} NavComponent={ProviderBottomNav}>
            <div className="p-6 space-y-8 pb-24">
                <header>
                    <h1 className="text-2xl font-bold font-heading">Wallet</h1>
                    <p className="text-muted-foreground">Manage your earnings.</p>
                </header>

                {/* Balance Card */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-xl shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-primary-foreground/80 font-medium mb-1">Total Earnings</p>
                        <h2 className="text-4xl font-bold mb-6">₹12,450.00</h2>
                        <div className="flex gap-3">
                            <Button variant="secondary" className="flex-1 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm">
                                <ArrowUpRight className="w-4 h-4 mr-2" /> Withdraw
                            </Button>
                            <Button variant="secondary" className="flex-1 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm">
                                <FileText className="w-4 h-4 mr-2" /> Statement
                            </Button>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <WalletIcon className="w-32 h-32" />
                    </div>
                </div>

                {/* Analytics Snapshot */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card border border-border/50 p-4 rounded-2xl">
                        <p className="text-xs text-muted-foreground font-medium">This Week</p>
                        <p className="text-xl font-bold text-green-600">+₹2,450</p>
                    </div>
                    <div className="bg-card border border-border/50 p-4 rounded-2xl">
                        <p className="text-xs text-muted-foreground font-medium">Pending Payout</p>
                        <p className="text-xl font-bold text-orange-600">₹5,240</p>
                    </div>
                </div>

                {/* Transactions */}
                <section>
                    <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
                    <div className="space-y-4">
                        {TRANSACTIONS.map((tx) => (
                            <div key={tx.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'payout' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                                        {tx.type === 'payout' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">{tx.title}</p>
                                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`font-bold text-sm ${tx.type === 'payout' ? 'text-foreground' : 'text-green-600'}`}>
                                        {tx.amount}
                                    </p>
                                    <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-normal border-border/50 bg-muted/50">
                                        {tx.status}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MobileLayout>
    );
}
