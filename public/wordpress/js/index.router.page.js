// principal router
show_current_page_data()
window.addEventListener('hashchange', function () { show_current_page_data() })
    

function show_current_page_data(){ 
     let current_page = window.location.hash || ''; 
     let ul_list_links = document.getElementById('list_a_links').getElementsByTagName('a')
     let inframe_video_section = document.getElementById('inframe_video_section')
     for (let item of ul_list_links) item.classList.remove("active")
     let section_rober_burdai = document.getElementById('section_rober_burdai')
     let index_page_main_content = document.getElementById('index_page_main_content')
     let div_banner_top = document.getElementById('div_banner_top')
     let custom_item_image = document.getElementById('custom_item_image')
     let section_login = document.getElementById('section_login')

     index_page_main_content.style.display = 'none'
     custom_item_image.style.display       = 'none'
     section_rober_burdai.style.display    = 'none'
     inframe_video_section.style.display   = 'none'
     section_login.style.display           = 'none'

     if(!current_page || current_page.length < 3){                                  // index page
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('/public/wordpress/img/top_banner.jpg')"
        ul_list_links[0].classList.add('active')  
        

     } else if(current_page.includes('image')){                                     // custom image page 
       let image_id = current_page.replace('#', '').replace('image-', '')
       
       custom_item_image.style.display = 'block'
       set_custom_image_top(image_id)
       set_random_images_bottom()
       
      } else  {                                                                      // menu 
        
        div_banner_top.style.backgroundImage = "url('/public/wordpress/img/top_banner2.jpg')"
        switch(current_page){
            case '#video':              ul_list_links[1].classList.add('active'); 
               inframe_video_section.style.display = 'block'
               break
            case '#registration-login': ul_list_links[2].classList.add('active'); 
               section_login.style.display         = 'block'
               break
            case '#robert-burdai':      ul_list_links[3].classList.add('active') 
               section_rober_burdai.style.display  = 'block'
               break
        } 
     }
    
     set_title_page(current_page)
}

