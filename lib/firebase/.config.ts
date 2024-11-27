// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPXrph_fFNg4LlgDjeXTlzxKM7JtCoY9k" ,
  authDomain:"medconnect-d4836.firebaseapp.com",
  projectId: "medconnect-d4836",
  storageBucket: "medconnect-d4836.firebasestorage.app",
  messagingSenderId: "1045828483133",
  appId: "1:1045828483133:web:f3f5bff2a70b215a991254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
const db = getFirestore(app);
export default auth
export {
    db
}