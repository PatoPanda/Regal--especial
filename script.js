let player;
const heartBtn = document.getElementById('heartBtn');
const statusText = document.getElementById('status');

// Tus frases personalizadas
const frases = [
    "te amo",
    "Un mes más mi lady :3",
    "Juntos por siempre",
    "Eres mi mundo",
    ":3",
    "<3",
    "Estoy aquí para ti",
    "Te doy mi corazón",
    "Para toda la vida si?"
];

let fraseIndex = 0;
let intervaloFrases;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '_6j54PSb6ac', 
        playerVars: { 'autoplay': 0, 'controls': 0 }
    });
}

function cambiarFrase() {
    const contenedorTexto = document.getElementById('status');
    contenedorTexto.innerText = frases[fraseIndex];
    fraseIndex = (fraseIndex + 1) % frases.length;
}

heartBtn.addEventListener('click', () => {
    const state = player.getPlayerState();
    
    if (state !== 1) { // Iniciar música y frases
        player.playVideo();
        heartBtn.classList.add('latir');
        cambiarFrase();
        intervaloFrases = setInterval(cambiarFrase, 3000); // Cambia cada 3 segundos
    } else { // Pausar
        player.pauseVideo();
        heartBtn.classList.remove('latir');
        clearInterval(intervaloFrases);
        document.getElementById('status').innerText = "Pausado";
    }
});
