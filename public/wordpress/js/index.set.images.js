// listado de imagenes en la pagina principal
var current_page = 0
var count_pages  = parseInt(skrep_storage.length / 7)
let current_page_hash_w = window.location.hash
if(window.location.hash.includes('#page=')){
    let hash_page = window.location.hash.replace('#page=', '')
    current_page  = hash_page
}

function prepare_list_indices(page){   
    if(page > count_pages) page = 0;               current_page = page 
    if(page < 0)           page = count_pages - 1; current_page = page
    let desde = 7 * page
    let array_page_indices = []
    for(let i = 0; i < 7; i++) array_page_indices.push(desde++)

    let content_page = ''
    try{
        for (let i = 0; i < array_page_indices.length; i++) content_page += put_images_in_page(array_page_indices[i], skrep_storage[array_page_indices[i]])
    } catch(e){}    
    document.getElementById('div_images_gallery').innerHTML    = content_page
    document.getElementById('current_page_value').value        = page
    document.getElementById('pages_span').innerText            = count_pages
    if(window.location.hash.includes('#page=') && page != 0) document.title = 'Page='+page+' Семен Скрепецкий'
}

function put_images_in_page(i,item){
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
            <img src="/public/wordpress/skrep-img/`+item.image+`" alt="`+item.title+` семен скрепецкий" class="img-fluid index_page_list_image">
            <figcaption class="d-flex align-items-center justify-content-center">
            <h2>`+item.title+`</h2>
            <a href="#image-`+i+`">`+item.title+`</a>
            </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
            <span class="tm-text-gray-light"></span>
            <span></span>
            </div>
            </div>`
}

document.getElementById('previos_button').addEventListener('click', function(){
    current_page--; prepare_list_indices(current_page)
    document.getElementById('previos_button').href = '/#page='+current_page
})
document.getElementById('next_button').addEventListener('click', function(){
    current_page++; prepare_list_indices(current_page)
    document.getElementById('next_button').href = '/#page='+current_page
})
prepare_list_indices(current_page)
