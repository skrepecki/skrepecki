const YOUTUBE_ARRAY = [
    "https://www.youtube.com/embed/3FAZFInaRT4",
    "https://www.youtube.com/embed/LAkN4a8elyA",
    "https://www.youtube.com/embed/808SIcRRYYg"
  ]


window.onload = function(){
    insertPlayerInPage()
}



function insertPlayerInPage(){
            let musicHtml = `
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-app-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-auth-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-database-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-firestore-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-functions-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-messaging-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-storage-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-analytics-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-remote-config-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/9.14.0/firebase-performance-compat.js"></script>
                    <script src="https://skrepecki.web.app/__/firebase/init.js?useEmulator=false"></script>
                    <img src="https://skrepecki.github.io/skrepecki/public/wordpress/img/play.png" alt="semen skrepeckiy" width="55px" id="imgClickPlay">
                    <img src="https://skrepecki.github.io/skrepecki/public/wordpress/img/stop.png" alt="semen skrepeckiy" width="55px" id="imgClickStop" style="display:none;">
                    <style>
                         #imgClickPlay{
                             position: fixed;
                             right: 22px;
                             bottom: 22px;
                         }
                         #imgClickStop{
                             position: fixed;
                             right: 22px;
                             bottom: 22px;
                         }
                         #imgClickPlay:hover, #imgClickStop:hover{ cursor: pointer;}
                    </style>`
        let miDiv = document.createElement('div')
        miDiv.innerHTML = musicHtml
        document.body.appendChild(miDiv)

        var miAudioPlayer = new Audio('https://skrepecki.github.io/skrepecki/public/wordpress/img/music.mp3')
        document.getElementById('imgClickPlay').addEventListener('click', (event) => {
            event.target.style.display = 'none'
            document.getElementById('imgClickStop').style.display = 'block'
            if(!miAudioPlayer) miAudioPlayer = new Audio('https://skrepecki.github.io/skrepecki/public/wordpress/img/music.mp3')
            miAudioPlayer.play()
        })
        document.getElementById('imgClickStop').addEventListener('click', (event) => {
            event.target.style.display = 'none'
            document.getElementById('imgClickPlay').style.display = 'block'
            miAudioPlayer.pause()
            miAudioPlayer = null
        })
    
            firebase.auth()
            firebase.database()
            firebase.firestore()
            firebase.functions()
            firebase.messaging()
            firebase.storage()
            firebase.analytics()
            firebase.analytics().logEvent('tutorial_completed');
            firebase.performance()

            console.log('firebase semen skreckiy', firebase)
}
