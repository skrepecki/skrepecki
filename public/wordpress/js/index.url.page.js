window.addEventListener('hashchange', function () {
    show_current_page_data()
    // console.log(window.location.hash)
})

show_current_page_data()



    

function show_current_page_data(){ 
     let current_page = window.location.hash; 
     let index_page_main_content = document.getElementById('index_page_main_content')
     let div_banner_top = document.getElementById('div_banner_top')

     if(!current_page){
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner.jpg')"
          
     } else {
        index_page_main_content.style.display = 'none'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner2.jpg')"
         
     }

     console.log(current_page)
}
