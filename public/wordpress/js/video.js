var tm_video = document.getElementById('tm-video')

let current_played = window.localStorage.getItem('play') || 0

if( current_played > 3 ){
    tm_video.autoplay = false
    tm_video.style.display = 'none'
} else {
    tm_video.autoplay = true
    tm_video.style.display = 'block'
    current_played++
    window.localStorage.setItem('play', current_played)
}



