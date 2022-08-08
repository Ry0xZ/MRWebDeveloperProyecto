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
    nav.classList.toggle("bg-dark",window.scrollY>95);
})

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})