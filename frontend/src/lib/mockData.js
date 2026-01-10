import { ChefHat, UtensilsCrossed, Truck, Star, MapPin } from "lucide-react";

export const PROVIDERS = [
    {
        id: "1",
        name: "Chef Elena Rodriguez",
        type: "cook",
        rating: 4.9,
        reviewCount: 124,
        cuisine: ["Italian", "Mediterranean"],
        location: "Downtown",
        priceRange: "$25/hr",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800",
        badges: ["Verified", "Hygiene Certified"],
        description: "Professional personal chef with 10 years of experience in fine dining. I specialize in healthy, organic Italian cuisine.",
        availability: "Mon-Fri, 10am - 8pm",
        menu: [
            {
                name: "Truffle Mushroom Risotto",
                description: "Creamy arborio rice with black truffle oil and wild mushrooms.",
                price: "$45",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400"
            },
            {
                name: "Mediterranean Salad Bowl",
                description: "Fresh greens, feta, olives, and cherry tomatoes with vinaigrette.",
                price: "$18",
                image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400"
            },
            {
                name: "Grilled Salmon",
                description: "Freshly caught salmon with asparagus and lemon butter sauce.",
                price: "$32",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&q=80&w=400"
            }
        ],
        reviews: [
            {
                id: "r1",
                user: "Sarah Johnson",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                rating: 5,
                date: "2 days ago",
                comment: "Chef Elena is amazing! The risotto was the best I've ever had."
            },
            {
                id: "r2",
                user: "Mike Chen",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
                rating: 4,
                date: "1 week ago",
                comment: "Great food, but arrived a bit late. The taste made up for it though!"
            }
        ]
    },
    {
        id: "2",
        name: "Golden Spoon Catering",
        type: "caterer",
        rating: 4.7,
        reviewCount: 89,
        cuisine: ["Asian Fusion", "Continental"],
        location: "Westside",
        priceRange: "$15/plate",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
        badges: ["Top Rated", "Large Events"],
        description: "Full-service catering for weddings, corporate events, and private parties. We bring the restaurant experience to you.",
        availability: "Available for booking",
        menu: [
            {
                name: "Wedding Buffet Standard",
                description: "Complete buffet setup with 3 appetizers, 4 mains, and 2 desserts.",
                price: "$40/head",
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400"
            },
            {
                name: "Corporate Lunch Box",
                description: "Individually packed lunches with sandwich, fruit, and drink.",
                price: "$15/box",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
            }
        ],
        reviews: [
            {
                id: "r3",
                user: "Emily Davis",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
                rating: 5,
                date: "3 weeks ago",
                comment: "Hired them for our office party. flawless service and delicious food."
            }
        ]
    },
    {
        id: "3",
        name: "Mama's Cloud Kitchen",
        type: "kitchen",
        rating: 4.8,
        reviewCount: 312,
        cuisine: ["Home-style", "Indian"],
        location: "North Hills",
        priceRange: "$10/meal",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        badges: ["Fast Delivery", "Hygiene Certified"],
        description: "Authentic home-cooked meals delivered to your doorstep. Taste the love in every bite.",
        availability: "Open Now",
        menu: [
            {
                name: "Butter Chicken",
                description: "Classic creamy tomato curry with tender chicken pieces.",
                price: "$14",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400"
            },
            {
                name: "Vegetable Biryani",
                description: "Aromatic basmati rice cooked with mixed vegetables and spices.",
                price: "$12",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=400"
            }
        ],
        reviews: [
            {
                id: "r4",
                user: "Raj Patel",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raj",
                rating: 4,
                date: "Yesterday",
                comment: "Very authentic taste. Reminds me of home."
            }
        ]
    },
    {
        id: "4",
        name: "Chef Marcus Chen",
        type: "cook",
        rating: 4.6,
        reviewCount: 56,
        cuisine: ["Chinese", "Thai"],
        location: "Chinatown",
        priceRange: "$30/hr",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
        badges: ["Verified"],
        description: "Expert in Asian cuisine. I can prepare weekly meal preps or cook for special dinner parties.",
        availability: "Weekends only",
        menu: [
            {
                name: "Dim Sum Platter",
                description: "Assorted steamed dumplings with dipping sauces.",
                price: "$22",
                image: "https://images.unsplash.com/photo-1496116218417-7a18d7d94a61?auto=format&fit=crop&q=80&w=400"
            }
        ],
        reviews: []
    },
    {
        id: "5",
        name: "Green Leaf Eats",
        type: "kitchen",
        rating: 4.5,
        reviewCount: 150,
        cuisine: ["Vegan", "Salads"],
        location: "Uptown",
        priceRange: "$12/bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        badges: ["Healthy Choice"],
        description: "Fresh, organic, and delicious vegan bowls. Perfect for a healthy lunch.",
        availability: "11am - 9pm",
        menu: [
            {
                name: "Buddha Bowl",
                description: "Quinoa, roasted chickpeas, avocado, kale, and tahini dressing.",
                price: "$11",
                image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400"
            }
        ],
        reviews: []
    },
    {
        id: "6",
        name: "Taco Fiesta",
        type: "caterer",
        rating: 4.5,
        reviewCount: 42,
        cuisine: ["Mexican", "Tacos"],
        location: "Westside",
        priceRange: "$12/head",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800",
        badges: ["Party Favorite"],
        description: "Authentic street-style tacos for your events.",
        availability: "Weekends",
        menu: [],
        reviews: []
    },
    {
        id: "7",
        name: "Sushi Master Ken",
        type: "cook",
        rating: 4.9,
        reviewCount: 210,
        cuisine: ["Japanese", "Sushi"],
        location: "Downtown",
        priceRange: "$50/hr",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
        badges: ["Verified", "Artisan"],
        description: "Traditional Omakase experience in your home.",
        availability: "Tue-Sat",
        menu: [],
        reviews: []
    },
    {
        id: "8",
        name: "Burger Joint",
        type: "kitchen",
        rating: 4.2,
        reviewCount: 300,
        cuisine: ["American", "Burgers"],
        location: "Uptown",
        priceRange: "$10/burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
        badges: ["Fast Delivery"],
        description: "Juicy, handmade burgers delivered hot.",
        availability: "10am-11pm",
        menu: [],
        reviews: []
    },
    {
        id: "9",
        name: "Curry House Express",
        type: "kitchen",
        rating: 4.0,
        reviewCount: 85,
        cuisine: ["Indian", "Fast Food"],
        location: "Suburbs",
        priceRange: "$12/meal",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
        badges: [],
        description: "Quick and spicy Indian curries.",
        availability: "Daily",
        menu: [],
        reviews: []
    },
    {
        id: "10",
        name: "Pierre's Patisserie",
        type: "caterer",
        rating: 4.8,
        reviewCount: 150,
        cuisine: ["French", "Bakery"],
        location: "Arts District",
        priceRange: "$20/box",
        image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&q=80&w=800",
        badges: ["Dessert Specialist"],
        description: "Exquisite French pastries and desserts for high-tea.",
        availability: "Morning orders",
        menu: [],
        reviews: []
    },
    {
        id: "11",
        name: "Vegan Vibes",
        type: "kitchen",
        rating: 4.6,
        reviewCount: 90,
        cuisine: ["Vegan", "Healthy"],
        location: "North Hills",
        priceRange: "$14/bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        badges: ["Eco-Friendly"],
        description: "Plant-based goodness for a better planet.",
        availability: "10am-8pm",
        menu: [],
        reviews: []
    },
    {
        id: "12",
        name: "BBQ King",
        type: "caterer",
        rating: 4.7,
        reviewCount: 220,
        cuisine: ["American", "BBQ"],
        location: "Westside",
        priceRange: "$18/lb",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=800",
        badges: ["Crowd Pleaser"],
        description: "Slow-smoked briskets and ribs.",
        availability: "Weekends",
        menu: [],
        reviews: []
    },
    {
        id: "13",
        name: "Chef Ananya",
        type: "cook",
        rating: 4.8,
        reviewCount: 65,
        cuisine: ["Indian", "Fusion"],
        location: "Suburbs",
        priceRange: "$22/hr",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800",
        badges: ["Verified"],
        description: "Home-style Indian cooking with a modern twist.",
        availability: "Flexible",
        menu: [],
        reviews: []
    },
    {
        id: "14",
        name: "Mediterranean Delights",
        type: "caterer",
        rating: 4.9,
        reviewCount: 180,
        cuisine: ["Lebanese", "Mediterranean"],
        location: "Downtown",
        priceRange: "$25/plate",
        image: "https://images.unsplash.com/photo-1544333323-ecdffe34d456?auto=format&fit=crop&q=80&w=800",
        badges: ["Top Rated"],
        description: "Falafel, hummus, and kebabs for your party.",
        availability: "Available",
        menu: [],
        reviews: []
    },
    {
        id: "15",
        name: "Seoul Food",
        type: "kitchen",
        rating: 4.5,
        reviewCount: 110,
        cuisine: ["Korean", "Asian"],
        location: "Uptown",
        priceRange: "$13/bowl",
        image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&q=80&w=800",
        badges: ["Spicy"],
        description: "Authentic Bibimbap and Kimchi stew.",
        availability: "11am-10pm",
        menu: [],
        reviews: []
    },
    {
        id: "16",
        name: "Pasta Perfetto",
        type: "cook",
        rating: 4.7,
        reviewCount: 95,
        cuisine: ["Italian", "Pasta"],
        location: "Arts District",
        priceRange: "$28/hr",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800",
        badges: ["Handmade Pasta"],
        description: "Fresh handmade pasta prepared in your kitchen.",
        availability: "Evenings",
        menu: [],
        reviews: []
    },
    {
        id: "17",
        name: "The Green Bowl",
        type: "kitchen",
        rating: 4.4,
        reviewCount: 70,
        cuisine: ["Salad", "Healthy"],
        location: "Downtown",
        priceRange: "$15/salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        badges: ["Fresh"],
        description: "Customizable salad bowls with organic ingredients.",
        availability: "Lunch only",
        menu: [],
        reviews: []
    },
    {
        id: "18",
        name: "Chef Carlos",
        type: "cook",
        rating: 4.6,
        reviewCount: 130,
        cuisine: ["Mexican", "Latin American"],
        location: "Suburbs",
        priceRange: "$20/hr",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800",
        badges: ["Verified"],
        description: "Bringing the taste of Mexico to your home.",
        availability: "Weekends",
        menu: [],
        reviews: []
    },
    {
        id: "19",
        name: "Dessert Dreams",
        type: "caterer",
        rating: 4.9,
        reviewCount: 200,
        cuisine: ["Bakery", "Desserts"],
        location: "Westside",
        priceRange: "$5/cupcake",
        image: "https://images.unsplash.com/photo-1563729768-6af58466dfd9?auto=format&fit=crop&q=80&w=800",
        badges: ["Sweet Tooth"],
        description: "Custom cakes and dessert tables for any occasion.",
        availability: "Pre-order",
        menu: [],
        reviews: []
    },
    {
        id: "20",
        name: "Thai Spice",
        type: "kitchen",
        rating: 4.3,
        reviewCount: 60,
        cuisine: ["Thai", "Asian"],
        location: "North Hills",
        priceRange: "$14/meal",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
        badges: ["Spice Level"],
        description: "Zesty and aromatic Thai curries and noodles.",
        availability: "Dinner",
        menu: [],
        reviews: []
    }
];

