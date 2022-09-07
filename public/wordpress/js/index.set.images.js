// listado de imagenes en la pagina principal

let div_images_gallery = document.getElementById('div_images_gallery')
let content_page = ''
console.log(skrep_storage)

for (let i = 0; i < skrep_storage.length; i++) {
    content_page += put_images_in_page(i, skrep_storage[i])
}

div_images_gallery.innerHTML = content_page

function put_images_in_page(i,item){
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <img src="/wordpress/skrep-img/`+item.image+`" alt="`+item.title+`" class="img-fluid">
            <figcaption class="d-flex align-items-center justify-content-center">
            <h2>`+item.title+`</h2>
            <a href="#image-`+i+`">`+item.title+`</a>
            </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
            <span class="tm-text-gray-light">18 Oct 2020</span>
            <span>9,906 views</span>
            </div>
            </div>`
}

