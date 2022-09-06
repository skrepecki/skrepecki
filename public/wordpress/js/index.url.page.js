window.addEventListener('hashchange', function () {
    show_current_page_data()
    // console.log(window.location.hash)
})

show_current_page_data()



    

function show_current_page_data(){ 
     let current_page = window.location.hash; 
     let ul_list_links = document.getElementById('list_a_links').getElementsByTagName('a')
     for (let item of ul_list_links) item.classList.remove("active")

     let index_page_main_content = document.getElementById('index_page_main_content')
     let div_banner_top = document.getElementById('div_banner_top')
     let custom_item_image = document.getElementById('custom_item_image')

     if(!current_page || current_page.length < 3){                                  // index page
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner.jpg')"
        ul_list_links[0].classList.add('active')  
        custom_item_image.style.display = 'none'
     } else if(current_page.includes('image')){                                     // custom image page 
       let image_id = current_page.replace('#', '').replace('image-', '')
       index_page_main_content.style.display = 'none'
       custom_item_image.style.display = 'block'
       set_custom_image_top(image_id)
       set_random_images_bottom()
     } else  {                                                                      // menu 
        index_page_main_content.style.display = 'none'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner2.jpg')"
        custom_item_image.style.display = 'none'
        switch(current_page){
            case '#video':              ul_list_links[1].classList.add('active'); break
            case '#registration-login': ul_list_links[2].classList.add('active'); break
        } 
     }

    // console.log(ul_list_links)
    // console.log(current_page)
}

function set_custom_image_top(image_id){
    let img_html = document.getElementById('img_html')
        img_html.src = '/wordpress/skrep-img/' + skrep_storage[image_id].image
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
        <img src="/wordpress/skrep-img/`+skrep_storage[id].image+`" alt="`+skrep_storage[id].title+`" class="img-fluid">
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