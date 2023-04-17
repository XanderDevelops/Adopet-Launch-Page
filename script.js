document.addEventListener('DOMContentLoaded', function() {

    const woufBtn = document.getElementById('wouf-btn');
    const meowBtn = document.getElementById('meow-btn');
    const woufContent = document.getElementById('wouf-content');
    const meowContent = document.getElementById('meow-content');
    const quackBtn = document.getElementById('quack-btn');
    
    const woufBtn1 = document.getElementById('wouf-btn1');    
    const woufBtn2 = document.getElementById('wouf-btn2');
    const woufBtn3 = document.getElementById('wouf-btn3');
    const meowBtn1 = document.getElementById('meow-btn1');
    const meowBtn2 = document.getElementById('meow-btn2');
    const meowBtn3 = document.getElementById('meow-btn3');    
    const woufContent1 = document.getElementById('wouf-content1');
    const woufContent2 = document.getElementById('wouf-content2');
    const woufContent3 = document.getElementById('wouf-content3');
    const woufContent4 = document.getElementById('wouf-content4');
    const meowContent1 = document.getElementById('meow-content1'); 
    const meowContent2 = document.getElementById('meow-content2');    
    const meowContent3 = document.getElementById('meow-content3');

    const subscribeform = document.getElementById('subscribe-form');


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
        subscribeform.style.display = 'block';  
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
            subscribeform.style.display = 'block';  
            playSound('Audio/Meow.mp3');
        });
});
