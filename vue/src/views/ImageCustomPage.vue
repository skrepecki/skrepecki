<template>
    <section>
        <div class="container-fluid tm-container-content tm-mt-10" id="custom_image_page_scroll"><br>
            <div class="row mb-4">
                <h2 class="col-12 tm-text-primary">
                    <a class="navbar-brand" v-bind:href="'/'+changeEmptyFromS(currentImageObj.title)+'/'+imageId+'/Семен-Скрепецкий-Картины/'">{{ currentImageObj.title }}</a>
                </h2>
            </div>
            <div class="row tm-mb-50">            
                <div class="col-xl-9 col-lg-8 col-md-12 col-sm-12">
                    <img v-bind:src="'https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/'+currentImageObj.image" alt="хорошие сруские - Семен Скрепецкий - Скрепоносный Бузотер" class="img-fluid" v-bind:width="width_100">
                    <br><br>
                    <div class="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                        <a class="btn btn-primary tm-btn-prev mb-1" v-on:click="imagePreviosButton">Предыдущая</a>
                        <a class="btn btn-primary tm-btn-next"      v-on:click="imageNextButton">Следующая</a>
                    </div>
                    <br><br>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12"> 
                    <div class="tm-bg-gray tm-video-details">
                        <div class="mb-4">
                            <h5 class="tm-text-gray-dark mb-3">{{ currentImageObj.description }}</h5>
                        </div>
                        <div class="text-center mb-5">
                            <a v-bind:href="'https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/'+currentImageObj.image" class="btn btn-primary tm-btn-big" id="download_link" download="photo_2022-09-26_16-37-03.jpg">Скачать</a>
                        </div>                    
                    </div>
                </div>
            </div>    
            <CommentItem />
            <div class="row tm-mb-90 tm-gallery">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" v-for="(item, index) in array_rand_id" v-bind:key="index">
                    <figure class="effect-ming tm-video-item">
                        <img v-bind:src="'https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/'+__SKREP__STORAGE[item].image" v-bind:alt="__SKREP__STORAGE[item].title + ' ' + __SKREP__STORAGE[item].description + ' Семен Скрепецкий Картины'" class="img-fluid index_page_list_image">
                        <figcaption class="d-flex align-items-center justify-content-center">
                            <h2>{{ __SKREP__STORAGE[item].title }}</h2>
                            <router-link v-bind:to="'/'+changeEmptyFromS(__SKREP__STORAGE[item].title)+'/'+item+'/Семен-Скрепецкий-Картины/'">{{ __SKREP__STORAGE[item].title }}</router-link>
                        </figcaption>                    
                    </figure>
                    <div class="d-flex justify-content-between tm-text-gray">
                        <span class="tm-text-gray-light"></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import CommentItem from '../components/CommentItem'
    export default{
        components: { CommentItem },
        data(){
            return{
                array_rand_id: [],
                __SKREP__STORAGE: SKREP_STORAGE
            }
        },
        computed:{
            imageId(){
                return this.$route.params.image_id
            },  
            currentImageObj(){
                let currentIten = SKREP_STORAGE[this.$route.params.image_id]
                this.scrollToimage()
                this.completeRandomArray()
                return currentIten
            }
        },
        methods: {
            changeEmptyFromS(x){
                return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-')
            },
            scrollToimage(){
                try{
                    setTimeout(function(){ document.getElementById('custom_image_page_scroll').scrollIntoView({ behavior: 'smooth' }) }, 700)
                } catch(e){}    
            },
            imagePreviosButton(){
                let nextIndice = parseInt(this.$route.params.image_id) - 1
                if(nextIndice < 0) nextIndice = SKREP_STORAGE.length - 1
                this.$router.push('/' + this.changeEmptyFromS(this.__SKREP__STORAGE[nextIndice].title) + '/'+nextIndice+'/Семен-Скрепецкий-Картины')
            },
            imageNextButton(){
                let nextIndice = parseInt(this.$route.params.image_id) + 1
                if(nextIndice > SKREP_STORAGE.length - 1) nextIndice = 0
                this.$router.push('/' + this.changeEmptyFromS(this.__SKREP__STORAGE[nextIndice].title) + '/'+nextIndice+'/Семен-Скрепецкий-Картины')
            },
            randomSkrep(min, max){ return Math.floor(Math.random() * (max - min)) + min },
            completeRandomArray(){
                this.array_rand_id = []
                for(let i = 0; i < 11; i++){
                    let randomNumber = this.randomSkrep(0, SKREP_STORAGE.length - 1)
                    this.array_rand_id.push(randomNumber)
                }
            }
        },
        created(){
            this.scrollToimage()
            this.completeRandomArray()
        }
    }
</script>
