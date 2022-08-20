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
//até aqui tá tudo ok!
//remove cartas, usado na função virarCarta
function remove(a,b,c,d) {
    a.classList.remove("rotacao-frente");
    b.classList.remove("rotacao-frente");
    c.classList.remove("rotacao-atras");
    d.classList.remove("rotacao-atras");
}

//virar as cartas com o click
let contaCarta = 0; 
let carta1 = "";
let numJogadas = 0;
let acertos = 0;

function virarCarta(carta) {
    const frente = carta.querySelector(".frente");
    const atras = carta.querySelector(".atras");

    frente.classList.add("rotacao-frente");
    atras.classList.add("rotacao-atras");

    if (contaCarta === 0) {
        contaCarta ++;
        carta1 = carta
    }
    else {
        numJogadas ++;

        let img1 = carta1.getAtribute("src");
        let frente1 = carta1.querySelector(".frente");
        let atras1 = carta1.querySelector(".atras");

        let carta2 = carta;
        let img2 = carta2.getAtribute("src");
        let frente2 = carta2.querySelector(".frente");
        let atras2 = carta2.querySelector(".atras");

        if (img1 === img2) {
            acertos ++;
        }
        else {
            setTimeout(remove, 2000);
            remove(frente1,frente2,atras1,atras2);
        }

        contaCarta = 0;
    }
}

//fim de jogo
if (acertos === numPares) {
    alert("Parabéns! Você terminou o jogo em: " + numJogadas + " jogadas.")
}