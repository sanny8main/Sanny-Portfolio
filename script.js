//Home Section
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed = new Typed('.multiple-text', {
    strings: ['Song Artist', 'Art Creator', 'Book Author', 'Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

//Contact Section btn
const btn = document.querySelector('.btn');

btn.classList.add('loading');
btn.value = "Sending...";

//Contact Section form
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbyUfY-8VYw1cxnVUIYLru0cLHp8m7pt9-RdChSOY9zIH-8H5lykV8Xwip5Qnh2xP4Qp/exec', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            responseMessage.textContent = 'Thank you! Your message has been sent.';
            form.reset();
        } else {
            responseMessage.textContent =
                'Error submitting the form. Please try again.';
        }
    } catch (error) {
        responseMessage.textContent =
            'An error occurred. Please try again.';
    }
});







