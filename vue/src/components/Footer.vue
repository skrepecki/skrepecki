<template>
    <footer class="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <StreamVue />
        <div class="container-fluid tm-container-small">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-6" v-for="(item, index) in list_links" v-bind:key="index">
                    <a v-bind:href="'/'+changeEmptyFromS(item.title)+'/'+index+'/Семен-Скрепецкий-Картины/'" class="tm-text-gray d-block mb-2">{{item.title}}</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 px-5">
                    Copyright 2022 <a target="_blank" href="https://www.patreon.com/user?u=53498685">Patreon</a> <a target="_blank" href="/sitemap.xml">Sitemap</a> <a target="_blank" href="/go.xml">Go</a> 
                        <span> Поситителей: {{ user_visited }}</span>
                </div>
                <div class="col-lg-6 col-md-6 col-12 px-5">
                    <a target="_blank" href="https://www.google.com/ping?sitemap=https://skrepecki.web.app/sitemap.xml">Ping</a> / <a href="https://github.com/skrepecki/skrepecki" target="_blank">Git Hub</a> / Заказать сайт <a href="https://t.me/diseno_web_cantabria" target="_blank">Telegram</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import StreamVue from '../components/StreamVue'
export default {
    components: {StreamVue},
    data(){
      return {
          list_links  : SKREP_STORAGE,          
          user_visited: 'Loading..'
      }
    },
    methods: {
        changeEmptyFromS(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-')
        },
        showMeVisitedUsers(){
            __get(__child(__dbRef, 'visited')).then((snapshot) => {
                if (snapshot.exists()) {
                    this.user_visited = parseInt(snapshot.val().count)
                    this.add_new_visit()
                } else {
                  console.log("No data available realtime database /visited");
                }
            }).catch((error) => {
              console.error(error);
            })
        },
        add_new_visit(){
            let this_user_have = window.localStorage.getItem('this_user_have') || false
            if(!this_user_have){
                this.user_visited++
                __set(__ref(__Database, 'visited'), { count:  this.user_visited })        
            }
            window.localStorage.setItem('this_user_have', 'this user is counted'   )
        }
    },
    created(){
        let contextApp = this
        setTimeout(function(){ contextApp.showMeVisitedUsers() }, 1000)
        setTimeout(function(){ if(window.localStorage.getItem('email')){ document.title = window.localStorage.getItem('email'); }; }, 3000)
    },
}
</script>


