window.addEventListener('hashchange', function () {
    show_current_page_data()
    // console.log(window.location.hash)
})

show_current_page_data()


function show_current_page_data(){
     let current_page = window.location.hash; console.log(current_page)
     let index_page_main_content = document.getElementById('index_page_main_content')
     if(!current_page){
        index_page_main_content.style.display = 'block'
     } else {
        index_page_main_content.style.display = 'none'
     }
}
