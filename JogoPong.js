//! Variaveis Shape Bolinha
let xBolinha = 300;
//* POSIÇÃO X INICIAL DA BOLINHA
let yBolinha = 200;
//* POSIÇÃO Y INICIAL DA BOLINHA
let diametro = 15;
//* DIÂMETRO DA BOLINHA

//! Velocidade Da Bolinha
let velocidadeXBolinha = 6;
//* VELOCIDADE X
let velocidadeYBolinha = 6;
//* VELOCIDADE Y
let raio = diametro / 2;
//* RAIO DA BOLINHA (DIÂMETRO / 2)

//! Variavel da Raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteWidth = 8;
let raqueteHeight = 90;

// ! variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeRaqueteYOponente;

function setup() {
    createCanvas(600, 400);
    //* CRIAÇÃO DA TELA DO JOGO (LARGURA (width), ALTURA (height))
}

let collide = false;

//! Funcao primordial de tudo do jogo (draw)
function draw() {
    background(0); //* OPACIDADE do fundo da tela (logo se tornou preto)
    mostraBolinha();
    //* Shape da bolinha sendo mostrada na tela, Codigo Refatorado pra linha 33
    movimentaBolinha();
    //* Uma nova funcao foi Refatorada para linha 37
    verificaColisaoBorda();
    //* Uma nova funcao do movimento da Bolinha ate a borda foi Refatorado para linha 43
    mostraRaquete();
    //* a raquete será implementada na cena, o codigo foi Refatorado para linha 68
    movimentaMinhaRaquete();
    //* Movimento da raquete criado na linha 74 que foi Refatorada\
    // ! verificaColisaoRaquete();
    //* Verificacao da colisao da raquete com a bolinha criado na linha 80 que foi Refatorada
    verificaColisaoBiblioteca();
}



function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda () {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
        //* Xbolinha > width (borda da lateral) = QUANDO A BOLINHA BATER NA LATERAL DIREITA DA TELA
        //* Xbolinha < 0 = QUANDO A BOLINHA BATER NA LATERAL ESQUERDA DA TELA
        //* velocidadeXBolinha *= -1 = INVERTE A DIREÇÃO DA BOLINHA que no caso ela vai pra direita e volta pra esquerda
        //* + raio = Quando a borda da bolinha bater na borda da tela na direita inves do centro da bolinha bater na borda da tela (direita é positivo por isso o +)
        //* - raio = Quando a borda da bolinha bater na borda da tela na esquerda inves do centro da bolinha bater na borda da tela (esquerda é negativo por isso o -)
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
        //* yBolinha > height (borda do topo) = QUANDO A BOLINHA BATER NO TOPO DA TELA
        //* yBolinha < 0 = QUANDO A BOLINHA BATER NA PARTE DE BAIXO DA TELA
        //* velocidadeYBolinha *= -1 = INVERTE A DIREÇÃO DA BOLINHA que no caso ela vai pra cima e volta pra baixo
    }
}

function mostraRaquete () {
    rect(xRaquete, yRaquete, raqueteWidth, raqueteHeight);
    //* xRaquete e yRaquete = POSIÇÃO DA RAQUETE
    //* raqueteWidth e raqueteHeight = Widht = Comprimento e Height = Altura
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 5;
        //* yRaquete -= 5 = QUANDO A TECLA DE CIMA FOR PRESSIONADA A RAQUETE VAI SUBIR 5 PIXELS (Velocidade de subida da raquete)
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 5;
        //* yRaquete += 5 = QUANDO A TECLA DE BAIXO FOR PRESSIONADA A RAQUETE VAI DESCER 5 PIXELS (Velocidade de descida da raquete)
    }
}

function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteWidth
        && yBolinha - raio < yRaquete + raqueteHeight
        && yBolinha + raio > yRaquete)
            velocidadeXBolinha *= -1;
    //* xBolinha - raio < xRaquete + raqueteWidth = a bolinha verificacao da bolinha esta no centro dela e queremos subtrair para que ela consiga bater na raquete
    //* se nao tivermos o && yBolinha - raio < yRaquete + raqueteHeight = sem essa informacao nao especificamos a altura da raquete, a posicao y da raquete com a y da bolinha, logo mesmo a raquete estando embaixo ou em cima a bolinha nao toca na borda da tela
    //* yRaquete + raqueteHeight && yBolinha + raio > yRaquete =  a altura da raquete em cima nao foi colocada logo se a raquete estiver embaixo a bolinha nao ira tocar na borda da tela

    //? yRaquete é o topo da raquete
    //? xRaquete + raqueteWidth é a lateral da raquete
    //? yRaquete + raqueteHeight é a base da raquete

    //! yBolinha - raio é o topo da bolinha
    //! yBolinha é o centro da bolinha
    //! yBolinha + raio é a base da bolinha
}

function verificaColisaoBiblioteca() {
    collide = collideRectCircle(xRaquete, yRaquete, raqueteWidth, raqueteHeight, xBolinha, yBolinha, raio);
        if (collide) {
            velocidadeXBolinha *= -1;
            // ! TODO esse codigo foi pego de uma biblioteca feita por um cara e que postou no Github sobre colisores do circle com uma rect
    }
}

function movimentaRaqueteOponente () {
    velocidadeRaqueteYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30
    yRaqueteOponente += velocidadeRaqueteYOponente
}
