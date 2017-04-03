/* Moving Objects
Andrea Thompson
2017-03-30 - 2017-04-03 */


var posX;
var posY;

var speed = 10;

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
  noStroke();
  fill(255, 0, 0);
  rect(590, 400, 100, 100);
  fill(0);
  textSize (15);
  text("Press Me!", 600, 450);
  
  if (mouseIsPressed && mouseX > 590 && mouseX < 690 && mouseY > 400 && mouseY < 500) {
	  fill (0, 255, 0);
	  rect(590, 400, 100, 100);
	  fill(colourR, colourG, colourB);
	  ellipse(posX, posY, 50, 50);
	  
	  posX = posX + speed;
	  posY = posY + speed;
   }
 if (posX > 1280) {    
      speed = -speed;
  }
  if (posX < 0) {    
      speed = -speed;
  }
  if (posY > 900) {    
      speed = -speed;
  }
  if (posY < 0) {    
      speed = -speed;
  }
 }
  
  




