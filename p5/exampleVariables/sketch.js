/*Example Variables
Andrea Thompson
2017-03-21
*/

var posX = 10;
var posY = 10;
var boxSize = 100;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255, 255, 255);
  stroke(mouseX,mouseX, mouseX);
  fill(mouseX, mouseX, mouseY)
  rect(mouseX, mouseY, boxSize, 0.5*boxSize);
	//draw a small square into the middle of the boxSize
  stroke(mouseY, mouseY, mouseY) 
  fill(mouseY, mouseX, mouseX)
  rect(mouseX+boxSize/3, mouseY+boxSize/12, boxSize/3, boxSize/3)
  posX = posX +1
  posY = posY +1
  }