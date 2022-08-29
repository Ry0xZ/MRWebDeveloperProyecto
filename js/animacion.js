/* barra de navegacion transparente y con fondo al hacer scroll */
window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("bg-dark",window.scrollY>95);
})

/* Fin de  barra de navegacion transparente y con fondo al hacer scroll  */


/* animacion de la pagina mis trabajos */
document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

/* Fin de  animacion de la pagina mis trabajos */
