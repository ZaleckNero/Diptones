// Get the video element
var video = document.getElementById("myVideo");

// Function to toggle between play and pause
function togglePlayPause() {
  if (video.paused) {
    video.play();
    document.getElementById("myBtn").textContent = "Pause";
  } else {
    video.pause();
    document.getElementById("myBtn").textContent = "Play";
  }
}