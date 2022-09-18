// titulo y descripcion de cualquer pagina

let page_titles = {
    index: {
        title: "Семен Скрепецкий Картины",
    },
    video:{
        title: "Видео | Семен Скрепецкий Картины",
    },
    "registration-login":{
        title: "Логин | Семен Скрепецкий Картины",
    },
    "robert":{
        title: "Роберт Бурдай",
    }
}


function set_title_page(page_has){
    if(!window.location.hash.includes('#page=')) $("html, body").animate({scrollTop: $("#custom_item_image").offset().top }, "slow")
    
    if(!page_has || page_has < 3){
        set_title_difinition( page_titles.index.title )
        
    } else if(page_has.includes('image')){
        let image_id = page_has.replace('#', '').replace('image-', '')
        if(skrep_storage[image_id].title == ''){
            set_title_difinition('Семен Скрепецкий - Скрепоносный Бузотер')
        } else {
            set_title_difinition( skrep_storage[image_id].title)
        }

    } else {
        switch(page_has){
            case '#video':
                set_title_difinition( page_titles.video.title )
                break
            case '#registration-login': 
                set_title_difinition( page_titles["registration-login"].title ) 
                break
            case '#robert-burdai': 
                set_title_difinition( page_titles["robert"].title ) 
                break    
        } 
    }
}


function set_title_difinition(title){
    document.title                                               = title
    document.getElementsByTagName('meta')["keywords"].content    = title
    document.getElementsByTagName('meta')["description"].content = title
}