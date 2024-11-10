// Global variables for the YouTube players
let introPlayer, loopPlayer;
const introDiv = document.getElementById('introVideo');
const loopDiv = document.getElementById('loopVideo');

// YouTube IFrame API callback
function onYouTubeIframeAPIReady() {
    console.log("YouTube API Ready");

    // Initialize the intro video player
    introPlayer = new YT.Player('introIframe', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    // Initialize the loop video player
    loopPlayer = new YT.Player('loopIframe', {
        events: {
            'onReady': onLoopPlayerReady
        }
    });

    console.log("YouTube API is ready, players initialized.");
}



function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // When intro video ends, switch to loop video
        introDiv.style.opacity = 0; // Fade out intro video
        setTimeout(() => {
            introDiv.style.display = "none";  // Hide intro
            loopDiv.style.display = "block";  // Show loop video
            loopDiv.style.opacity = 1;        // Fade in loop video
            loopPlayer.playVideo();          // Play loop video
        }, 500); // Delay to allow the opacity transition
    }
}



// Event when the loop video is ready
function onLoopPlayerReady(event) {
    loopPlayer.mute();
    console.log("Loop video is ready and muted.");
}



// Show footer when scrolling
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
