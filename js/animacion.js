/* var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 10) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
}); */

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("bg-dark",window.scrollY>0);
})