// pagina de una imagen en concreto su titulo y descripcion, comentarios

function set_custom_image_top(image_id){
    let img_html = document.getElementById('img_html')
        img_html.src = 'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/' + skrep_storage[image_id].image
        img_html.alt = skrep_storage[image_id].title + ' - Семен Скрепецкий - Скрепоносный Бузотер'
    
    let title_custom_image = document.getElementById('title_custom_image')
        title_custom_image.innerHTML = '<a class="navbar-brand" href="image-'+image_id+'">'+skrep_storage[image_id].title+'</a>'

    let image_description = document.getElementById('image_description')
        image_description.innerText = skrep_storage[image_id].description
    let download_link = document.getElementById('download_link')
        download_link.href = 'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/'+skrep_storage[image_id].image  
        download_link.download = ''+skrep_storage[image_id].image        
}

function set_random_images_bottom(){
    let array_rnd_int = []
    for(let i = 0; i < 11; i++){ array_rnd_int.push(Math.floor(Math.random() * (skrep_storage.length - 1)) + 1) }
    let custom_image_child_items = document.getElementById('custom_image_child_items')
    let result_children_items = ''
    for(let i = 0; i < array_rnd_int.length; i++){ result_children_items += create_custom_child_item(array_rnd_int[i]) }
        custom_image_child_items.innerHTML = result_children_items
}

function create_custom_child_item(id){
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure class="effect-ming tm-video-item">
                <img src="https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/`+skrep_storage[id].image+`" alt="`+skrep_storage[id].title+` семен скрепецкий" class="img-fluid index_page_list_image">
                <figcaption class="d-flex align-items-center justify-content-center">
                    <h2>`+skrep_storage[id].title+`</h2>
                    <a onclick="show_current_page_data(event)" href="image-`+id+`">`+skrep_storage[id].title+`</a>
                </figcaption>                    
            </figure>
            <div class="d-flex justify-content-between tm-text-gray">
                <span class="tm-text-gray-light"></span>
                <span></span>
            </div>
            </div>`
}

document.getElementById('image_previos_button').addEventListener('click', function(){
    let has_page_image = window.location.pathname
    if(has_page_image.includes('image')){
        has_page_image = has_page_image.split('image-')[1]
        has_page_image--
        if(has_page_image < 0) has_page_image = skrep_storage.length - 1
        window.location.href = '/image-' + has_page_image
    }
})
document.getElementById('image_next_button').addEventListener('click', function(){
    let has_page_image = window.location.pathname
    if(has_page_image.includes('image')){
        has_page_image = has_page_image.split('image-')[1]
        has_page_image++
        if(skrep_storage.length <= has_page_image) has_page_image = 0
        window.location.href = '/image-' + has_page_image
    }
})