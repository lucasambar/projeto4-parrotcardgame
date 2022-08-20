//primeira embaralhada
let gifs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif",
"metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
function embaralha(array){
    for (let i = array.length - 1; i>0 ; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}

gifs = embaralha(gifs);

//definindo número de cartas 
let num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14)"));
while (num < 4 || num > 14 || num%2===1) {
    num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14)"));
}
let numPares = num/2;

//separando numero de cartas
let cartasJogo = []
for (let i = 0; i < numPares; i++){
    cartasJogo.push(gifs[i]);
    cartasJogo.push(gifs[i]);
}
cartasJogo = embaralha(cartasJogo);

//cartas na mesa
const section = document.querySelector("section");
for (let indice = 0; indice < num; indice++) {
    section.innerHTML += `
    <div class="carta" onclick="virarCarta(this)">
        <div class="frente">
            <img src="./img/front.png">
        </div>
        <div class="atras">
            <img src="./img/${cartasJogo[indice]}">
        </div> 
    </div>
    `;
}

//virar as cartas com o click
let contaCarta = 0; 
function virarCarta(carta) {
    const frente = carta.querySelector(".frente");
    const atras = carta.querySelector(".atras");

    frente.classList.add("rotacao-frente");
    atras.classList.add("rotacao-atras");

    contaCarta ++;
    acertos()
}
let carta1 = 
consoleLog(contaCarta);

//confere se está certo ou errado
let acertos = 0;

while (acertos !== numPares){
    if (contaCarta === 2) {
        let cartasSelecionadas = document.querySelectorAll(".rotacao-atras");

        let carta1 = cartasSelecionadas[0];
        let img1 = carta1.querySelector("img");
        let frente1 = carta1.querySelector(".frente");
        let atras1 = carta1.querySelector(".atras");
        
        let carta2 = cartasSelecionadas[1];
        let img2 = carta2.querySelector("img");
        let frente2 = carta2.querySelector(".frente");
        let atras2 = carta2.querySelector(".atras");

        if (img1 !== img2) {
            setTimeout(remove, 2000);
            function remove() {
                frente1.classList.remove("rotacao-frente");
                frente2.classList.remove("rotacao-frente");
                atras1.classList.remove("rotacao-atras");
                atras2.classList.remove("rotacao-atras");
            }
            contaCarta = 0;
        }
        else {
            acertos ++;
            contaCarta = 0;
        }
    }
}