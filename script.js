// Globale Variablen für die Player
let introPlayer, loopPlayer;

// Wenn die YouTube iFrame-API bereit ist, wird diese Funktion aufgerufen
function onYouTubeIframeAPIReady() {
    // Initialisiere den Intro-Player
    introPlayer = new YT.Player('introIframe', {
        events: {
            'onStateChange': onPlayerStateChange // Wenn sich der Player-Zustand ändert
        }
    });

    // Initialisiere den Loop-Player (wird erst sichtbar, wenn das Intro endet)
    loopPlayer = new YT.Player('loopIframe', {
        events: {
            'onReady': onLoopPlayerReady
        }
    });
}

window.onload = function() {
    // Stelle sicher, dass das Loop-Video direkt geladen wird, aber unsichtbar bleibt
    document.getElementById('loopVideo').style.display = "none";
    document.getElementById('loopVideo').classList.add('visible');
}

// Wird aufgerufen, wenn das Intro-Video fertig ist
function onPlayerStateChange(event) {
    // Wenn das Intro-Video endet (PlayerState.ENDED)
    if (event.data === YT.PlayerState.ENDED) {
        // Zeige das Loop-Video sofort und starte es
        document.getElementById('introVideo').style.display = "none";
        document.getElementById('loopVideo').style.display = "block";
        
        // Starte das Schleifen-Video
        loopPlayer.playVideo();
    }
}


// Funktion, wenn der Loop-Player bereit ist (um sicherzustellen, dass alles geladen ist)
function onLoopPlayerReady(event) {
    loopPlayer.mute(); // Stummschalten des Loop-Videos
    // Sofort sichtbar machen, um den Übergang zu verbessern
    document.getElementById('loopVideo').classList.add('visible');
}



// Footer sichtbar machen beim Scrollen
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
