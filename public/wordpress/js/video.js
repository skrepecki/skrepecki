var tm_video = document.getElementById('video-kuprin')

function trate_video(){
    let current_played = window.localStorage.getItem('play') || 1
    if( current_played % 11 == 0 ) {
        tm_video.style.display = 'block'
        tm_video.play()
        tm_video.loop = true
    } else {
        tm_video.style.display = 'none'
        tm_video.pause()
    }
    current_played++
    window.localStorage.setItem('play', current_played)
}

document.addEventListener('click', function(){ trate_video() })
trate_video()