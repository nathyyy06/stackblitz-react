// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZN2_ymHDEJW5WR-5PUT7DGHEFumsKMUM",
  authDomain: "react-login-02.firebaseapp.com",
  projectId: "react-login-02",
  storageBucket: "react-login-02.firebasestorage.app",
  messagingSenderId: "282465628593",
  appId: "1:282465628593:web:807fb0421fea7d2286cd90",
  measurementId: "G-MLE2CXQ91J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };