// principal router
show_current_page_data()
window.addEventListener('hashchange', function () { show_current_page_data() })
    

function show_current_page_data(){ 
     let current_page = window.location.hash || ''; 
     let ul_list_links = document.getElementById('list_a_links').getElementsByTagName('a')
     for (let item of ul_list_links) item.classList.remove("active")

     let section_rober_burdai = document.getElementById('section_rober_burdai')
     let index_page_main_content = document.getElementById('index_page_main_content')
     let div_banner_top = document.getElementById('div_banner_top')
     let custom_item_image = document.getElementById('custom_item_image')

     if(!current_page || current_page.length < 3){                                  // index page
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner.jpg')"
        ul_list_links[0].classList.add('active')  
        custom_item_image.style.display = 'none'
        section_rober_burdai.style.display = 'none'

     } else if(current_page.includes('image')){                                     // custom image page 
       let image_id = current_page.replace('#', '').replace('image-', '')
       index_page_main_content.style.display = 'none'
       custom_item_image.style.display = 'block'
       set_custom_image_top(image_id)
       set_random_images_bottom()
       section_rober_burdai.style.display = 'none'
     
      } else  {                                                                      // menu 
        index_page_main_content.style.display = 'none'
        section_rober_burdai.style.display = 'none'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner2.jpg')"
        custom_item_image.style.display = 'none'
        switch(current_page){
            case '#video':              ul_list_links[1].classList.add('active'); break
            case '#registration-login': ul_list_links[2].classList.add('active'); break
            case '#robert-burdai':      ul_list_links[3].classList.add('active') 
               section_rober_burdai.style.display = 'block'
               break
        } 
     }

     set_title_page(current_page)
}

