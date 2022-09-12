// work witch realtime database
const span_visited = document.getElementById('person_visited')
var visited_value = 0
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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"
import { getAuth  }      from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js"
import { getDatabase, ref, child, get, set }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"
import { getStorage  }   from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js"
import { getAnalytics }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js"

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)         
const database = getDatabase(app)       
const storage = getStorage(app)             
const analytics = getAnalytics(app)  

const dbRef = ref(getDatabase());
get(child(dbRef, 'visited')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val().count);
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
