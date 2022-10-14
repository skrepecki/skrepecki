<template>
    <section class="container-fluid tm-mt-60">
        <div class="row mb-4">
            <h2 class="col-12 tm-text-primary">Роберт Бурдай</h2>
        </div>
        <div class="row tm-mb-74 tm-row-1640">            
            <div class="col-lg-5 col-md-6 col-12 mb-3">
                <img src="https://skrepecki.github.io/skrepecki/public/wordpress/img/semen1.jpg" alt="Роберт Бурдай" class="img-fluid">
            </div>
            <div class="col-lg-7 col-md-6 col-12">
                <div class="tm-about-img-text">
                    <p class="mb-4">
                        <b>Семён Скрепецкий</b>, почётный житель Немногопотерпетьевска, лучший сборщик валежника, заместитель директора местного мухопитомника, друг Ватки, собутыльник Семёныча
                    </p>
                    
                </div>                
            </div>
        </div>
        <div class="row tm-mb-50">
            <div class="col-md-4 col-12" v-for="(item, index) in semen_personal_images" v-bind:key="index">
                <img v-bind:src="'https://skrepecki.github.io/skrepecki/public/wordpress/img/'+item" alt="Роберт Бурдай - Семен Скрепецкий - Скрепоносный Бузотер" class="img-fluid">
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.3264037730887!2d37.61861938698912!3d55.752136079377934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2ses!4v1663266762246!5m2!1sen!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>
<script>
    export default{
        data(){
            return{
                semen_personal_images: ['semen11.jpg', 'semen9.webp', 'semen2.jpg', 'semen3.jpg', 'semen4.jpg', 'semen5.jpg', 'semen6.jpg', 'semen7.jpg', 'semen9.jpg']
            }
        },
    }
</script>
