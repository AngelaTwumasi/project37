var canvas;
var gameState = 0;
var contestantCount , dataBase, quiz , question, contestant;
var allcontestants;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
