const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 90)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.toggle('open')
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.hero-text, .skills-content, .mid-left', { origin: 'left'});
ScrollReveal().reveal('.hero-img, .mid-right', { origin: 'right'});
ScrollReveal().reveal('.scroll, .portofolio-btn, .pricing-content', { origin: 'bottom'});
ScrollReveal().reveal('.mid-text', { origin: 'top'});
ScrollReveal().reveal('.Services-content, .portofolio-content, .contact-content', { origin: 'right'});

// Inisialisasi EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;  

    const templateParams = {
        from_name: name,
        from_email: email,
        message: comment
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            document.getElementById('response-message').innerText = 'Terima kasih! Feedback Anda telah dikirim.';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('response-message').innerText = 'Maaf, terjadi kesalahan saat mengirim feedback.';
        });
});
