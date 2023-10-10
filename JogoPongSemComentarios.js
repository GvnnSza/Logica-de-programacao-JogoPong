// ? variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

// ? velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


// TODO variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// ! variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeRaqueteYOponente;
let chanceDeErrar = 0;

//! Placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente , yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete (xRaqueteOponente , yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raio> width ||
        xBolinha - raio< 0){
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio> height ||
        yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x, y){
    rect(x, y, raqueteComprimento,
        raqueteAltura);
}

function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(x , y) {
    collide = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (collide) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar
    calculaChanceDeErrar()

}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);

}

function marcaPonto() {
    if(xBolinha > 590){
        meusPontos++;
    }
    if (xBolinha < 10){
        pontosDoOponente++;
    }
}

function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
        chanceDeErrar += 1
        if (chanceDeErrar >= 39){
            chanceDeErrar = 30
        }
    } else {
        chanceDeErrar -= 1
        if (chanceDeErrar <= 35){
            chanceDeErrar = 30
        }
    }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
        xBolinha = 23
    }
}
