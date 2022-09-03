import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBoC2t2yfoMY6dAU67HuQerDeygvgK7uIo",
    authDomain: "skrepeckiy.firebaseapp.com",
    databaseURL: "https://skrepeckiy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skrepeckiy",
    storageBucket: "skrepeckiy.appspot.com",
    messagingSenderId: "84562251992",
    appId: "1:84562251992:web:e820e3303f1221f2ee87ad",
    measurementId: "G-VZHLXLSYRX"
  };

const app2 = initializeApp(firebaseConfig); console.log('app2', app2)

export function sayHi(user) {
    alert(`Hello, ${user}!`);
}