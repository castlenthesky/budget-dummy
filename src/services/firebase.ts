// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJdw0oWlt2MAXhbj7dZBxyHmVmAADPP7k",
  authDomain: "family-firm.firebaseapp.com",
  projectId: "family-firm",
  storageBucket: "family-firm.appspot.com",
  messagingSenderId: "954953132103",
  appId: "1:954953132103:web:714c162d055da69404a962",
  measurementId: "G-SQZGQWT464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
