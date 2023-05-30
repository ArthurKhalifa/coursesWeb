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

// ======== ALERT 

Swal.fire({
    title: 'Atenção!',
    text: "Este site NÃO é original. Todos os direitos estão reservados para a origem: https://www.traversymedia.com/",
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok'
})


