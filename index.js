const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav__list');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('open');
    });
})


// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 3000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 3000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 3000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 3000,
    distance: '25rem',
    delay: 600
});
