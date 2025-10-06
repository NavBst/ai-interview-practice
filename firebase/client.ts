// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQFPF7iYNPNVR5yuw8nQEAOwKNpPzWFvU",
  authDomain: "ai-interview-39e6b.firebaseapp.com",
  projectId: "ai-interview-39e6b",
  storageBucket: "ai-interview-39e6b.firebasestorage.app",
  messagingSenderId: "794683653521",
  appId: "1:794683653521:web:b36fb3cb2e6868f8016e30",
  measurementId: "G-RH2V57JEQR"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
export const auth = getAuth();
export const db = getFirestore(app);
