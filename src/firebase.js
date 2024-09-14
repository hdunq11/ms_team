// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX5O2Q3I1IlkQncHlN7hONGgaWutYAVTY",
  authDomain: "react-a2314.firebaseapp.com",
  projectId: "react-a2314",
  storageBucket: "react-a2314.appspot.com",
  messagingSenderId: "233675153225",
  appId: "1:233675153225:web:16df9d1d3fc83f1be48498",
  measurementId: "G-D8KES55LTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;