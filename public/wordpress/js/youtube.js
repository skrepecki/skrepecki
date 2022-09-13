let youtube_content = ''

let youtube_array = [
    'https://www.youtube.com/embed/fa28cdnpG04',
    
]

for(let i = 0; i < youtube_array.length; i++) youtube_content += '<iframe width="100%" height="400px" src="'+youtube_array[i]+'"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

document.getElementById('inframe_video_section').innerHTML = youtube_content