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
for (let card of cards) {
    card.addEventListener('click', function() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}
