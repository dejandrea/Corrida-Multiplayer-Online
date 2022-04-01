//imagens
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, blastImage;
var obstacle1Image, obstacle2Image;
//banco de dados
var database;
//objetos e controle
var game, form, player, allPlayers, gameState, playerCount;
//sprites
var car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/PISTA.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();//criando o objeto game
  game.getState();//carregando o gameState
  game.start();//criando o start do jogo
}

function draw() {
  background(backgroundImage);
  //alterando o gameState para play (1) quando 2 jogadores estiverem logados
  if (playerCount === 2) {
    game.update(1);
  }

  //iniciando o jogo quando o gameState for play (1)
  if (gameState === 1) {
    game.play();
  }

  //finalizando o jogo se o gameState for end (2)
  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
