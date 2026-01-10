// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0HQOagbvKkypxMc6Loxh7PFTgwm9YEAE",
    authDomain: "aaharsetu-913ba.firebaseapp.com",
    projectId: "aaharsetu-913ba",
    storageBucket: "aaharsetu-913ba.firebasestorage.app",
    messagingSenderId: "888467317602",
    appId: "1:888467317602:web:51fb8ddd210da67f37c23b",
    measurementId: "G-G1KCE3KGKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exports
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
