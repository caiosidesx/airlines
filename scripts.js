let ctrCards = document.getElementById("ctr-cards")
let btnMais = document.getElementById("btn-mais")
let btnFechar = document.getElementById("btn-fechar")

//Mostrar card
btnMais.addEventListener("click", mostrarCard)
btnFechar.addEventListener("click", esconderCard)
ctrCards.addEventListener("click", ctrCards)

function mostrarCard(){
    ctrCards.style.display = "flex"
}

function esconderCard(){
    ctrCards.style.display = "none"
}