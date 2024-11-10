// Global variables for the YouTube players
let introPlayer, loopPlayer;

// YouTube IFrame API callback when ready
function onYouTubeIframeAPIReady() {
    // Initialize the intro video player
    introPlayer = new YT.Player('introIframe', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    // Initialize the looping video player (initially hidden)
    loopPlayer = new YT.Player('loopIframe', {
        events: {
            'onReady': onLoopPlayerReady
        }
    });
}

// On window load, make sure both videos are set up correctly
window.onload = function() {
    document.getElementById('loopVideo').classList.add('visible'); // Set visible so it can load in the background
}

// Detect end of intro video to transition to the loop video
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        // Hide intro video and show loop video
        document.getElementById('introVideo').classList.remove('visible');
        document.getElementById('loopVideo').classList.add('visible');
        
        // Start playing the loop video
        loopPlayer.playVideo();
    }
}

// Loop video ready event handler
function onLoopPlayerReady(event) {
    loopPlayer.mute(); // Mute the loop video
    document.getElementById('loopVideo').classList.add('visible'); // Make it visible on load
}

// Show footer when scrolling down
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
