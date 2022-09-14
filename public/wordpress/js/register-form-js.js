const firebaseConfig = {
    apiKey: "AIzaSyBoC2t2yfoMY6dAU67HuQerDeygvgK7uIo",
    authDomain: "skrepeckiy.firebaseapp.com",
    databaseURL: "https://skrepeckiy-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skrepeckiy",
    storageBucket: "skrepeckiy.appspot.com",
    messagingSenderId: "84562251992",
    appId: "1:84562251992:web:e820e3303f1221f2ee87ad",
    measurementId: "G-VZHLXLSYRX"
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js"
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth(app) 

document.getElementById('login_button').addEventListener('click', () =>{
    let pageEmail    = document.getElementById('email').value
    let pagePassword = document.getElementById('password').value
    createUserWithEmailAndPassword(auth, pageEmail, pagePassword).then((userCredential) => {
        const user = userCredential.user
        window.localStorage.setItem('email', pageEmail)
        window.localStorage.setItem('password', pagePassword)
        window.localStorage.setItem('uid', user.uid)
        enter_with_email_and_password(pageEmail, pagePassword)
      }).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        enter_with_email_and_password(pageEmail, pagePassword)       
      })
})

function enter_with_email_and_password(pageEmail, pagePassword){
    signInWithEmailAndPassword(auth, pageEmail, pagePassword).then((userCredential) => {
        const user = userCredential.user;
        window.localStorage.setItem('email', pageEmail)
        window.localStorage.setItem('password', pagePassword)
        window.localStorage.setItem('uid', user.uid)
        window.location.reload() 
    }).catch((error) => {git
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}  

push_data_in_form()

function push_data_in_form(){
    if(localStorage.getItem('email') && localStorage.getItem('password') && localStorage.getItem('uid')){
        signInWithEmailAndPassword(auth, localStorage.getItem('email'), localStorage.getItem('password')).then((userCredential) => {
            const user = userCredential.user;
            document.getElementById('email').value            = localStorage.getItem('email')
            document.getElementById('password').value         = localStorage.getItem('password')
            document.getElementById('navbar-brand').innerText = localStorage.getItem('email')
            document.getElementById('form-login-register').innerHTML = '<h4>Вы вошли как ' + localStorage.getItem('email') + '<h4></br></br>'
        })  
    }
}