let player;
const heartBtn = document.getElementById('heartBtn');
const statusText = document.getElementById('status');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '_6j54PSb6ac', // ID de la canción de LÚA
        playerVars: { 'autoplay': 0, 'controls': 0 }
    });
}

heartBtn.addEventListener('click', () => {
    const state = player.getPlayerState();
    
    if (state !== 1) { // Si no está reproduciendo
        player.playVideo();
        heartBtn.classList.add('latir');
        statusText.innerText = "Escuchando... ✨";
    } else {
        player.pauseVideo();
        heartBtn.classList.remove('latir');
        statusText.innerText = "Pausado";
    }
});
