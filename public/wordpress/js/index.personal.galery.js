let semen_personal_images = [
    'semen11.jpg', 'semen9.webp', 'semen2.jpg', 'semen3.jpg', 'semen4.jpg', 'semen5.jpg', 'semen6.jpg', 'semen7.jpg', 'semen9.jpg'
]

let result_div_personal_images = ''

for(let i = 0; i < semen_personal_images.length; i++){
    result_div_personal_images += '<div class="col-md-4 col-12"><img src="/public/wordpress/img/'+semen_personal_images[i]+'" alt="Роберт Бурдай - Семен Скрепецкий - Скрепоносный Бузотер" class="img-fluid"></div>'
}

let google_maps = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3264037730887!2d37.61861938698912!3d55.752136079377934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2ses!4v1663266762246!5m2!1sen!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

document.getElementById('personal_gallery_semen_skrepetski').innerHTML = result_div_personal_images + google_maps

