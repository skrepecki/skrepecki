<template>
  <div>
    <div id="loader-wrapper">
          <div id="loader"><span>{{ thisUrlPage }}</span></div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <h1><a class="navbar-brand" href="/" id="navbar-brand"><i class="fas fa-film mr-2"></i>Семен Скрепецкий</a></h1>
            <button id="button_click_menu" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Semen Skrepeckiy Images">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="z-index: 1000;">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0" id="list_a_links">
                <li id="index-page"  class="nav-item"><router-link v-bind:class="'nav-link nav-link-1 ' + one_class" to="/">Картины</router-link ></li>
                <li id="video-page"  class="nav-item"><router-link v-bind:class="'nav-link nav-link-2 ' + two_class" to="/stream/Semen-Skrepecki-Video">Видео</router-link ></li>
                <li id="login-page"  class="nav-item"><router-link v-bind:class="'nav-link nav-link-3 ' + three_class" to="/😊🍼🍼😪😪🛺🚨🚔🚍🚘😊🪰🪱🪴🫐🫒🫑🫓🫔🫕🫖🧋🪨🪵🛖🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😿 😾😉😌😍🥰😘😗😙😚/Semen-Skrepecki-Registration-Login">Логин</router-link ></li> 
                <li id="robert-page" class="nav-item"><router-link v-bind:class="'nav-link nav-link-4 ' + fo_class" to="/😘🐀😜😮😮🦦🦥🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌴😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀/Semen-Skrepecki-Robert-Burdai">Роберт</router-link ></li>
            </ul>
            </div>
        </div>
    </nav>
    <section class="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" v-bind:style="image_class">
        <video controls="controls" id="video-kuprin" width="40%" height="77px" style="display:none;"><source src="https://skrepecki.github.io/skrepecki/public/wordpress/img/dmitrii-kuprin.mp4" type="video/mp4"></video>  
        <!-- <form class="d-flex tm-search-form">
        <input class="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success tm-search-btn" type="submit">
            <i class="fas fa-search"></i>
        </button>
        </form> -->
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
        one_class: '', two_class: '', three_class: '', fo_class: '',
        image_class: 'background-image: url("https://skrepecki.github.io/skrepecki/public/wordpress/img/top_banner.jpg"); background-size: cover; background-repeat: no-repeat;'
    }
  },  
  computed:{
    thisUrlPage(){
        this.one_class = ''; this.two_class = ''; this.three_class = ''; this.fo_class = ''
        let namePage = this.$route.name
        if(namePage) {
            let navbarSupportedContent = document.getElementById('navbarSupportedContent')
            if(navbarSupportedContent) navbarSupportedContent.classList.remove('show')
            switch(namePage){
                case 'IndexPage' : this.one_class   = 'active'
                    this.image_class = 'background-image: url("https://skrepecki.github.io/skrepecki/public/wordpress/img/top_banner.jpg"); background-size: cover; background-repeat: no-repeat;' 
                    break
                case 'VideoPage' : this.two_class   = 'active'
                    this.image_class = 'background-image: url("https://skrepecki.github.io/skrepecki/public/wordpress/img/top_banner2.jpg"); background-size: cover; background-repeat: no-repeat;'
                    break
                case 'LoginPage' : this.three_class = 'active'
                    this.image_class = 'background-image: url("https://skrepecki.github.io/skrepecki/public/wordpress/img/top_banner2.jpg"); background-size: cover; background-repeat: no-repeat;'
                    break
                case 'BurdaiPage': this.fo_class    = 'active'
                    this.image_class = 'background-image: url("https://skrepecki.github.io/skrepecki/public/wordpress/img/top_banner2.jpg"); background-size: cover; background-repeat: no-repeat;'
                    break
            }
            this.prepareVideoCuprin()
            this.pushLdJsonToHeadPage()
        }
        return this.$route.name
    },
  },
  methods: {
    prepareVideoCuprin(){
        let videoKuprin = document.getElementById('video-kuprin')
        let currentHost = window.location.host
        if(videoKuprin && !currentHost.includes(':8080')){
            let tm_video = document.getElementById('video-kuprin')
            let current_played = window.localStorage.getItem('play') || 1
            if( current_played % 11 == 0 ) {
                tm_video.style.display = 'block'
                tm_video.style.width   = '50%'
                tm_video.style.width   = '50%'
                tm_video.style.height  = '77px'
                tm_video.play()
                tm_video.loop = true
            } else {
                tm_video.style.display = 'none'
                tm_video.pause()
            }
            current_played++
            window.localStorage.setItem('play', current_played)
        }
    },
    pushLdJsonToHeadPage(){
        let __title__ = 'Семен Скрепецкий'
        try{
            __title__ = SKREP_STORAGE[parseInt(this.$route.params.image_id)].title
        } catch(error){}


        let elHead = document.getElementsByTagName('head')[0]
        let scripts = elHead.getElementsByTagName( 'script' ); 
        for(let i = 0; i < scripts.length; i++) {
            let sc = scripts[i];
            if(sc.type == 'application/ld+json') sc.remove();
        }
        

        let dataObj = { "@context": "http://schema.org", "@type": "WebSite"}
        dataObj['name'] = __title__
        dataObj['url'] = window.location.href
        let elScript = document.createElement('script')
        elScript.type = 'application/ld+json'
        elScript.text = JSON.stringify(dataObj)
        document.querySelector('head').appendChild(elScript)


        dataObj = {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": window.location.href,
            "name": __title__,
            "logo": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp"
        }
        elScript = document.createElement('script');
        elScript.type = 'application/ld+json';
        elScript.text = JSON.stringify(dataObj);
        document.querySelector('head').appendChild(elScript)


        let randomUsers = (min, max) => Math.floor(Math.random() * (max - min)) + min

        dataObj = {
         "@context": "http://schema.org",
         "@type": "RadioStation",
         "image": [
                {   "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp"
                },{
                    "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp",
                    "width": 165,
                    "height": 165
                },{
                    "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp",
                    "width": 130,
                    "height": 130
                },{
                    "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp",
                    "width": 100,
                    "height": 100
                },{
                    "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp",
                    "width": 80,
                    "height": 80
                },{
                    "@type": "ImageObject",
                    "url": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp",
                    "width": 63,
                    "height": 63
                }
         ],
            "name": __title__,
            "url": window.location.href,
            "sameAs": [],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": randomUsers(1,5),
                "ratingCount": randomUsers(1, 1000),
            },
            "address": {
                "@type": "PostalAddress"
            },
            "review": []
        }

        elScript = document.createElement('script');
        elScript.type = 'application/ld+json';
        elScript.text = JSON.stringify(dataObj);
        document.querySelector('head').appendChild(elScript)
    }
  },
}
</script>

