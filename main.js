const menuBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.navigation-menu')
const menuIcon = document.querySelector('.menu-icon i')

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active')
    navBar.classList.toggle('active')
    menuIcon.classList.toggle('fa-times')
})
