const menuIcon = document.querySelector('.menu');
const menuIcon2 = document.querySelector('.icon');

document.addEventListener("DOMContentLoaded", function () {

    menuIcon.addEventListener('click', menuOpen);
    menuIcon2.addEventListener('click', subMenuOpen);
    window.addEventListener("scroll", function () {
        var head = document.querySelector(".navbar")
        head.classList.toggle("navbar-fixed-top", window.scrollY > 0);

    })
});

function menuOpen() {

    const display = document.querySelector('.navbar-nav').style.display;
    if (!display || display === 0) {
        document.querySelector('.navbar-nav').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.navbar-nav').style.opacity = '1'
        }, 2);
    }
    else {
        document.querySelector('.navbar-nav').style.opacity = ''
        setTimeout(() => {
            document.querySelector('.navbar-nav').style.display = ''
        }, 1);
    }
}
function subMenuOpen() {

    const display = document.querySelector('.subMenu').style.display;
    if (!display || display === 0) {
        document.querySelector('.subMenu').style.display = 'block'
        setTimeout(() => {
            document.querySelector('.subMenu').style.opacity = '1'
            document.querySelector('.fa-angle-right').style.transform = "rotate(90deg)";
            document.querySelector('.fa-angle-right').style.color = "#0f67f6";

        }, 2);
    }
    else {
        document.querySelector('.subMenu').style.opacity = ''
        setTimeout(() => {
            document.querySelector('.subMenu').style.display = ''
            document.querySelector('.fa-angle-right').style.transform = "rotate(0deg)";
            document.querySelector('.fa-angle-right').style.color = "#6b6b6b";
        }, 1);

        
    }
}

