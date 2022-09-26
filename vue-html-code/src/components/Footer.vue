<template>
    <footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div class="container-fluid tm-container-small">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-6" v-for="(item, index) in list_links" v-bind:key="index">
                    <router-link v-bind:to="'/'+changeEmptyFromS(item.title)+'/'+index+'/Семен-Скрепецкий-Картины/'" class="tm-text-gray d-block mb-2">{{item.title}}</router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 px-5">
                    Copyright 2022 <a target="_blank" href="https://www.patreon.com/user?u=53498685">Patreon</a> <a target="_blank" href="/sitemap.xml">Sitemap</a> <a target="_blank" href="/go.xml">Go</a> 
                    <span id="person_visited">Поситителей: -720</span>
                </div>
                <div class="col-lg-6 col-md-6 col-12 px-5">
                    <a target="_blank" href="https://www.google.com/ping?sitemap=https://skrepecki.web.app/sitemap.xml">Ping</a> / <a href="https://github.com/diseno-web-cantabria/skrepeckiy.web.app" target="_blank">Git Hub</a> / Заказать сайт <a href="https://t.me/diseno_web_cantabria" target="_blank">Telegram</a>
                </div>
            </div>
        </div>
    </footer>
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


