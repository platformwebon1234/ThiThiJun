document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.play-pause');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio');
            const audio = document.getElementById(audioId);

            if (audio.paused) {
                audio.play();
                this.textContent = 'Pause'; // Altera o texto do botão para "Pause"
            } else {
                audio.pause();
                this.textContent = 'Play'; // Altera o texto do botão para "Play"
            }
        });
    });
});


