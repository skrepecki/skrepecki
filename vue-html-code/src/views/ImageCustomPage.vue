<template>
    <section id="custom_item_image" style="display: block;">
        <div class="container-fluid tm-container-content tm-mt-60">
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary">
                    <a class="navbar-brand" v-bind:href="'/'+changeEmptyFromS(currentImageObj.title)+'/'+imageId+'/Семен-Скрепецкий-Картины/'">{{ currentImageObj.title }}</a>
                </h2>
            </div>
            <div class="row tm-mb-90">            
                <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                    <img v-bind:src="'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/'+currentImageObj.image" alt="хорошие сруские - Семен Скрепецкий - Скрепоносный Бузотер" class="img-fluid" v-bind:width="width_100">
                    <!-- <br><br>
                    <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                        <a class="btn btn-primary tm-btn-prev mb-1" id="image_previos_button">Предыдущая</a>
                        <a class="btn btn-primary tm-btn-next" id="image_next_button">Следующая</a>
                    </div>
                    <br><br> -->
                </div>
                
                <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12"> 
                    <div class="tm-bg-gray tm-video-details">
                        <div class="mb-4">
                            <h5 class="tm-text-gray-dark mb-3">{{ currentImageObj.description }}</h5>
                        </div>
                        <div class="text-center mb-5">
                            <a v-bind:href="'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/'+currentImageObj.image" class="btn btn-primary tm-btn-big" id="download_link" download="photo_2022-09-26_16-37-03.jpg">Скачать</a>
                        </div>                    
                    </div>
                </div>
                
            </div>        
            <!--
            <div class="container-fluid tm-mt-60" id="images_comments_div"><div class="row mb-4"><h3 class="col-12 tm-text-primary">Комментарии</h3></div>
                            <div class="row tm-mb-50"><div class="col-md-6 col-12">
                            <div class="form-group"><textarea class="form-control rounded-0" placeholder="Ваш Комментарий" id="textarea_comment"></textarea></div>
                            <div class="form-group tm-text-right"><button type="button" class="btn btn-primary" id="save_comment">Опубликовать</button></div>
                        </div></div>
            </div>
            <div class="row mb-4"><h2 class="col-12 tm-text-primary">Семен Скрепецкий</h2></div>
            <div class="row mb-3 tm-gallery" id="custom_image_child_items">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure class="effect-ming tm-video-item">
                        <img src="https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/0186.jpg" alt="присяга семен скрепецкий" class="img-fluid index_page_list_image">
                        <figcaption class="d-flex align-items-center justify-content-center">
                            <h2>присяга</h2>
                            <a onclick="show_current_page_data(event)" href="image-202">присяга</a>
                        </figcaption>                    
                    </figure>
                </div>
            </div>
            -->
        </div>
    </section>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        },
        computed:{
            imageId(){
                return this.$route.params.image_id
            },  
            currentImageObj(){
                window.scrollTo(0,0)
                let currentIten = skrep_storage[this.$route.params.image_id]
                document.title = currentIten.title
                document.getElementsByTagName('meta')['description'].content = currentIten.title + ' ' + currentIten.description
                return currentIten
            }
        },
        methods: {
            changeEmptyFromS(x){
                return x.replace(' ', '-').replace(' ', '-').replace(' ', '-')
            }
    },

    }
</script>
