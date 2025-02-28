// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAtJ8ZY0j2xKI0HV_X_CIx8bIAW9kTiRSI",
  authDomain: "web-kelas-tes-d9d0a.firebaseapp.com",
  projectId: "web-kelas-tes-d9d0a",
  storageBucket: "web-kelas-tes-d9d0a.firebasestorage.app",
  messagingSenderId: "128993362509",
  appId: "1:128993362509:web:d53d13328e2cee491b5204",
  measurementId: "G-6NZMY5Y8PL"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
