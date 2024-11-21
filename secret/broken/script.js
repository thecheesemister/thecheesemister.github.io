// Make sure the element enters full-screen mode on page load
document.addEventListener("DOMContentLoaded", () => {
    const fullscreenElement = document.getElementById("fullscreen");

    if (fullscreenElement.requestFullscreen) {
        fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) { // Safari support
        fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen) { // IE/Edge support
        fullscreenElement.msRequestFullscreen();
    }
});
