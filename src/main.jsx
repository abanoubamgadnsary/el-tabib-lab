import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils/i18n";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqfKRtQeuxJun8kpDY8mN9E5cMhIqd5l4",
  authDomain: "el-tabib-lab.firebaseapp.com",
  projectId: "el-tabib-lab",
  storageBucket: "el-tabib-lab.firebasestorage.app",
  messagingSenderId: "1018990343618",
  appId: "1:1018990343618:web:486086dc288fc22b7a125b",
  measurementId: "G-HJFQMWEGNN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
