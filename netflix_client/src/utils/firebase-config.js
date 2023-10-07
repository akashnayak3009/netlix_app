// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_RYId29TfkEe9R3xNJHVBtioJaZsyxUg",
  authDomain: "react-netflix-clone-901aa.firebaseapp.com",
  projectId: "react-netflix-clone-901aa",
  storageBucket: "react-netflix-clone-901aa.appspot.com",
  messagingSenderId: "1003742114659",
  appId: "1:1003742114659:web:76d658a863298a9bed5956",
  measurementId: "G-LZ8RC00168"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);