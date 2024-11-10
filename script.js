// Global variables for the YouTube players
let introPlayer, loopPlayer;
const introDiv = document.getElementById('introVideo');
const loopDiv = document.getElementById('loopVideo');
const loader = document.createElement('div'); // Loader element

// Style the loader (basic spinner)
loader.innerHTML = '<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2em; color: white;">Loading...</div>';
document.body.appendChild(loader);
loader.style.display = 'none';

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

// Event when the loop video is ready
function onLoopPlayerReady(event) {
    console.log("Loop video is ready");
    loopPlayer.mute();
    console.log("Loop video is ready and muted.");
}

// Function to handle the end of the intro video
function onPlayerStateChange(event) {
    console.log("Intro video state change:", event.data);

    if (event.data === YT.PlayerState.ENDED) {
        console.log("Intro video ended. Switching to loop video.");

        // Display loader during the switch
        loader.style.display = 'block';
        
        // Hide intro video and show loop video after a slight delay
        setTimeout(() => {
            introDiv.style.display = "none"; // Hide intro video
            loopDiv.style.display = "block"; // Show loop video
            
            // Hide the loader and start the loop video
            loader.style.display = 'none';
            loopPlayer.playVideo();
            console.log("Loop video should now be visible.");
        }, 500); // Delay for smooth transition
    }
}

// Window onload function
window.onload = function() {
    console.log("Window loaded. Setting up initial video state.");
    introDiv.style.display = "block"; // Ensure intro video is visible initially
    loopDiv.style.display = "none"; // Hide loop video initially
}

// Show footer when scrolling
window.onscroll = function() {
    const footer = document.querySelector('footer');
    footer.classList.add('visible');
};
