document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const currentTrack = document.getElementById('currentTrack');

    const tracks = [
        { src: 'sounds/geometry-dash1.mp3', name: 'xStep - DJVI' },
        { src: 'sounds/geometry-dash2.mp3', name: 'WaterFlame - Electroman' },
    ];

    let currentTrackIndex = 0;

    function playTrack(index) {
        audioPlayer.src = tracks[index].src;
        currentTrack.textContent = `Tocar: ${tracks[index].name}`;
        audioPlayer.play().catch(error => {
            console.log('Reprodução automática bloqueada, clique para continuar.');
        });
    }

    // Função para alternar entre as faixas
    audioPlayer.addEventListener('ended', function() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        playTrack(currentTrackIndex);
    });

    // Função para alternar entre play e pause
    playPauseButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = '▶️';
        }
    });

    // Tenta iniciar automaticamente a primeira faixa
    playTrack(currentTrackIndex);
});

