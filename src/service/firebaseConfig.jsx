// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ghumna-a2f02.firebaseapp.com",
  projectId: "ghumna-a2f02",
  storageBucket: "ghumna-a2f02.firebasestorage.app",
  messagingSenderId: "1096984439755",
  appId: "1:1096984439755:web:9ed9eb0892d710f217644e",
  measurementId: "G-F24WDJF8HL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);