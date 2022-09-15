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
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

var url_image_firebase = ''
window.addEventListener('hashchange', function () { prepare_image_id_firebase() })
prepare_image_id_firebase()

var images_comments_div = document.getElementById('images_comments_div')
images_comments_div.innerHTML = `<div class="row mb-4"><h3 class="col-12 tm-text-primary">Комментарии</h3></div>
                                 <div class="row tm-mb-50">
                                     <div class="col-md-6 col-12">
                                         <div class="form-group"><textarea class="form-control rounded-0" placeholder="Ваш Комментарий" id="textarea_comment"></textarea></div>
                                         <div class="form-group tm-text-right"><button type="button" class="btn btn-primary" id="save_comment">Опубликовать</button></div>
                                     </div>
                                 </div>`                                 


function prepare_image_id_firebase(){
    let has_page_image = window.location.hash
    if(has_page_image.includes('image')){
        has_page_image = has_page_image.replace('#', '', has_page_image).replace('image-', '', has_page_image)
        let image_url_local = skrep_storage[has_page_image].image
        url_image_firebase = image_url_local.replace('.', '', image_url_local)
        url_image_firebase = image_url_local.replace('.', '', image_url_local)
        url_image_firebase = image_url_local.replace('.', '', image_url_local)
        firebase_get_data_from_custom_image() 
    }
}

async function firebase_get_data_from_custom_image(){
    console.log('url_image_firebase = ', url_image_firebase)
    const q = query(collection(firestore, 'comments/' + url_image_firebase + '/' + url_image_firebase))
    const querySnapshot = await getDocs(q)
    let top_comment = `<div class="row mb-4"><h3 class="col-12 tm-text-primary">Комментарии</h3></div>
                            <div class="row tm-mb-50">`
    let content_comment = ''
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data())
        content_comment += `<div class="col-md-6 col-12">                      
                                <p class="comment">`+doc.data().comment+`</p>
                                <p class="comment">`+doc.data().email+`</p>
                            </div> `
    })
    let form_comment = `<div class="col-md-6 col-12">
                            <div class="form-group"><textarea class="form-control rounded-0" placeholder="Ваш Комментарий" id="textarea_comment"></textarea></div>
                            <div class="form-group tm-text-right"><button type="button" class="btn btn-primary" id="save_comment">Опубликовать</button></div>
                        </div></div>`
    images_comments_div.innerHTML = top_comment + content_comment + form_comment
    set_click_save_button()
}

function set_click_save_button(){
    let save_comment = document.getElementById('save_comment')
    save_comment.addEventListener('click', async function(){

        if(window.localStorage.getItem(url_image_firebase)) return
        
        let comment_value = document.getElementById('textarea_comment').value
        if(!comment_value) return
        window.localStorage.setItem(url_image_firebase, url_image_firebase)
        if(window.localStorage.getItem('uid') && window.localStorage.getItem('email') && window.localStorage.getItem('password')){
            let current_time = new Date().getTime()
            await setDoc(doc(firestore, "comments", url_image_firebase + '/' + url_image_firebase + '/'+ current_time), {
                comment: comment_value,
                email: window.localStorage.getItem('email'),
                time: current_time
            }).then(() => { 
                document.getElementById('textarea_comment').value = ''
                firebase_get_data_from_custom_image() 
                alert('опубликовано')
            })
        } else {
            alert('войдите в систему'); window.location.href = '/#registration-login'
        }
    })
}
