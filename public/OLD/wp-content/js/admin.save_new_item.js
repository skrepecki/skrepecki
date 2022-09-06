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
import { getFirestore, doc, getDoc, collection, getDocs, setDoc  } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable }   from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js"

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage();


 document.getElementById('save_item').addEventListener('click', () => {
    var file = document.getElementById("myFile").files[0]
    const storageRef = ref(storage, '/img/' + file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
            });
          }
        )
        
        // uploadBytes(storageRef, file).then((snapshot) => {
        //     console.log('snapshot', snapshot)
        //     storageRef.getDownloadURL().then(function(url) {
        //       
        //         console.log(url)        
        //     });
        // })

    // let time = document.getElementById('time').value  
    // let title = document.getElementById('title').value  
    // let description = document.getElementById('description').value  
    // let slug = document.getElementById('slug').value    
    // 
    // if(time && title && description && slug){
    //    save_data_database(time, title, description, slug)
    // } else {
    //     alert('emty input'); return
    // }
 })

 async function save_data_database(time, title, description, slug){
    let second = Math.floor(Date.now() / 1000)
    let res = await setDoc(doc(firestore, 'items', slug), { slug, title, description, second, img: "none" }) || 'ok'
    console.log('res', res)
 }

