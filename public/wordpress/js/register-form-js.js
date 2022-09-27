const firebaseConfig = {
    apiKey: "AIzaSyAYRnKPHSEehgXJmXLozm6ygxvkYlKfIJk",
    authDomain: "skrepecki.firebaseapp.com",
    databaseURL: "https://skrepecki-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skrepecki",
    storageBucket: "skrepecki.appspot.com",
    messagingSenderId: "602034679120",
    appId: "1:602034679120:web:e799553343c8d256a75055",
    measurementId: "G-RRBC0XQCE7"
  }
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js"
const Application = initializeApp(firebaseConfig)
const Firestore = getFirestore(app)
const Auth = getAuth(app) 

window.__Application                    = Application
window.__Auth                           = Auth
window.__createUserWithEmailAndPassword = createUserWithEmailAndPassword
window.__signInWithEmailAndPassword     = signInWithEmailAndPassword