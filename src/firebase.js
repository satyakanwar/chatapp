// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAT1FkY_kSLhzicHuH9fmwqhwvAQsrj9ag",
  authDomain: "chatapp-d15fb.firebaseapp.com",
  projectId: "chatapp-d15fb",
  storageBucket: "chatapp-d15fb.appspot.com",
  messagingSenderId: "1007696397794",
  appId: "1:1007696397794:web:2668931682e125155ca5bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();