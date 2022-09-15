var tm_video = document.getElementById('video-kuprin')


document.addEventListener('click', function(){
    let current_played = window.localStorage.getItem('play') || 0

    if( current_played % 7 == 0 ){
        tm_video.style.display = 'block'
        tm_video.play()
        tm_video.loop = true
    } else {
        tm_video.autoplay = false
        tm_video.style.display = 'none'
        tm_video.pause()
    }

    current_played++
    window.localStorage.setItem('play', current_played)

    console.log(current_played)
})