// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpwgWt7RzcmE-_O9MnqSTfc5VUEVR8QPw",
  authDomain: "gg-life-fc9af.firebaseapp.com",
  projectId: "gg-life-fc9af",
  storageBucket: "gg-life-fc9af.appspot.com",
  messagingSenderId: "164580600704",
  appId: "1:164580600704:web:b65418ad35db5895c1ef65",
  measurementId: "G-Q5XRNKVDQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
