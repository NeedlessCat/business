// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNbTWGGMvR0ZXoA3zQdjEOMnGwRyi6nsY",
  authDomain: "prasadhub-6feb0.firebaseapp.com",
  projectId: "prasadhub-6feb0",
  storageBucket: "prasadhub-6feb0.appspot.com",
  messagingSenderId: "952532871121",
  appId: "1:952532871121:web:afd32e2cd6acebf712e2f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
