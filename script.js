//escopo global

//definindo número de cartas
let num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14)"));
while (num < 4 || num > 14) {
    num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14)"));
}
if (num%2===1) {
    num += 1
}

//distribuindo as cartas na mesa
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif",
"metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"]

const section = document.querySelector("section");
for (let indice = 0; indice < num/2; indice++) {
    section.innerHTML += `
    <div class="carta" onclick="virarCarta(this)">
        <div class="frente">
            <img src="./img/front.png">
        </div>
        <div class="atras">
            <img src="./img/${gifs[indice]}">
        </div> 
    </div>

    <div class="carta" onclick="virarCarta(this)">
        <div class="frente">
            <img src="./img/front.png">
        </div>
        <div class="atras">
            <img src="./img/${gifs[indice]}">
        </div> 
    </div>
    `;
}

//randomiza as cartas
let cartas = document.querySelectorAll(".cartas");
cartas.sort(comparador); 

function comparador() { 
	return Math.random() - 0.5; 
}
