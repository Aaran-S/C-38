var canvas;
var gameState = 0, playerCount = 0, database;
var form, game, player;
var allPlayers;
var car1, car2, car3, car4, cars;


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
  game = new Game()
  game.start()    
  

}


function draw(){

  if(playerCount === 4){
    game.update(1)
    
  }
  
  if(playerCount === 4 ){
    console.log(":)")
    clear()
    game.play()
  }

}