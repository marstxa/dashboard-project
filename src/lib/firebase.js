import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

// Your Firebase config (replace with your own configuration)
const firebaseConfig = {
  apiKey: "AIzaSyClm8qmZ-7Y87GgNuNjgjU5OMjOWlA-SSQ",
  authDomain: "dashboard-2b9e2.firebaseapp.com",
  projectId: "dashboard-2b9e2",
  storageBucket: "dashboard-2b9e2.firebasestorage.app",
  messagingSenderId: "787126034000",
  appId: "1:787126034000:web:fdebfe35781ae58516bb55",
  measurementId: "G-MEVLJS20Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, orderBy };
