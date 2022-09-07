// titulo y descripcion de cualquer pagina

let page_titles = {
    index: {
        title: "Семен Скрепецкий Картины",
        description: "Семен Скрепецкий"
    },
    video:{
        title: "Видео | Семен Скрепецкий Картины",
        description: "Видео"
    },
    "registration-login":{
        title: "Логин | Семен Скрепецкий Картины",
        description: "Логин"
    }
}


function set_title_page(page_has){
    $("html, body").animate({scrollTop: $("#custom_item_image").offset().top }, "slow")

    if(!page_has || page_has < 3){
        document.title = page_titles.index.title
    } else if(page_has.includes('image')){

    } else {
        switch(page_has){
            case '#video':
                document.title = page_titles.video.title 
                break
            case '#registration-login': 
                document.title = page_titles["registration-login"].title 
                break
        } 
    }
}