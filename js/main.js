const openNavButton = document.querySelector('.open-nav-button');
const closeNavButton = document.querySelector('.close-nav-button');
const navWrapper = document.querySelector('.nav__wrapper');
const body = document.body;

openNavButton.addEventListener('click', function() {
    navWrapper.classList.add('nav__wrapper--show');
    body.classList.add('modal-open');

    closeNavButton.addEventListener('click', function() {
        navWrapper.classList.remove('nav__wrapper--show');
        body.classList.remove('modal-open');
    })
})