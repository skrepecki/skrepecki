let youtube_content = ''
let youtube_array = [
    'https://skrepeckiy.eu/'


    
    
]
for(let i = 0; i < youtube_array.length; i++) youtube_content += '<iframe width="100%" height="400px" src="'+youtube_array[i]+'" title="Семен Скрепецкий - Семен Скрепецкий Картины - Скрепоносный Бузотер" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
document.getElementById('inframe_video_section').innerHTML = youtube_content