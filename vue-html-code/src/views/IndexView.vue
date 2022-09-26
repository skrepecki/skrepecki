<template>
    <main class="container-fluid tm-container-content tm-mt-60" id="index_page_main_content">
        <div class="row mb-4">
           <h2 class="col-6 tm-text-primary"><a class="navbar-brand" href="/"><small>Скрепецкий Картины</small></a></h2>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <form action="" class="tm-text-primary">
                    Page <input type="text" value="0" size="0" class="tm-input-paging tm-text-primary" id="current_page_value" disabled> of <span id="pages_span">pages</span>
                </form>
            </div>
        </div>
        <div class="row tm-mb-90 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="(item, index) in list_links" v-bind:key="index">
                <figure class="effect-ming tm-video-item">
                    <img v-bind:src="'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/'+item.image" v-bind:alt="item.title + ' ' + item.description + ' Семен Скрепецкий Картины'" class="img-fluid index_page_list_image">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>хорошие сруские</h2>
                        <router-link v-bind:to="'/'+changeEmptyFromS(item.title)+'/'+index+'/Семен-Скрепецкий-Картины/'">{{ item.title }}</router-link>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light"></span>
                    <span></span>
                </div>
            </div>
        </div>
        <!--
        <div class="row tm-mb-90">
            <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <a class="btn btn-primary tm-btn-prev mb-1" id="previos_button">Предыдущая</a>
                <div class="tm-paging d-flex" id="random_links">
                    <a href="javascript:void(0);" class="active tm-paging-link">1</a>
                    <a href="javascript:void(0);" class="tm-paging-link">2</a>
                    <a href="javascript:void(0);" class="tm-paging-link">3</a>
                    <a href="javascript:void(0);" class="tm-paging-link">4</a>
                </div>
                <a class="btn btn-primary tm-btn-next" id="next_button">Следующая</a>
            </div>            
        </div>
        -->
    </main>
</template>

<script>
    export default {
      data(){
        return {
            list_links : skrep_storage
        }
      },
        methods: {
            changeEmptyFromS(x){
                return x.replace(' ', '-').replace(' ', '-').replace(' ', '-')
            }
        },
    }
    </script>