import firebase from "firebase";
//import { initializeApp } from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIk5C7cRsB7GuvzrTDwuGSJTqqjaHKibA",
  authDomain: "clone-3f24f.firebaseapp.com",
  projectId: "clone-3f24f",
  storageBucket: "clone-3f24f.appspot.com",
  messagingSenderId: "561793202013",
  appId: "1:561793202013:web:93c08324d5f21125801ab4",
  measurementId: "G-BGVGP2NZ0H",
});

const auth = firebase.auth();

export { auth };
