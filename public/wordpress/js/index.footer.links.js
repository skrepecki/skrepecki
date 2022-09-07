let footer_list_links = document.getElementById('footer_list_links')
let html_links_result = ''

for(let i = 0; i < skrep_storage.length; i++){
    html_links_result += return_one_link(i, skrep_storage[i].title)
}

footer_list_links.innerHTML = html_links_result

function return_one_link(i, title){
    return `<div class="col-lg-3 col-md-3 col-sm-6 col-6"><a href="https://skrepeckiy.web.app/#image-`+i+`" class="tm-text-gray d-block mb-2" target="_blank">`+title+`</a></div>`
}