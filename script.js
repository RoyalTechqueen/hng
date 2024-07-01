function updateDateTime() {
    const now = new Date();
    const hours = now.getUTCHours();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    

    let greeting;
    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('en-US', dateOptions);
    const time = now.toUTCString().split(' ')[4] + " UTC";

    document.getElementById('datetime').textContent = `Hi 👋, ${greeting}, it's ${dayOfWeek}, ${date}, ${time} `;
}
updateDateTime();

document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
const navToggle = document.querySelector('.nav-toggle');

hamburgerIcon.addEventListener('click', toggleNavMenu);
overlay.addEventListener('click', toggleNavMenu);
navToggle.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    hamburgerIcon.classList.toggle('open');
    navLinks.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.classList.toggle('nav-open');
}

const navLinksList = document.querySelectorAll('.nav-links a');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        toggleNavMenu();
    });
});
