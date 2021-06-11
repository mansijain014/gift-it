import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7aupFv1HiUJmKIhrdPDKGz94_ei9Zp8g",
  authDomain: "gift-it-3392f.firebaseapp.com",
  projectId: "gift-it-3392f",
  storageBucket: "gift-it-3392f.appspot.com",
  messagingSenderId: "748250112455",
  appId: "1:748250112455:web:a25b78e110bcc7579b39e2",
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();
