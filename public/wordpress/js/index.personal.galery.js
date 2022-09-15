let semen_personal_images = [
    'semen11.jpg', 'semen9.webp', 'semen2.jpg', 'semen3.jpg', 'semen4.jpg', 'semen5.jpg', 'semen6.jpg', 'semen7.jpg', 'semen9.jpg'
]

let result_div_personal_images = ''

for(let i = 0; i < semen_personal_images.length; i++){
    result_div_personal_images += '<div class="col-md-4 col-12"><img src="/public/wordpress/img/'+semen_personal_images[i]+'" alt="Роберт Бурдай - Семен Скрепецкий - Скрепоносный Бузотер" class="img-fluid"></div>'
}

document.getElementById('personal_gallery_semen_skrepetski').innerHTML = result_div_personal_images

