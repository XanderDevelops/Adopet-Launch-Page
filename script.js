document.addEventListener('DOMContentLoaded', function() {

    const woufBtn = document.getElementById('wouf-btn');
    const meowBtn = document.getElementById('meow-btn');
    const woufContent = document.getElementById('wouf-content');
    const meowContent = document.getElementById('meow-content');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const quackBtn = document.getElementById('quack-btn');
    
    const woufBtn1 = document.getElementById('wouf-btn1');    
    const woufBtn2 = document.getElementById('wouf-btn2');
    const woufBtn3 = document.getElementById('wouf-btn3');
    const woufBtn4 = document.getElementById('wouf-btn4');    
    const meowBtn1 = document.getElementById('meow-btn1');
    const meowBtn2 = document.getElementById('meow-btn2');
    const meowBtn3 = document.getElementById('meow-btn3');    
    const meowBtn4 = document.getElementById('meow-btn4');
    const woufContent1 = document.getElementById('wouf-content1');
    const woufContent2 = document.getElementById('wouf-content2');
    const woufContent3 = document.getElementById('wouf-content3');
    const woufContent4 = document.getElementById('wouf-content4');
    const meowContent1 = document.getElementById('meow-content1'); 
    const meowContent2 = document.getElementById('meow-content2');    
    const meowContent3 = document.getElementById('meow-content3');
    const meowContent4 = document.getElementById('meow-content4');

    const playSound = (path) => {
    const audio = new Audio(path);
    audio.play();
    };

    woufBtn.addEventListener('click', () => {
        woufBtn.classList.add('hidden');
        meowBtn.classList.add('hidden');
        woufContent.style.display = 'block';  
        playSound('Audio/Bark.mp3');
    });

    woufBtn1.addEventListener('click', () => {
        woufContent1.style.display = 'none';  
        woufContent2.style.display = 'block';  
        playSound('Audio/Bark.mp3');
        });

    woufBtn2.addEventListener('click', () => {
        woufContent2.style.display = 'none';  
        woufContent3.style.display = 'block';  
        playSound('Audio/Bark.mp3');
        });

    woufBtn3.addEventListener('click', () => {
        woufContent3.style.display = 'none';  
        woufContent4.style.display = 'block';  
        playSound('Audio/Bark.mp3');
        });

//////////Cats/////////////

    meowBtn.addEventListener('click', () => {
        woufBtn.classList.add('hidden');
        meowBtn.classList.add('hidden');
        meowContent.style.display = 'block';
        playSound('Audio/Meow.mp3');
        });

    meowBtn1.addEventListener('click', () => {
        meowContent1.style.display = 'none';  
        meowContent2.style.display = 'block';  
        playSound('Audio/Meow.mp3');
        });

    meowBtn2.addEventListener('click', () => {
        meowContent2.style.display = 'none';  
        meowContent3.style.display = 'block';  
        playSound('Audio/Meow.mp3');
        });

    meowBtn3.addEventListener('click', () => {
        meowContent3.style.display = 'none';  
        meowContent4.style.display = 'block';  
        playSound('Audio/Meow.mp3');
        });

    subscribeBtn.addEventListener('click', () => {
    alert('Thank you for subscribing!');
    });

    // get the text element
    const text = document.querySelector('.animate-text');

    // detect when the user scrolls
    window.addEventListener('scroll', () => {
    // get the position of the text element
    const textPosition = text.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    // if the text is in the viewport, add the animation class
    if (textPosition < screenPosition) {
        text.classList.add('animate-text');
    }
    });

});
