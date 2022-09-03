import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// https://firebase.google.com/docs/firestore/query-data/get-data#web-version-9_1
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

var list_items = ''
const docRef = collection(firestore, "items")
const docsSnap = await getDocs(docRef);
docsSnap.forEach(doc => {
    let item = doc.data()
    list_items += returnSimpleItem(item.title, item.description, item.img, item.slug) 
    document.getElementById('id_div_list_images').innerHTML = list_items
    console.log(doc.data());
}) 
   

//   
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }

function returnSimpleItem(title, description, img, slug){
    let sort_description = description.length > 77 ? description.substring(0, 77) + '...': sort_description
    return `<div class="col"><div class="card shadow-sm">
            <img src="`+img+`" alt="" class="bd-placeholder-img card-img-top" width="100%" height="225">
            <div class="card-body">
            <p class="card-text">`+title+` `+sort_description+`</p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/item/#`+slug+`"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            </div><small class="text-muted">9 mins</small></div></div></div></div>`
}


