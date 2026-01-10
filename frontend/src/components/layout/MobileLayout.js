import React from "react";
import BottomNav from "../ui/BottomNav";
import { Toaster } from "../ui/toaster";

export default function MobileLayout({ children, showNav = true }) {
    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex justify-center">
            <div className="w-full max-w-md bg-background h-screen shadow-2xl relative flex flex-col overflow-hidden">
                <main className="flex-1 overflow-y-auto pb-20 hide-scrollbar">
                    {children}
                </main>
                {showNav && <BottomNav />}
                <Toaster />
            </div>
        </div>
    );
}
