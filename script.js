// Global variables for the YouTube players
let introPlayer, loopPlayer;

// YouTube IFrame API callback
function onYouTubeIframeAPIReady() {
    console.log("YouTube API Ready");
    
    // Initialize the intro video player
    introPlayer = new YT.Player('introIframe', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    // Initialize the looping video player
    loopPlayer = new YT.Player('loopIframe', {
        events: {
            'onReady': onLoopPlayerReady
        }
    });
}

// When the window loads, we’ll set the loop video to load in the background
window.onload = function() {
    console.log("Window loaded");
    document.getElementById('loopVideo').style.opacity = "0"; // Ensures the loop video loads
}

// Detect the end of the intro video to switch to the loop video
function onPlayerStateChange(event) {
    console.log("Intro video state change:", event.data);

    if (event.data === YT.PlayerState.ENDED) {
        console.log("Intro video ended. Switching to loop video.");

        // Hide intro and show loop video
        document.getElementById('introVideo').classList.remove('visible');
        document.getElementById('loopVideo').classList.add('visible');

        // Start the loop video
        loopPlayer.playVideo();
    }
}

// When the loop video is ready, mute it and prepare it for display
function onLoopPlayerReady(event) {
    console.log("Loop video is ready");
    loopPlayer.mute();
}

// Show footer when scrolling down
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
