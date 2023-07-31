// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFEbCG26s-sNFfLyX_nbWKTQqhH4BLYWY",
  authDomain: "todo-app-yt-67322.firebaseapp.com",
  projectId: "todo-app-yt-67322",
  storageBucket: "todo-app-yt-67322.appspot.com",
  messagingSenderId: "768377319938",
  appId: "1:768377319938:web:119cf0a3a4b5d0955fad1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);