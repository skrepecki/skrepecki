// pagina de una imagen en concreto su titulo y descripcion, comentarios

function set_custom_image_top(image_id){
    document.title = skrep_storage[image_id].title + ' | Семен Скрепецкий'
    let img_html = document.getElementById('img_html')
        img_html.src = '/wordpress/skrep-img/' + skrep_storage[image_id].image
    let title_custom_image = document.getElementById('title_custom_image')
        title_custom_image.innerText = skrep_storage[image_id].title  
    let image_description = document.getElementById('image_description')
        image_description.innerText = skrep_storage[image_id].description      
}

function set_random_images_bottom(){
    let array_rnd_int = []
    for(let i = 0; i < 11; i++){ array_rnd_int.push(Math.floor(Math.random() * (skrep_storage.length - 1)) + 1) }
    let custom_image_child_items = document.getElementById('custom_image_child_items')
    let result_children_items = ''
    for(let i = 0; i < array_rnd_int.length; i++){ result_children_items += create_custom_child_item(array_rnd_int[i]) }
    // setTimeout(()=> {
        custom_image_child_items.innerHTML = result_children_items
    // }, 11000)
   
}

function create_custom_child_item(id){
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
                <img src="/wordpress/skrep-img/`+skrep_storage[id].image+`" alt="`+skrep_storage[id].title+`" class="img-fluid index_page_list_image">
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>`+skrep_storage[id].title+`</h2>
                    <a href="#image-`+id+`">`+skrep_storage[id].title+`</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light">16 Oct 2020</span>
                <span>12,460 views</span>
            </div>
            </div>`
}