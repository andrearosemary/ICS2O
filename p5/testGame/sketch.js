/*Test Game
Andrea Thompson
2017-04-13*/

var scoreA = 0;
var scoreB = 0;

var topY = 75;
var bottomY = 479;

var posX = 10;
var posY = 90;

var speedX = 0;
var speedY = 0;

var opponentY = 200;
var opponentSpeed = 7;



function setup() {
  createCanvas(640, 480);
}

function draw() {
  
  background(75,236,19);
  noStroke;
  fill(180,19,236);
  
  textSize(30);
  text("Andrea's Pong Game", 170, 30); //title
  
  line(0, 40, 640, 40);
  
  textSize(25);
  fill(255, 0, 0);
  text(scoreA, 20, 65); //player's score
  
  fill(0, 0, 255);
  text(scoreB, 610, 65); //opponent's score
  
  line (0, topY, 640, topY); //top edge of court 
  line(320, topY, 320, bottomY); //middle line
  line(0, bottomY, 640, bottomY); //bottom edge of court
  
  fill(0);
  ellipse(posX, posY, 20, 20); //the ball
  
  fill(255, 0, 0);
  rect(40, mouseY, 20, 80); //player's paddle
  
  fill(0, 0, 255);
  rect(580, opponentY, 20, 120); //opponent's paddle
  
  opponentY = opponentY + opponentSpeed; //the opponent's paddle moves
  if(opponentY >= bottomY - 120 || opponentY <= topY) { //the opponent's paddle switchs directions
	  opponentSpeed = -opponentSpeed;
  }  
  
  posX = posX + speedX;
  posY = posY + speedY;
  
  if(posY + 10 >= bottomY || posY - 10 <= topY) {//if the ball hits the top or bottom of the court, it bounces off
	  speedY = - speedY;
  }
  
  if(posX <= 0) { //if the ball goes off the opponent's side, the player gets a point and the serve
	  posX = 630;
	  posY = 90;
	  scoreB = scoreB + 1;
	  
	  
	  
  }
  
  if (posX >= 640) { //if the ball goes off the player's side, the opponent gets a point and the serve
	  posX = 10;
	  posY = 90;
	  scoreA = scoreA + 1;
	  speedX = 0;
	  speedY = 0;
  }
 
 
 posX = posX + speedX; //the ball moves
 posY = posY + speedY;
 
 if ((posX <= 70) && (posY >= mouseY) && (posY <= (mouseY + 80))) { //if the ball hits the player's paddle, it bounces off
	 speedX = -speedX;
 }
 
 if (posX >= 580 && posY >= opponentY && posY <= opponentY + 120) { //if the ball hits the opponent's paddle it bounces off
	 speedX = -speedX;
 }
 
 if(scoreA >= 10) {
	 fill(255, 0, 0);
	 textSize(20);
	 text("YOU WIN!", 250, 65);
	 
 }
 if(scoreB >= 10) {
	 fill(0, 0, 255);
	 textSize(20);
	 text("YOU LOSE!", 240, 65);
	
 }
	
if(scoreA >= 10 || scoreB >= 10) {
	posX = 666;
	posY = 666;
}
function mouseClicked() { //if the mouse is clicked, the player serves
	speedX = 4;
	speedY = 4;
}
