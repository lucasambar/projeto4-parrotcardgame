//primeira embaralhada
let gifs = [{img:"bobrossparrot.gif",id:"bobros"},{img:"explodyparrot.gif", id:"explod"},
{img:"fiestaparrot.gif", id:"fiesta"},{img:"metalparrot.gif", id:"metal"},
{img:"revertitparrot.gif",id:"revert"},{img:"tripletsparrot.gif",id:"triplet"},
{img:"unicornparrot.gif",id:"unicorn"}];
function embaralha(array){
    for (let i = array.length - 1; i>0 ; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}

gifs = embaralha(gifs);

//definindo número de cartas 
let num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14; e par!)"));
while (num < 4 || num > 14 || num%2===1) {
    num = Number(prompt("Com quantas cartas você quer jogar? (deve ser um número entre 4 e 14; e par!)"));
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
    <div class="carta" onclick="virarCarta(this)" id="${cartasJogo[indice]['id']}">
        <div class="frente">
            <img src="./img/front.png">
        </div>
        <div class="atras">
            <img src="./img/${cartasJogo[indice]["img"]}">
        </div> 
    </div>
    `;
}

//virar as cartas com o click
let cartaVirada = false;
let numJogadas = 0;
let acertos = 0;

let carta1, carta2, id1, id2;

function virarCarta(carta) {
    const frente = carta.querySelector(".frente");
    const atras = carta.querySelector(".atras");

    if (frente.classList.contains("rotacao-frente")) {
        return
    }
    frente.classList.add("rotacao-frente");
    atras.classList.add("rotacao-atras");
    numJogadas ++;

    if (!cartaVirada) {  
        cartaVirada = true;
        carta1 = carta;
        id1 = carta1.getAttribute("id");
        return;
    }
    else { // segunda carta virada
        carta2 = carta;
        id2 = carta2.getAttribute("id");
        cartaVirada = false;

        checarCartas(id1,id2);
    }
}

function checarCartas(a,b) {
    if (a===b) {
        acertos ++;
        fimDeJogo();
        return;
    }
    else {
        setTimeout(desviraCartas,1000);
    }
}

function desviraCartas() {
    let frente1 = carta1.querySelector(".frente");
    frente1.classList.remove("rotacao-frente");

    let frente2 = carta2.querySelector(".frente");
    frente2.classList.remove("rotacao-frente");

    let atras1 = carta1.querySelector(".atras");
    atras1.classList.remove("rotacao-atras");

    let atras2 = carta2.querySelector(".atras");
    atras2.classList.remove("rotacao-atras");
}


//relogio e tempo de jogo 
let tempo = 0;
let display = document.querySelector(".tempo")

function relogio() {
    tempo++;
    display.innerHTML = `<h3>${tempo}</h3>`;
}

const interval = setInterval(relogio,1000);



//fim de jogo
function fimDeJogo(){
    if (acertos === numPares) { 
        clearInterval(interval);
        alert("Parabéns! Você terminou o jogo em: " + numJogadas + " jogadas. Em " + tempo + " segundos." );
    }
}