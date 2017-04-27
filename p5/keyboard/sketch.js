/* Keyboard 
Andrea 
2017-04-24 */

var onePosX = 100; //positions of player 1
var onePosY = 225;

var twoPosX = 1130; //positions of player 2
var twoPosY = 225;

var playerSize = 30; //size of the player

var speed = 9; //player's speed

var letterX; //X position of letters
var letterY; //Y position of letters

var letters=[]; //array for letters





function setup() {
  createCanvas(1280, 450);
  frameRate(30);
  
}

function draw() {
	background(153, 255, 153);
	stroke(0);
	fill(128, 128, 128);
	textSize(30);
	
	text("Do you need directions?", 30, 30);
	
	for (var i=0; i < letters.length; i++) {
	  letterX = 30 + 30*i;
	  letterY = 90;
	  text(letters[i], letterX , letterY);
	}
	stroke(102, 0, 0);
	fill(255, 0, 0);
	ellipse(onePosX, onePosY, playerSize, playerSize); //player 1
	
	
	stroke(0, 0, 102);
	fill(0, 0, 255);
	ellipse(twoPosX, twoPosY, playerSize, playerSize); //player 2
	
	
	if (keyIsDown(87)) {
		onePosY = onePosY - speed; //when the w key is pressed, player 1 goes up
	}
	
	if (keyIsDown(83)) {
		onePosY = onePosY + speed; //when the s key is pressed, player 1 goes down
	}
	
	if (keyIsDown(65)) {
		onePosX = onePosX - speed; //when the a key is pressed, player 1 goes left
	}
	
	if (keyIsDown(68)) {
		onePosX = onePosX + speed; //when the d key is pressed, player 1 goes right	
	}
	
	
	
	if (keyIsDown(73)) {
		twoPosY = twoPosY - speed; //when the i key is pressed, player 2 goes up
	}
	
	if (keyIsDown(75)) {
		twoPosY = twoPosY + speed; //when the k key is pressed, player 2 goes down
	}
	
	if (keyIsDown(74)) {
		twoPosX = twoPosX - speed; //when the j key is pressed, player 1 goes left
	}
	
	if (keyIsDown(76)) {
		twoPosX = twoPosX + speed; //when the l key is pressed, player 1 goes right	
	}
	
	
	
}

function keyTyped() {
	letters.push(key);
}

	
