import React from "react";
import MobileLayout from "../components/layout/MobileLayout";
import { TRANSACTIONS } from "../lib/mockData";
import { Plus, Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, CreditCard, History } from "lucide-react";
import { Button } from "../components/ui/button";
import { useSEO } from "../hooks/use-seo";

export default function Wallet() {
    useSEO({
        title: "My Wallet - CulinaryConnect",
        description: "Check your balance, add money, and view transaction history."
    });
    return (
        <MobileLayout>
            <div className="p-6 space-y-8">
                <h1 className="text-2xl font-heading font-bold">Wallet</h1>

                {/* Balance Card */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-6 shadow-lg shadow-primary/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <p className="text-primary-foreground/80 font-medium mb-1 flex items-center gap-2">
                            <WalletIcon className="w-4 h-4" /> Total Balance
                        </p>
                        <h2 className="text-4xl font-bold mb-6">$1,250.00</h2>

                        <div className="flex gap-3">
                            <Button variant="secondary" className="flex-1 rounded-xl font-bold bg-white text-primary border-none hover:bg-white/90">
                                <Plus className="w-4 h-4 mr-1" /> Add Money
                            </Button>
                            <Button variant="outline" className="flex-1 rounded-xl font-bold border-white/30 text-white hover:bg-white/10 bg-transparent">
                                Withdraw
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm">Payment Methods</span>
                    </div>
                    <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col items-center gap-2 cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                            <History className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-sm">Statements</span>
                    </div>
                </div>

                {/* Transactions */}
                <section className="space-y-4">
                    <h3 className="font-heading font-bold text-lg">Recent Transactions</h3>
                    <div className="space-y-3">
                        {TRANSACTIONS.map((transaction) => (
                            <div key={transaction.id} className="flex items-center gap-4 bg-card rounded-2xl p-4 border border-border/50">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    {transaction.type === 'credit' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">{transaction.description}</h4>
                                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                                </div>
                                <span className={`font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-foreground'
                                    }`}>
                                    {transaction.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MobileLayout>
    );
}
