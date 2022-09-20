// principal router
show_current_page_data(null)
// window.addEventListener('hashchange', function () { show_current_page_data() })


function show_current_page_data(object){  
   let current_page = null 
   if(object){
      object.preventDefault()
      current_page = object.target.href
      window.history.pushState(new Date().getUTCMilliseconds(), new Date().getUTCMilliseconds(), current_page)
   } else{
      current_page = window.location.pathname
   }

     let ul_list_links = document.getElementById('list_a_links').getElementsByTagName('a')
     let inframe_video_section = document.getElementById('inframe_video_section')
     for (let item of ul_list_links) item.classList.remove("active")
     let section_rober_burdai = document.getElementById('section_rober_burdai')
     let index_page_main_content = document.getElementById('index_page_main_content')
     let div_banner_top = document.getElementById('div_banner_top')
     let custom_item_image = document.getElementById('custom_item_image')
     let section_login = document.getElementById('section_login')
     let navbarSupportedContent = document.getElementById('navbarSupportedContent')
     navbarSupportedContent.classList.remove('show')

     index_page_main_content.style.display = 'none'
     custom_item_image.style.display       = 'none'
     section_rober_burdai.style.display    = 'none'
     inframe_video_section.style.display   = 'none'
     section_login.style.display           = 'none'


     if(current_page.length < 3 || current_page.includes('page=')){                                  // index page
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/top_banner.jpg')"
        ul_list_links[0].classList.add('active')  
        set_title_difinition( page_titles.index.title )

     } else if(current_page.includes('image')){                                     // custom image page 
       let image_id = current_page.split('image-')[1]
       custom_item_image.style.display = 'block'
       set_custom_image_top(image_id)
       set_random_images_bottom()
       if(skrep_storage[image_id].title == '') {
            set_title_difinition('Семен Скрепецкий - Скрепоносный Бузотер')
       } else { 
            set_title_difinition( skrep_storage[image_id].title) 
       }
      } else  {                                                                      // menu 
        
        div_banner_top.style.backgroundImage = "url('https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/top_banner2.jpg')"

        if(current_page.includes('video')){
            ul_list_links[1].classList.add('active')
            inframe_video_section.style.display = 'block'
            set_title_difinition( page_titles.video.title )

        } else if(current_page.includes('registration-login')){
            ul_list_links[2].classList.add('active')
            section_login.style.display         = 'block'
            set_title_difinition( page_titles["registration-login"].title ) 

        } else if(current_page.includes('robert-burdai')){ 
            ul_list_links[3].classList.add('active') 
            section_rober_burdai.style.display  = 'block'
            set_title_difinition( page_titles["robert"].title ) 
        } 
     }
    
    
     document.querySelector('link[rel="canonical"]').href = window.location.href
     if(!window.location.hash.includes('#page=')) $("html, body").animate({scrollTop: $("#custom_item_image").offset().top }, "slow")
}

