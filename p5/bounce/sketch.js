/*Ellipses Bouncing off each other
Andrea Thompson
2017-04-05 */

var PposX = 10;
var PposY = 450;

var BposX = 1270;
var BposY = 450;

var PspeedX = 10;
var BspeedX = 10;


function setup() {
  createCanvas(1280, 900);
  frameRate(30);
}

function draw() {
  background(0);
  noStroke();
  
  fill(255, 0, 255);
  ellipse(PposX, PposY, 20, 20);
  
  PposX = PposX + PspeedX;
  
  if(PposX <= 10 ){
	  PspeedX = -PspeedX;
  }
  
  fill(0, 255, 255);
  ellipse(BposX, BposY, 20, 20);
  
  BposX = BposX - BspeedX;
  
  if(BposX >= 1270) {
	  BspeedX = -BspeedX
  }
  
  if(PposX+10 === BposX-10) {
	  PspeedX = -PspeedX;
	  BspeedX = -BspeedX;
  }
  
}