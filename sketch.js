var database;
var canvas,backgroundImage;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var form,player,game;
var car1,car2,car3,car4,cars;

function setup(){
    database = firebase.database();
    canvas =  createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    if(playerCount === 4){
        console.log(playerCount);
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
   
    //drawSprites();
}

