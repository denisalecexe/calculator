// VARIABILI
const resultInput = document.getElementById("result"); // aggancia l'input dove si vedranno i numeri scritti e i risultati
const cancKey = document.getElementById("canc"); // aggancia il bottone con id "canc" e con l'icona della c all'interno del cerchio
const backKey = document.getElementById("back-space"); // aggancia il bottone con id "back-space"; con appunto il backspace
const btnKeys = document.querySelectorAll(".btn"); // aggancia tutti i btn con la classe "btn"

// METODO FOREACH()
// metodo forEach per vedere in console quali tasti clicco, creando una scatola chiamata "singleButton" per vedere i bottoni singolarmente in console
btnKeys.forEach(singleButton => {
    singleButton.addEventListener('click', () => {
        const textKey = singleButton.innerText;
        console.log(textKey);
    })
})

// TEST
console.log("calculator");