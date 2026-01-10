import { Home, Search, Calendar, Wallet, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // Changed to react-router-dom
import { cn } from "../../lib/utils";

export default function BottomNav() {
    const location = useLocation(); // returns location object
    const currentPath = location.pathname;

    const navItems = [
        { href: "/home", icon: Home, label: "Home" },
        { href: "/explore", icon: Search, label: "Explore" },
        { href: "/bookings", icon: Calendar, label: "Bookings" },
        { href: "/wallet", icon: Wallet, label: "Wallet" },
        { href: "/profile", icon: User, label: "Profile" },
    ];

    return (
        <nav className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border py-2 px-4 z-50">
            <ul className="flex justify-between items-center">
                {navItems.map((item) => {
                    const isActive = currentPath === item.href;
                    return (
                        <li key={item.href}>
                            <Link to={item.href} className={cn(
                                "flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300",
                                isActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                            )}>
                                <item.icon
                                    className={cn(
                                        "w-6 h-6 transition-all duration-300",
                                        isActive && "fill-current scale-110"
                                    )}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
