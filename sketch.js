//Primeiro Botão do Menu

var xMinBotao = 325
var larguraBotao = 150
var xMaxBotao = larguraBotao + xMinBotao
var yMinBotao1 = 120
var alturaBotao = 50
var yMaxBotao1 = alturaBotao + yMinBotao1

//Segundo Botão do Menu

var yMinBotao2 = 190
var yMaxBotao2 = alturaBotao + yMinBotao2

//Terceiro Botão do Menu

var yMinBotao3 = 260
var yMaxBotao3 = alturaBotao + yMinBotao3

// Botão Voltar Creditos

var xMinVoltar = 680
var larguraVoltar = 90
var xMaxVoltar = xMinVoltar + larguraVoltar
var yMinVoltar1 = 440
var alturaVoltar = 40
var yMaxVoltar1 =  yMinVoltar1 + alturaVoltar

//Imagens, Efeitos e Fontes
var imagemEducador;
var imagemDesign;
var imagemProgramador;
var imagemMenu;
var imagemInstrucoes;
var imagemCreditos;
var fonteJogo;
var exemploJogo;

var Personagem1;
var Personagem2;
var Personagem3;
var Personagem4;
var Personagem5;
var Personagem6;
var personagem7;

var tela = 0
// tela 0: Menu
// tela 1: Jogo
// tela 2: Intruções
// tela 3: Creditos

function telaMenu () {
  background(220);
  image(imagemMenu,0 , 0, 800, 500)
  image(Personagem1, 560, 330, 180, 180)
  image(Personagem3, 140, 30, 180, 180)
  textSize(27);
  fill(0)
  textFont(fonteJogo)
  text("MONSTER SCHOOL", 295, 95)
  
  
  //Botão 1
  fill(250)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao1 && mouseY < yMaxBotao1) {
    if (mouseIsPressed) {
    console.log("Botão Jogar")
    tela = 1
  }
    fill(143,188,143)
  } 
  rect(xMinBotao, yMinBotao1, larguraBotao, alturaBotao, 15)
  stroke(0)
  textSize(25)
  fill(0)
  text("Jogar", 370, 155)
  
  // Botão 2
  fill(250)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2) {
    if (mouseIsPressed) {
      console.log("Botão Instruções")
      tela = 2
    }
    fill(143,188,143)
  } 
  rect(xMinBotao, yMinBotao2, larguraBotao, alturaBotao, 15)
  stroke(0)
  textSize(25)
  fill(0)
  text("Instruções", 345, 225)
  
  //Botão 3
  fill(250)
  if (mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3) {
    if (mouseIsPressed) {
      console.log("Botão Créditos")
      tela = 3
    }
    fill(143,188,143)
  } 
  rect(xMinBotao, yMinBotao3, larguraBotao, alturaBotao, 15)
  stroke(0)
  textSize(25)
  fill(0)
  text("Créditos", 355, 295)
      
}

function telaJogo () {
  background(220);
  textSize(40)
  text("Ache os Pares!", 270, 70)
  image(exemploJogo,150,100,500, 350)
  image(Personagem2,30, 340, 150, 150)

  //Botão Voltar
  fill(250)
   if (mouseX > xMinVoltar && mouseX < xMaxVoltar && mouseY > yMinVoltar1 && mouseY < yMaxVoltar1) {
      if (mouseIsPressed) {
      tela = 0
}
fill(143,188,143)
}
  rect(xMinVoltar, yMinVoltar1, larguraVoltar, alturaVoltar, 15)
    stroke(0)
    textSize(25)
    fill(0)
    text("Voltar", 690, 468)
}

function telaInstrucoes() {

  background(220);
  image(imagemInstrucoes, 0 , 0, 800, 500)
  fill(250)
  rect(150,100,500, 350, 15)
  fill(143,188,143)
  rect(300,110,200, 50, 15)
  textSize(40);
  fill(10);
  text("Instruções", 320, 145,);
  textSize(18);
  text("Bom esse é um clássico jogo da memória , o objetivo é você virar todas as cartas e encontrar os pares, no entanto a cada erro as cartas são reviradas novamente, mas se você memorizar bem todas elas aos poucos você encontrará todos os pares e consiguirá completar o desafio.", 220, 200, 400);
  image(Personagem4, 35, 300, 200, 200)

  fill(250)
     if (mouseX > xMinVoltar && mouseX < xMaxVoltar && mouseY > yMinVoltar1 && mouseY < yMaxVoltar1) {
        if (mouseIsPressed) {
        tela = 0
  }
  fill(143,188,143)
}
    rect(xMinVoltar, yMinVoltar1, larguraVoltar, alturaVoltar, 15)
      stroke(0)
      textSize(25)
      fill(0)
      text("Voltar", 690, 468)
}

function telaCreditos() {
  background(220);
  image(imagemCreditos,0 , 0, 800, 500)
  fill(250)
  rect(150,100,500, 350)
  textSize(40);
  fill(10);
  text("Créditos", 320, 140);
  textSize(20);
  text("Caroline Rodrigues",300,180);
  textSize(18);
  text("Função: Educador", 300, 200);
  textSize(16);
  fill(50);
  text("Licenciando em Matematica pela Universidade Federal do Rio Grande do Norte", 300, 220, 300);
  textSize(20);
  text("Edcleiton Fernandes",300,300);
  textSize(18);
  text("Função: Programador", 300, 320);
  textSize(16);
  fill(50);
  text("Estudante de Ciencia e Tecnologia pela Universidade Federal do Rio Grande do Norte", 300, 340, 300);
  image(imagemEducador, 170, 140, 120, 120)
  image(imagemProgramador, 170, 260, 120, 120)
  image(Personagem5, 35, 330, 180, 180)

  

  //Botão Voltar
  fill(250)
   if (mouseX > xMinVoltar && mouseX < xMaxVoltar && mouseY > yMinVoltar1 && mouseY < yMaxVoltar1) {
      if (mouseIsPressed) {
      tela = 0
}
fill(143,188,143)
}
  rect(xMinVoltar, yMinVoltar1, larguraVoltar, alturaVoltar, 15)
    stroke(0)
    textSize(25)
    fill(0)
    text("Voltar", 690, 468)
}

function preload() {
  imagemEducador = loadImage("Creditos/carol.png")
  imagemProgramador = loadImage("Creditos/edcleitoun.png")
  imagemMenu = loadImage("Fundos/menu.jpeg")
  imagemCreditos = loadImage("Fundos/Creditos.png")
  imagemInstrucoes = loadImage("Fundos/Instrucoes.jpeg")
  fonteJogo = loadFont("Fontes/Acme.ttf")
  Personagem1 = loadImage("Personagens/1Cleo.gif")
  Personagem2 = loadImage("Personagens/2Startapp.gif")
  Personagem3 = loadImage("Personagens/3Draculaura.gif")
  Personagem4 = loadImage("Personagens/4Frankie.gif")
  Personagem5 = loadImage("Personagens/5Ghoulia.gif")
  Personagem6 = loadImage("Personagens/6Lagoona.gif")
  Personagem7 = loadImage("Personagens/7Moster.gif")
  exemploJogo = loadImage("Fundos/exemplo.gif")

}

function setup() {
  createCanvas(800, 500);

}

function draw() {
  
  if (tela == 0) {
    telaMenu()
  } 
  if ( tela == 1) {
    telaJogo()
  }

  if( tela == 2) {
    telaInstrucoes()
  }

  if( tela == 3) {
    telaCreditos()
  }
}