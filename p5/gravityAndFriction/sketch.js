/*Friction and Gravity
Andrea Thompson
2017-04-04*/

var GposX = 640;
var GposY = 0;

var speedY = 1;

var FposX = 15;
var FposY = 885;

var speedX = 49.5;

function setup() {
  createCanvas(1280, 900);
  frameRate(30);
}

function draw() {
  background(0);
  noStroke();
  
  //gravity
  fill(0, 255, 255);
  ellipse(GposX, GposY, 30, 30);
  
  GposY = GposY + speedY;
  speedY= speedY+1;
  
  if(GposY >= 900){ //when the ellipse reaches the Y of the screen, it will bounce
	  speedY = -speedY;
	  
  }
  
  //friction
  fill(255, 0, 255);
  ellipse(FposX, FposY, 30, 30);
  
  FposX = FposX + speedX;
  speedX = speedX - 1; //the ellipse will slow down as it nears the X 
  
  if(speedX <= 0){  //the ellipse will stop if the speed is 0
	  speedX = 0;
  }
  
  
  
  
  
  
  
  
  
  
}
