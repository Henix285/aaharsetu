import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Loader2, ArrowRight, User, ChefHat } from "lucide-react";

export default function ProfileSetup() {
    const { currentUser, userProfile, refreshProfile } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        displayName: currentUser?.displayName || "",
        phoneNumber: "",
        // Customer specific
        dietaryPreference: "non-veg",
        // Provider specific
        kitchenName: "",
        bio: "",
        address: "",
        specialties: "",
    });

    useEffect(() => {
        // If user has no role, redirect to selection
        if (userProfile && !userProfile.role) {
            navigate("/role-selection");
        }
    }, [userProfile, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) return;
        setLoading(true);

        try {
            const dataToUpdate = {
                displayName: formData.displayName,
                phoneNumber: formData.phoneNumber,
                isProfileComplete: true,
                updatedAt: new Date(),
            };

            if (userProfile.role === "customer") {
                dataToUpdate.dietaryPreference = formData.dietaryPreference;
            } else if (userProfile.role === "provider") {
                dataToUpdate.kitchenName = formData.kitchenName;
                dataToUpdate.bio = formData.bio;
                dataToUpdate.address = formData.address;
                // Convert comma string to array
                dataToUpdate.specialties = formData.specialties.split(",").map((s) => s.trim()).filter(Boolean);
            }

            await updateDoc(doc(db, "users", currentUser.uid), dataToUpdate);
            await refreshProfile();
            navigate("/");
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading(false);
        }
    };

    if (!userProfile?.role) return null; // Or generic loading

    const isProvider = userProfile.role === "provider";

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="w-full max-w-xl space-y-8 relative z-10">
                <div className="text-center space-y-2">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${isProvider ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                        {isProvider ? <ChefHat className="w-8 h-8" /> : <User className="w-8 h-8" />}
                    </div>
                    <h1 className="text-3xl font-heading font-bold tracking-tight">Complete your profile</h1>
                    <p className="text-muted-foreground">
                        {isProvider
                            ? "Tell us about your kitchen and specialties."
                            : "Help us find the best food for you."}
                    </p>
                </div>

                <div className="bg-card border border-border/50 shadow-xl rounded-3xl p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            {/* Common Fields */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input
                                    required
                                    name="displayName"
                                    placeholder="e.g. John Doe"
                                    value={formData.displayName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone Number</label>
                                <Input
                                    required
                                    name="phoneNumber"
                                    placeholder="+91 98765 43210"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Customer Specific */}
                            {!isProvider && (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Dietary Preference</label>
                                    <div className="flex gap-4">
                                        {['veg', 'non-veg', 'vegan'].map((type) => (
                                            <label key={type} className={`cursor-pointer border rounded-xl px-4 py-2 flex items-center gap-2 transition-all ${formData.dietaryPreference === type ? 'bg-primary/10 border-primary text-primary font-medium' : 'bg-background hover:bg-muted'}`}>
                                                <input
                                                    type="radio"
                                                    name="dietaryPreference"
                                                    value={type}
                                                    checked={formData.dietaryPreference === type}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                <span className="capitalize">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Provider Specific */}
                            {isProvider && (
                                <>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Kitchen Name</label>
                                        <Input
                                            required
                                            name="kitchenName"
                                            placeholder="e.g. Mom's Spices"
                                            value={formData.kitchenName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Cuisine Specialties</label>
                                        <Input
                                            name="specialties"
                                            placeholder="e.g. South Indian, Biryani, Snacks (comma separated)"
                                            value={formData.specialties}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Address</label>
                                        <Input
                                            required
                                            name="address"
                                            placeholder="Pickup location"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Bio / Story</label>
                                        <Textarea
                                            required
                                            name="bio"
                                            placeholder="Tell customers about your cooking journey..."
                                            value={formData.bio}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        <Button type="submit" className="w-full h-12 text-base" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                            Complete Setup <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
