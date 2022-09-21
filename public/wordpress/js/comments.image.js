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
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)




var url_image_firebase = ''
prepare_image_id_firebase()
document.addEventListener('click', function(){
    setTimeout(function(){
        if( URL_PAGE_GLOBAL != window.location.pathname ){ prepare_image_id_firebase() }
    }, 500)
})



var images_comments_div = document.getElementById('images_comments_div')
images_comments_div.innerHTML = `<div class="row mb-4"><h3 class="col-12 tm-text-primary">Комментарии</h3></div>
                                 <div class="row tm-mb-50">
                                     <div class="col-md-6 col-12">
                                         <div class="form-group"><textarea class="form-control rounded-0" placeholder="Ваш Комментарий" id="textarea_comment"></textarea></div>
                                         <div class="form-group tm-text-right"><button type="button" class="btn btn-primary" id="save_comment">Опубликовать</button></div>
                                     </div>
                                 </div>`                                 

function prepare_image_id_firebase(){
    let has_page_image = window.location.pathname
    if(has_page_image.includes('image')){
        has_page_image = has_page_image.split('image-')[1]
        let image_url_local = skrep_storage[has_page_image].image
        url_image_firebase = image_url_local.replace('.', '', image_url_local).replace('.', '', image_url_local).replace('.', '', image_url_local)
        firebase_get_data_from_custom_image() 
        URL_PAGE_GLOBAL = window.location.pathname
    }
}

async function firebase_get_data_from_custom_image(){          
    let info_comment = ''

    const q = query(collection(firestore, 'comments/' + url_image_firebase + '/' + url_image_firebase))
    const querySnapshot = await getDocs(q)
    let top_comment = `<div class="row mb-4"><h3 class="col-12 tm-text-primary">Комментарии</h3></div>
                            <div class="row tm-mb-50">`
    let content_comment = ''
    querySnapshot.forEach((doc) => {
        info_comment += doc.data().comment  + ' ' + doc.data().email + ' '
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
    if(info_comment != '') document.getElementsByTagName('meta')["description"].content = info_comment
}

function set_click_save_button(){
    let save_comment = document.getElementById('save_comment')
    save_comment.addEventListener('click', async function(){

        if(window.localStorage.getItem(url_image_firebase)) return
        
        let comment_value = document.getElementById('textarea_comment').value; 
        if(!comment_value) return
        window.localStorage.setItem(url_image_firebase, url_image_firebase)
        if(window.localStorage.getItem('uid') && window.localStorage.getItem('email') && window.localStorage.getItem('password')){
            let current_time = new Date().getTime();                                                                                   
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
            alert('войдите в систему'); window.location.href = '/registration-login'
        }
    })
}
