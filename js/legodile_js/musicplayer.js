document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('africanChant');
    var playPauseBtn = document.getElementById('playPauseBtn');

    audio.volume = 0.1;

    // Automatically play the audio when the page loads
    audio.play().then(() => {
        playPauseBtn.classList.add('playing');
    }).catch(error => {
        console.error('Audio playback failed:', error);
    });

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.add('playing');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('playing');
        }
    });
});
