const audio = document.querySelector('#lofi-audio')
const video = document.querySelector('#video')

const svgPlay = document.querySelector('#svg-play-btn')
const svgPause = document.querySelector('#svg-pause-btn')


const playBTN = document.querySelector('#play-buttonn')

// songs info
const songTitle = document.querySelector('#song-title')

const songArtist = document.querySelector('#song-artist')

// back-next-btn
const backBtn = document.querySelector('#back-btn')
const nextBtn = document.querySelector('#next-btn')

// vol-slider
const volSlider = document.querySelector('#vol-slider')

// vol icon 
const volIcon = document.querySelector('#vol-icon')
const muteVolIcon = document.querySelector('#mute-vol-icon')


// states for fetch thing 
let playlist = []
let currentSongIndex = 0
let isPlaying = false


let prevVol = 1
console.log(prevVol);
let prevVolSlider = 1


fetch('data.json').then(respone => respone.json()).then(data => {
    console.log(data);
    playlist = data.songs
    videoPlaylist = data.videos
    console.log("playlist is ready",playlist);
    console.log(videoPlaylist);


    function init() {
        function loadSong(song) {
            console.log(song);
            songTitle.innerHTML = song.title;
            songArtist.innerHTML = song.artist;
            audio.src = song.file
            console.log("audi is set to:", audio.src);
        }

        function loadVideo(vedeo) {
            console.log(vedeo);
            video.src = vedeo.file
        }

        // PLAYBTN listener
        playBTN.addEventListener('click', function(){
            if(audio.paused) {
                audio.play()
                svgPlay.classList.add('hidden')
                svgPause.classList.remove('hidden')
                // ḷogic to fix the artist bug 
                songTitle.textContent = playlist[currentSongIndex].title
                songArtist.textContent = playlist[currentSongIndex].artist

            } else {
                audio.pause()
                // pause ho gya toh play btn dikhna chaiye nah isliye remove the play
                svgPlay.classList.remove('hidden')
                svgPause.classList.add('hidden')
            }

            
        })        
        
        // next-btn listener
        nextBtn.addEventListener('click', function(){
            currentSongIndex++;
            if(currentSongIndex >= playlist.length) {
                currentSongIndex = 0;
            }

            // loading the fkin song at curentsong idnex 
            loadSong(playlist[currentSongIndex])

            loadVideo(videoPlaylist[currentSongIndex])

            // play the fkin song
            audio.play()

            // so that if the song is already pasued and someone clicks on the next btn toh autometically chnge ho jaye chizein 

            svgPlay.classList.add('hidden')
            svgPause.classList.remove('hidden')
        })

        // back-btn listner 
        backBtn.addEventListener('click', function(){
            currentSongIndex--;
            if(currentSongIndex < 0) {
                currentSongIndex = playlist.length -1;
            }

            loadSong(playlist[currentSongIndex])

            loadVideo(videoPlaylist[currentSongIndex])

            // play the fkin song 
            audio.play()
            // same thing here aswell 
            svgPlay.classList.add('hidden')
            svgPause.classList.remove('hidden')
        })

        // automatic song change

        audio.addEventListener('ended', function(){
            currentSongIndex++;
            if(currentSongIndex >= playlist.length) {
                currentSongIndex = 0;
            }

            // load the fkin song 
            loadSong(playlist[currentSongIndex])

            loadVideo(videoPlaylist[currentSongIndex])

            // play the fking song
            audio.play()
            svgPlay.classList.add('hidden')
            svgPause.classList.remove('hidden')
        })

        volSlider.addEventListener('input', function(){
            audio.volume = volSlider.value;
            prevVol = audio.volume
            
            prevVolSlider = volSlider.value

            if(audio.volume <= 0) {
                volIcon.classList.add('hidden')
                muteVolIcon.classList.remove('hidden')
            }
            if(audio.volume > 0) {
                muteVolIcon.classList.add('hidden')
                volIcon.classList.remove('hidden')
            }
        })

        volIcon.addEventListener('click', function(){
            audio.volume = 0;
            volSlider.value = 0
            volIcon.classList.add('hidden')
            muteVolIcon.classList.remove('hidden')
        })



        muteVolIcon.addEventListener('click', function(){
            audio.volume = prevVol
            console.log(audio.volume);
            volSlider.value = prevVolSlider
            muteVolIcon.classList.add('hidden')
            volIcon.classList.remove('hidden')
        })

    }

    init()
})




