// titulo y descripcion de cualquer pagina

let page_titles = {
    index: {
        title: "Семен Скрепецкий Картины",
    },
    video:{
        title: "😋😋😋 Видео | Семен Скрепецкий Картины 😋😋😋",
    },
    "registration-login":{
        title: "💥💥💥 Логин | Семен Скрепецкий Картины 💥💥💥",
    },
    "robert":{
        title: "Роберт Бурдай",
    }
}



function set_title_difinition(title){
    TITLE_PAGE                                                   = title
    document.title                                               = title
    document.getElementsByTagName('meta')["keywords"].content    = title
    document.getElementsByTagName('meta')["description"].content = title
    set_ld_json(TITLE_PAGE)
}