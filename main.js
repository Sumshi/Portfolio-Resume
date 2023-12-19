// toggole menu/icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// select all html elements with type section
let sections = document.querySelectorAll('section');

// select all html elements with type a
let navLinks = document.querySelector('header nav a');

// add event listener to all navLinks
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* stciky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};