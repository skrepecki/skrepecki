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
        set_title_difinition( page_titles.index.title )
        
    } else if(page_has.includes('image')){
        console.log('page_has', page_has)
        let image_id = page_has.replace('#', '').replace('image-', '')
        set_title_difinition( skrep_storage[image_id].title + '  Семен Скрепецкий - Скрепоносный Бузотер')

    } else {
        switch(page_has){
            case '#video':
                set_title_difinition( page_titles.video.title )

                break
            case '#registration-login': 
                set_title_difinition( page_titles["registration-login"].title ) 

                break
        } 
    }
}


function set_title_difinition(title){
    document.title = title
    document.getElementsByTagName('meta')["keywords"].content    = title
    document.getElementsByTagName('meta')["description"].content = title
}