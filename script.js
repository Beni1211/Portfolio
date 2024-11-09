// YouTube API laden
let introPlayer, loopPlayer;
function onYouTubeIframeAPIReady() {
    introPlayer = new YT.Player('introIframe', {
        events: {
            'onReady': onIntroPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    loopPlayer = new YT.Player('loopIframe', {
        events: {
            'onReady': onLoopPlayerReady
        }
    });
}

function onIntroPlayerReady(event) {
    event.target.playVideo();
}

function onLoopPlayerReady(event) {
    loopPlayer.mute();
}

// Wechsel zu Schleifen-Video, wenn Intro endet
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        document.getElementById('introVideo').style.display = "none";
        document.getElementById('loopVideo').style.display = "block";
        loopPlayer.playVideo();
    }
}

// Footer sichtbar machen beim Scrollen
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
