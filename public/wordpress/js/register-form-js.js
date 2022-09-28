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
const Auth        = getAuth(Application) 
const Firestore   = getFirestore(Application)

window.__Application                    = Application
window.__Auth                           = Auth
window.__createUserWithEmailAndPassword = createUserWithEmailAndPassword
window.__signInWithEmailAndPassword     = signInWithEmailAndPassword

window.__Firestore                      = Firestore
window.__doc                            = doc
window.__getDoc                         = getDoc
window.__collection                     = collection
window.__getDocs                        = getDocs


import { getDatabase, ref, child, get, set }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"
import { getStorage  }   from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js"
import { getAnalytics }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js"
const Database  = getDatabase(Application)       
const Storage   = getStorage(Application)             
const Analytics = getAnalytics(Application)  

window.__Database    = Database
window.__Storage     = Storage
window.__Analytics   = Analytics
window.__getDatabase = getDatabase
window.__ref         = ref
window.__child       = child
window.__get         = get
window.__set         = set

const dbRef = ref(getDatabase())
window.__dbRef       = dbRef

/*
get(child(dbRef, 'visited')).then((snapshot) => {
  if (snapshot.exists()) {
    
    span_visited.innerText = 'Поситителей: ' + snapshot.val().count
    visited_value = snapshot.val().count
    add_new_visit()
  } else {
    console.log("No data available realtime database /visited");
  }
}).catch((error) => {
  console.error(error);
});


function add_new_visit(){
    let this_user_have = window.localStorage.getItem('this_user_have') || false
    if(!this_user_have){
        visited_value++
        set(ref(database, 'visited'), { count: visited_value })        
    }
    window.localStorage.setItem('this_user_have', 'this user is counted'   )
}
*/