let titlePage = 'Семен Скрепецкий Картины';
let currentHref = window.location.pathname;


let chemaData = document.getElementById('chemaData');
    chemaData.innerHTML = '';
let elScript = document.createElement('script');
    elScript.type = 'application/ld+json';
    
    let dataObj = {
     "@context": "http://schema.org",
     "@type": "RadioStation",
     "image": [
            {   "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png"
            },{
                "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png",
                "width": 165,
                "height": 165
            },{
                "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png",
                "width": 130,
                "height": 130
            },{
                "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png",
                "width": 100,
                "height": 100
            },{
                "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png",
                "width": 80,
                "height": 80
            },{
                "@type": "ImageObject",
                "url": "https://diseno-web-cantabria.github.io/skrepeckiy.web.app/public/wordpress/img/i.png",
                "width": 63,
                "height": 63
            }
     ],
        "name": titlePage,
        "url": window.location.href,
        "sameAs": [],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5,
            "ratingCount": 5
        },
        "address": {
            "@type": "PostalAddress"
        },
        "review": []
    };
    elScript.text = JSON.stringify(dataObj);
    chemaData.appendChild(elScript);