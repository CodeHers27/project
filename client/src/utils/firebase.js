// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-6c877.firebaseapp.com",
  projectId: "taskmanager-6c877",
  storageBucket: "taskmanager-6c877.appspot.com",
  messagingSenderId: "738536213251",
  appId: "1:738536213251:web:79bc22c79ee0ed0fbe3736",
  measurementId: "G-NP09YL5ZKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);