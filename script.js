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


    
    const subscribeForm = document.querySelector('#meow-content4 form');
    subscribeBtn = document.querySelector('#subscribe-btn');

    subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
    sendEmail();
    });

    function sendEmail() {
    const email = subscribeForm.querySelector('input[type="email"]').value;

    // TODO: Replace the placeholders below with your own email sending code
    const subject = 'New subscriber';
    const body = `Email: ${email}`;

    // Example using EmailJS (https://www.emailjs.com/)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { to_email: 'YOUR_EMAIL', subject: subject, body: body })
        .then(() => {
        alert('Thank you for subscribing!');
        })
        .catch((error) => {
        console.error(error);
        alert('Error sending email. Please try again later.');
        });
    }


});
