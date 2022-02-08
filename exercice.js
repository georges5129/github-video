let button = document.querySelector('#button_modal')

button.addEventListener('click', openModal)

function openModal(e){
document.getElementById("modal").style.top="20%";
e.preventDefault()
}