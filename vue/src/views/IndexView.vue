<template>
    <main class="container-fluid tm-container-content tm-mt-10" id="index_page_main_content"><br>
        <div class="row mb-4">
           <h2 class="col-6 tm-text-primary"><a class="navbar-brand" href="/"><small>Скрепецкий Картины</small></a></h2>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <form action="" class="tm-text-primary">
                    <input type="text" size="0" class="tm-input-paging tm-text-primary" disabled v-bind:value="current_page"> из <span>{{count_pages}}</span>
                </form>
            </div>
        </div>
        <div class="row tm-mb-90 tm-gallery">
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="(item, index) in list_links" v-bind:key="index">
                <figure class="effect-ming tm-video-item">
                    <img v-bind:src="'https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/skrep-img/'+item.image" v-bind:alt="item.title + ' ' + item.description + ' Семен Скрепецкий Картины'" class="img-fluid index_page_list_image">
                    <figcaption class="d-flex align-items-center justify-content-center">
                        <h2>{{ item.title }}</h2>
                        <router-link v-bind:to="'/'+changeEmptyFromS(item.title)+'/'+list_indices[index]+'/Семен-Скрепецкий-Картины/'">{{ item.title }}</router-link>
                    </figcaption>                    
                </figure>
                <div class="d-flex justify-content-between tm-text-gray">
                    <span class="tm-text-gray-light"></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="row tm-mb-90">
            <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                <a class="btn btn-primary tm-btn-prev mb-1" v-on:click="previosButton">Следующая</a>
                  <!-- <div class="tm-paging d-flex" id="random_links">
                    <a href="javascript:void(0);" class="active tm-paging-link">1</a>
                    <a href="javascript:void(0);" class="tm-paging-link">2</a>
                    <a href="javascript:void(0);" class="tm-paging-link">3</a>
                    <a href="javascript:void(0);" class="tm-paging-link">4</a>
                </div>  -->
                <a class="btn btn-primary tm-btn-next" v-on:click="nextButton">Предыдущая</a>
            </div>            
        </div>
    </main>
</template>

<script>
    export default {
        data(){
          return {
            current_page    : 0,
            list_links      : [], 
            __SKREP__STORAGE: SKREP_STORAGE,
            count_pages     : parseInt(SKREP_STORAGE.length / 11),
            list_indices    : [] 
          }
        },
        methods: {
            prepare_list_indices(__current__page){
                if(__current__page < 0) this.current_page = this.count_pages - 1
                if(__current__page > this.count_pages) this.current_page = 0 
                let desde = 11 * this.current_page
                this.list_links   = []
                this.list_indices = []
                for(let i = 0; i < 11; i++) {
                    this.list_indices.push(desde)
                    this.list_links.push(this.__SKREP__STORAGE[desde++])
                }
            },
            changeEmptyFromS(x){ if(x) return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-'); else return '' },
            previosButton(){
                this.current_page--; this.prepare_list_indices(this.current_page)
                document.querySelector('#index_page_main_content').scrollIntoView({ behavior: 'smooth' })
            },
            nextButton(){
                this.current_page++; this.prepare_list_indices(this.current_page)
                document.querySelector('#index_page_main_content').scrollIntoView({ behavior: 'smooth' })
            }
        },
        created(){
            this.prepare_list_indices(this.current_page)
        }
    }
</script>