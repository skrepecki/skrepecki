function set_ld_json(__title__page__){
    
    let elHead = document.getElementsByTagName('head')[0]
    let scripts = elHead.getElementsByTagName( 'script' ); 
    for(let i = 0; i < scripts.length; i++) {
      let sc = scripts[i];
      if(sc.type == 'application/ld+json') sc.remove();
    }
    let dataObj = { "@context": "http://schema.org", "@type": "WebSite"}
    dataObj['name'] = __title__page__;
    dataObj['url'] = window.location.href
    let elScript = document.createElement('script')
    elScript.type = 'application/ld+json'
    elScript.text = JSON.stringify(dataObj)
    document.querySelector('head').appendChild(elScript)
    
    dataObj = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": window.location.href,
        "name": __title__page__,
        "logo": "https://skrepecki.github.io/skrepecki/public/wordpress/skrep-img/real.webp"
    }
    elScript = document.createElement('script');
    elScript.type = 'application/ld+json';
    elScript.text = JSON.stringify(dataObj);
    document.querySelector('head').appendChild(elScript);
    
    
    
    
    
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
            "name": __title__page__,
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
        document.querySelector('head').appendChild(elScript);
    
}

set_ld_json()