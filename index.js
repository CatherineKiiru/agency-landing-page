//get everything you need then add event listeners

const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', function () {
    menu.classList.toggle('hidden')
});