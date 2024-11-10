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

// Window onload function
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    overflow: hidden;
    font-family: Arial, sans-serif;
    background-color: black; /* Ensures a dark background */
}

.video-container {
    position: fixed; /* Fullscreen fixed positioning */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0; /* Ensures video is at the bottom */
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;  /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.video.visible {
    opacity: 1;  /* Make the video visible */
}

.video iframe {
    width: 100%;  /* Full width of the video container */
    height: 100%; /* Full height of the video container */
    border: none;
    position: absolute;
    top: 0;
    left: 0;
}

.center-buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1;  /* Ensure buttons appear above the video */
}

.button {
    color: white;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
}

footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 0.9em;
    z-index: 1; /* Ensure footer is above video */
}


// Show footer when scrolling
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
