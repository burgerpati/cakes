  // Play the Happy Birthday song
    const song = document.getElementById('birthday-song');
    song.play();

    // Show balloons and confetti after a delay
    setTimeout(() => {
        document.querySelector('.balloons').classList.add('active');
        document.querySelector('.confetti').classList.add('active');
    }, 1000);
}
