import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// https://firebase.google.com/docs/firestore/query-data/get-data#web-version-9_1
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

var id_div_list_images = document.getElementById('id_div_list_images')
var image_item =
    `<div class="col">
        <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
      <div class="card-body">
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
    </div>`


const docRef = collection(firestore, "items")
const docsSnap = await getDocs(docRef);
docsSnap.forEach(doc => {
    console.log(doc.data());
}) 
   

//   
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }