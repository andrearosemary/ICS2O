/*Complicated Figure Moving
Andrea Thompson
2017-04-04*/



var posX;
var posY;

var speedX = 5;
var speedY = 5;

var colourR;
var colourG;
var colourB;

function setup() {
  createCanvas(1280, 900);
  frameRate(30);
  posX = floor(random(0,1280));
  posY = floor(random(0,900));
  colourR = floor(random(0,255));
  colourG = floor(random(0,255));
  colourB = floor(random(0,255));
}

function draw() {
  background(0);
  stroke(colourR, colourG, colourB);
  textSize(50);
  text("TEAM 1 IS THE BEST", posX, posY);
  posX = posX + speedX;
  posY = posY + speedY;
  
  if(posX >= 800) { //goes off X of canvas, will go to other side
	 posX = 0;
	 
  }
   
  if(posY >= 900 || posY <= 50) { //bounces off Y of canvas
	  speedY = -speedY;
  }
}