export const CATEGORIES = [
    { id: "cook", name: "Hire a Cook", icon: ChefHat, color: "bg-orange-100 text-orange-600" },
    { id: "caterer", name: "Book Caterer", icon: UtensilsCrossed, color: "bg-purple-100 text-purple-600" },
    { id: "kitchen", name: "Cloud Kitchen", icon: Truck, color: "bg-teal-100 text-teal-600" }
];

export const BOOKINGS = [
    {
        id: "b1",
        providerId: "1",
        providerName: "Chef Elena Rodriguez",
        providerImage: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800",
        date: "TODAY",
        time: "7:00 PM",
        guests: 4,
        status: "upcoming",
        price: "$100"
    },
    {
        id: "b2",
        providerId: "3",
        providerName: "Mama's Cloud Kitchen",
        providerImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        date: "Yesterday",
        time: "1:00 PM",
        guests: 2,
        status: "completed",
        price: "$25"
    },
    {
        id: "b3",
        providerId: "2",
        providerName: "Golden Spoon Catering",
        providerImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
        date: "Dec 15, 2024",
        time: "5:00 PM",
        guests: 50,
        status: "completed",
        price: "$750"
    }
];

export const TRANSACTIONS = [
    {
        id: "t1",
        type: "debit",
        description: "Chef Elena Rodriguez",
        date: "Today, 5:30 PM",
        amount: "-$100.00"
    },
    {
        id: "t2",
        type: "credit",
        description: "Added to Wallet",
        date: "Dec 20, 2024",
        amount: "+$200.00"
    },
    {
        id: "t3",
        type: "debit",
        description: "Mama's Cloud Kitchen",
        date: "Dec 19, 2024",
        amount: "-$25.00"
    }
];
