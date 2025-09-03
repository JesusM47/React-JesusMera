// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXah3kiW__9zre0M8ElHjBb8El1Iicqng",
  authDomain: "books-coder.firebaseapp.com",
  projectId: "books-coder",
  storageBucket: "books-coder.firebasestorage.app",
  messagingSenderId: "506620936814",
  appId: "1:506620936814:web:5e11809638d60252335c7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

