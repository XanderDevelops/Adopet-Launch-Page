document.addEventListener('DOMContentLoaded', function() {

    const woufBtn = document.getElementById('wouf-btn');
    const meowBtn = document.getElementById('meow-btn');
    const woufContent = document.getElementById('wouf-content');
    const meowContent = document.getElementById('meow-content');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const quackBtn = document.getElementById('quack-btn');

    const playSound = (path) => {
    const audio = new Audio(path);
    audio.play();
    };

    woufBtn.addEventListener('click', () => {
    woufBtn.classList.add('hidden');
    meowBtn.classList.add('hidden');
    woufContent.classList.remove('hidden');
    setTimeout(() => {
        woufContent.style.opacity = 1;
    }, 100);
    playSound('Audio/Bark.mp3');
    });

    meowBtn.addEventListener('click', () => {
    woufBtn.classList.add('hidden');
    meowBtn.classList.add('hidden');
    meowContent.classList.remove('hidden');
    setTimeout(() => {
        meowContent.style.opacity = 1;
    }, 100);
    playSound('Audio/Meow.mp3');
    });

    subscribeBtn.addEventListener('click', () => {
    alert('Thank you for subscribing!');
    });

    quackBtn.addEventListener('click', () => {
    woufBtn.classList.remove('hidden');
    meowBtn.classList.remove('hidden');
    woufContent.style.opacity = 0;
    woufContent.classList.add('hidden');
    meowContent.style.opacity = 0;
    meowContent.classList.add('hidden');
    quackBtn.classList.add('hidden');
    playSound('Audio/Bark.mp3');
    });

});
