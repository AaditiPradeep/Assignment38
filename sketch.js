var canvas;
var playerCount = 0;
var gameState = 0;
var player, form, game;

function preload(){
    hurdles_img = loadImage("hurdles.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //database = firebase.database();
  game = new Game();
  //game.getState();
 game.start();
}


function draw(){
  if(playerCount === 4){
    gameState = 1;
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState ===2){
   // game.end();
  }
}
  

