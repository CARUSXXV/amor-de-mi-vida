document.getElementById('reveal').addEventListener('click', function() {
    const sorpresa = document.getElementById('sorpresa');
    sorpresa.classList.toggle('hidden');
    this.textContent = sorpresa.classList.contains('hidden') ? 'Descubre algo especial' : '¡Sorpresa!';
    
    // Animación de amor
    this.classList.add('heartBeat');
    setTimeout(() => this.classList.remove('heartBeat'), 1000); // Remover animación después de 1 segundo
});

document.getElementById('playMusic').addEventListener('click', function() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
        this.textContent = 'Pausar Música';
    } else {
        music.pause();
        this.textContent = 'Reproducir Música';
    }

    // Animación de amor
    this.classList.add('pulse');
    setTimeout(() => this.classList.remove('pulse'), 1000); // Remover animación después de 1 segundo
});