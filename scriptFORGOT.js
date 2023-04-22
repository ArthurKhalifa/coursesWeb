
// ACTIVE and ANIMATION MENU BUTTON
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const rightH = document.getElementsByClassName('righth')[0]

toggleButton.addEventListener('click', () => {
    rightH.classList.toggle('active')
})

// ===========================

const menu = document.getElementById("botao");

menu.onclick = function () {
    menu.classList.toggle("openmenu");
}