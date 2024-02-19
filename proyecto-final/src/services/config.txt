import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "urban-feet.firebaseapp.com",
  projectId: "urban-feet",
  storageBucket: "urban-feet.appspot.com",
  messagingSenderId: "14664474822",
  appId: "1:14664474822:web:74096995638ad96e15f7c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);