const menu = document.querySelector("#menu")
const hamburguesaBtn = document.querySelector("#hamburguesaBtn")
const cerrarMenu = document.querySelector("#cerrar-menu")
const linkMenu = document.querySelectorAll(".link")

hamburguesaBtn.addEventListener("click", () => {
    menu.classList.add("visible")
    hamburguesaBtn.classList.add("visible")
    cerrarMenu.classList.add("visible")
    document.querySelectorAll('#container-background, #home, .proyectos, .h2-perfil')
    .forEach(element => {
        element.classList.add("blurred");
    });
})

cerrarMenu.addEventListener("click", () => {
    menu.classList.remove("visible")
    hamburguesaBtn.classList.remove("visible")
    cerrarMenu.classList.remove("visible")
    document.querySelectorAll('#container-background, #home, .proyectos, .h2-perfil')
    .forEach(element => {
        element.classList.remove("blurred");
    })
})

linkMenu.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("visible")
        hamburguesaBtn.classList.remove("visible")
        cerrarMenu.classList.remove("visible")
        document.querySelectorAll('#container-background, #home, .proyectos, .h2-perfil')
        .forEach(element => {
            element.classList.remove("blurred");
        })
    })
})

const cards = document.getElementsByClassName('card');
<<<<<<< HEAD
for (var card of cards) {
=======
for (let card of cards) {
>>>>>>> d7fbae482fe157c90e27256c6ba5214d22ac19ac
    card.addEventListener('click', function() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}
