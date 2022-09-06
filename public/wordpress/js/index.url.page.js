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


     if(!current_page || current_page.length < 3){
        index_page_main_content.style.display = 'block'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner.jpg')"
        ul_list_links[0].classList.add('active')  
     } else {
        index_page_main_content.style.display = 'none'
        div_banner_top.style.backgroundImage = "url('/wordpress/img/top_banner2.jpg')"
        switch(current_page){
            case '#video':              ul_list_links[1].classList.add('active'); break
            case '#registration-login': ul_list_links[2].classList.add('active'); break
        } 
     }

     console.log(ul_list_links)
     console.log(current_page)
}
