/* Summative game
Andrea Thompson
2017-05-11 */

var status = 0;  // 0 for showing Start button, 1 after user clicks on the button

var rectSize = 100; //variable for circle diameter and rectangle width

var squareY = 600; //the Y-position of the squares

var posBlue = 250; //variable for the X-position of the blue rectangle
var posGreen = 350;//variable for the X-position of the green rectangle
var posPink = 450; //variable for the X-position of the pink rectangle
var posYellow = 550; //variable for the X-position of the yellow rectangle

var speed = 5; //speed the circles go down the screen


var bCircle = 100; //variable for the moving blue circles
var gCircle = 100; //variable for the moving green circles
var pCircle = 100; //variable for the moving pink circles
var yCircle = 100; //variable for the moving yellow circles

var score = 0; //variable to track the score of the player

var startTime; //variable that stores at how many milliseconds after the program started the player started the game


function setup() {
  createCanvas(950, 800);
  frameRate(30);
}

function draw() {
  
  background(0);
  textSize(100);
  
  stroke(120, 120, 120);
  fill(200, 200, 200);
  rect(posBlue, 0, 400, 100);
  
  
  strokeWeight(1);
  stroke(0, 0, 255);
  fill(0, 64, 255);
  rect(posBlue, 100, rectSize, 800); //blue rectangle
  
  
  
  strokeWeight(5);
  noFill();
  rect(posBlue, squareY, rectSize, rectSize); //blue square
 
  text("F", posBlue + 15, 690); //Blue F in square
  
  strokeWeight(1);
  stroke(0, 51, 0);
  fill(0, 255, 64);
  rect(posGreen, 100, rectSize, 800); //green rectangle
  
  strokeWeight(5);
  noFill();
  rect(posGreen, squareY, rectSize, rectSize); //green square
  
  text("G", posGreen + 15, 690); //Green G in square
  
  strokeWeight(1);
  stroke(102, 0, 102);
  fill(255, 0, 191);
  rect(posPink, 100, rectSize, 800); //pink rectangle
  
  strokeWeight(5);
  noFill();
  rect(posPink, squareY, rectSize, rectSize); //pink square
  
  text("H", posPink + 15, 690); //Pink H in square
  
  strokeWeight(1);
  stroke(255, 153, 0);
  fill(255, 255, 102);
  rect(posYellow, 100, rectSize, 800); //yellow rectangle
  
  strokeWeight(5);
  noFill();
  rect(posYellow, squareY, rectSize, rectSize); //yellow square
  
  text("J", posYellow + 15, 690); //Yellow J in square
  
  textSize(30);
  strokeWeight(1);
  stroke(225);
  fill(225);
  text("Score:" + score, 800, 30); //Score board in top right corner
  
  
  
  
  
  
  
  //variable changes to make circles move
  bCircle = bCircle + speed;
  gCircle = gCircle + speed;
  pCircle = pCircle + speed;
  yCircle = yCircle + speed;
}


function mouseClicked() {
	if (status==0) {
    fill(255, 100, 100);  //light red
    text("Start", 10, 40);
  } else {
  printLine();}
}

function blueCircle() { //function for blue circles
	

	
	noStroke();
	fill(0, 41, 102);
	ellipse(300, bCircle, rectSize, rectSize); //outer circle
	
	fill(26, 117, 255);
	ellipse(300, bCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(230, 240, 255);
	ellipse(300, bCircle, rectSize/4, rectSize/4); //inner circle
	
	

}

function greenCircle() { //function for green circles
	

	
	noStroke();
	fill(0, 102, 41);
	ellipse(400, gCircle, rectSize, rectSize); //outer circle
	
	fill(26, 255, 117);
	ellipse(400, gCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(230, 255, 240);
	ellipse(400, gCircle, rectSize/4, rectSize/4); //inner circle
}

function pinkCircle() { //function for pink circles
	
	
	noStroke();
	fill(102, 0, 41);
	ellipse(500, pCircle, rectSize, rectSize); // outer circle
	
	fill(255, 26, 117);
	ellipse(500, pCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(255, 230, 240);
	ellipse(500, pCircle, rectSize/4, rectSize/4); //inner circle
}

function yellowCircle() { //function for yellow circles
	
	
	noStroke();
	fill(102, 82, 0);
	ellipse(600, yCircle, rectSize, rectSize); //outer circle
	
	fill(255, 209, 26);
	ellipse(600, yCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(255, 250, 230);
	ellipse(600, yCircle, rectSize/4, rectSize/4); //inner circle

}