// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2AVJ9kp5YBulsfLi50fKfrvhU284ex7M",
  authDomain: "realtor-react-6a9cb.firebaseapp.com",
  projectId: "realtor-react-6a9cb",
  storageBucket: "realtor-react-6a9cb.appspot.com",
  messagingSenderId: "317419540463",
  appId: "1:317419540463:web:adffd923a22c230301301a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()