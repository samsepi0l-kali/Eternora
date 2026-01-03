// audio.js - TRUE IMMEDIATE PLAY
window.backgroundAudio = new Audio('assets/bg-audio.mp3');
window.backgroundAudio.loop = true;
window.backgroundAudio.volume = 0.3;
window.backgroundAudio.controls = false;
window.backgroundAudio.autoplay = true;  // Key line!
window.backgroundAudio.play();  // Double trigger

// Multiple fallback attempts
setTimeout(() => window.backgroundAudio.play(), 100);
setTimeout(() => window.backgroundAudio.play(), 500);
setTimeout(() => window.backgroundAudio.play(), 1000);

// Silent fallback for strict browsers
['click', 'scroll', 'keydown'].forEach(event => {
    document.addEventListener(event, () => {
        window.backgroundAudio.play();
    }, { once: true });
});
