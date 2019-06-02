(function () {
    var Juego = document.getElementById("gameif")
        videoFullscreen = document.getElementById("video-fullscreen");

    if (gameif && videoFullscreen) {
        videoFullscreen.addEventListener("click", function (evt) {
            if (Juego.requestFullscreen) {
                Juego.requestFullscreen();
            }
            else if (Juego.msRequestFullscreen) {
                Juego.msRequestFullscreen();
            }
            else if (Juego.mozRequestFullScreen) {
                Juego.mozRequestFullScreen();
            }
            else if (Juego.webkitRequestFullScreen) {
                Juego.webkitRequestFullScreen();
                /*
                    *Kept here for reference: keyboard support in full screen
                    * Juego.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                */
            }
        }, false);
    }
})();

