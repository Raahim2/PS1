document.getElementById("actionBtn").addEventListener("click", function() {
    // alert("Button clicked!");
});

//  Video Player using the native HTML5 video element.  Could be replaced with a library like Video.js for more advanced features.

const videoPlayer = document.getElementById('myVideo');
const playButton = document.getElementById('playPause');
const volumeSlider = document.getElementById('volumeSlider');


playButton.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playButton.textContent = "Pause";
    } else {
        videoPlayer.pause();
        playButton.textContent = "Play";
    }
});

volumeSlider.addEventListener('input', () => {
    videoPlayer.volume = volumeSlider.value;
});

videoPlayer.addEventListener('ended', () => {
    playButton.textContent = "Play";
});

// Placeholder API data (replace with your actual API call or local file reading)
const metadata = {
    title: "My Awesome Video",
    description: "This is a description of my awesome video.",
    timestamp: "2024-07-26T12:00:00Z"
};

// Display metadata in HTML placeholders
document.getElementById("videoTitle").textContent = metadata.title;
document.getElementById("videoDescription").textContent = metadata.description;
document.getElementById("videoTimestamp").textContent = metadata.timestamp;
