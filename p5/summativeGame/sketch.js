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

var status = 0; //when status is equal to one, the gamwe will begin


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
  text("Score:" + score, 775, 30); //Score board in top right corner
  
  
  
  
  if(status==0){
	text("Start", 30, 30); //start button
	
  } else {
	  
	  
	  blueCircle();
	  bCircle = bCircle + speed;
	  
	  if((millis() - startTime) >= 15500 ){ //after 15.5 seconds, the first pink circle will appear
		pinkCircle();
		pCircle = pCircle + speed;
		}
		 
	  if((millis() - startTime) >= 22300) { //after 22.3 seconds, the first green circle will appear
		 greenCircle(); 
		 gCircle = gCircle + speed;
	  }
	  if((millis () - startTime) >= 31700) { // after 31.7 seconds, the first yellow circle will appear
		  yellowCircle();
		  yCircle = yCircle + speed;
	  }
	  if(score >= 2500) { //if the player reaches a score of 2500, the game gets faster
		  speed = speed + 0.005;
		  
	  } //if the player reaches a score of 4000, the game gets even faster
	  if(score >= 4000) {
		  speed = speed + 0.004;
	  }
	  
	  if((millis() - startTime) >= 90000) { //game will end after a minute and a half
		  speed = 0; //circles stop moving
		  posBlue = 10000; //blue circle and rect go off screen
		  posGreen = 10000; //green circle and rect go off screen
		  posPink = 10000; //pink circle and rect go off screen
		  posYellow = 10000;  //yellow circle and rect go off screen
		  
		  text("Good job!", 300, 350);
		  text("Your score is " + score + "!", 300, 400);
		  text("My highscore is 5870!", 300, 450);
		  
		  if(score < 5870) {
			  text("Try to beat me next time!", 300, 500);
			  
		  } else if (score > 5870) {
			  text("You beat me! Good job!", 300, 500);
		  } else {
			  text("We tied!", 300, 500);
		  }
	  }
  }
  
  
  
  if(bCircle >= 800){
	 bCircle = 100;
	 score = score -10;
  }
  if(gCircle >= 800) {
	 gCircle = 100;
	 score = score -10;
  }
  if(pCircle >= 800) {
	 pCircle = 100;
	 score = score -10;
  }
  if(yCircle >= 800) {
	 yCircle = 100;
	 score = score -10
  }
  
  
  /*variable changes to make circles move
  bCircle = bCircle + speed;
  gCircle = gCircle + speed;
  pCircle = pCircle + speed;
  yCircle = yCircle + speed;*/
}

function mouseClicked() {
	 if ((mouseX < 100) && (mouseY < 100)) { //if the mouse is clicked, the game begins
	 status = 1;
	 startTime = millis();
	 }
}

function keyPressed() {
	if (keyCode === 70) { //if the key that is pressed is F, check if there is a blue circle in the blue box
		if((bCircle >= squareY) && (bCircle <= squareY + rectSize)){ //if there is a blue circle, give the player 100 points
			score = score + 100;
			bCircle = -40;
		} else { //if there isnt a blue circle, take away ten points
			score = score - 10;
		}
	} else if (keyCode === 71) { //if the key that is pressed is G, check if there is a green circle in the green box
		if((gCircle >= squareY) && (gCircle <= squareY + rectSize)) { //if there is a green circle, give the player 100 points
			score = score + 100;
			gCircle = -300;
		} else { //if there isnt a green circle, take away ten points
			score = score - 10;
		}
	} else if (keyCode === 72) { //if the key that is pressed is H, check if there is a pink circle in the pink box
		if((pCircle >= squareY) && (pCircle <= squareY + rectSize)) { //if there is a pink circle, give the player 100 points
			score = score + 100;
			pCircle = -400;
		} else {
			score = score - 10; //if there isnt a pink circle, take away ten points
		} 
	} else if (keyCode === 74) {//if the key that is pressed is J, check if there is a yellow circle in the yellow box
		if((yCircle >= squareY) && (yCircle <= squareY + rectSize)) { //if there is a yellow circle, give the player 100 points
			score = score + 100;
			yCircle = -100;
		} else {
			score = score - 10; //if there isnt a yellow circle, take away ten points
		} 
	} else {
		score = score - 10;
	}
}

function blueCircle() { //function for blue circles
	

	
	noStroke();
	fill(0, 41, 102);
	ellipse(posBlue + 50, bCircle, rectSize, rectSize); //outer circle
	
	fill(26, 117, 255);
	ellipse(posBlue + 50, bCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(230, 240, 255);
	ellipse(posBlue + 50, bCircle, rectSize/4, rectSize/4); //inner circle
	
	

}

function greenCircle() { //function for green circles
	

	
	noStroke();
	fill(0, 102, 41);
	ellipse(posGreen + 50, gCircle, rectSize, rectSize); //outer circle
	
	fill(26, 255, 117);
	ellipse(posGreen + 50, gCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(230, 255, 240);
	ellipse(posGreen + 50, gCircle, rectSize/4, rectSize/4); //inner circle
}

function pinkCircle() { //function for pink circles
	
	
	noStroke();
	fill(102, 0, 41);
	ellipse(posPink + 50, pCircle, rectSize, rectSize); // outer circle
	
	fill(255, 26, 117);
	ellipse(posPink + 50, pCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(255, 230, 240);
	ellipse(posPink + 50, pCircle, rectSize/4, rectSize/4); //inner circle
}

function yellowCircle() { //function for yellow circles
	
	
	noStroke();
	fill(102, 82, 0);
	ellipse(posYellow + 50, yCircle, rectSize, rectSize); //outer circle
	
	fill(255, 209, 26);
	ellipse(posYellow + 50, yCircle, rectSize/2, rectSize/2); //middle circle
	
	fill(255, 250, 230);
	ellipse(posYellow + 50, yCircle, rectSize/4, rectSize/4); //inner circle

}