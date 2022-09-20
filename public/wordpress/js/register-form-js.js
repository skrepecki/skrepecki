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
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const auth = getAuth(app) 

let login_button_click = document.getElementById('login_button')
if(login_button_click){
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
}


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
            document.getElementById('email').value                   = localStorage.getItem('email')
            document.getElementById('password').value                = localStorage.getItem('password')
            document.getElementById('navbar-brand').innerText        = localStorage.getItem('email')
            document.title                                           = localStorage.getItem('email')
            document.getElementById('form-login-register').innerHTML = '<h4>Вы вошли как ' + localStorage.getItem('email') + '<h4></br></br>'
        })  
    }
}