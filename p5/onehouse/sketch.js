/* House drawing
Drawing a house
Andrea 2017-01-10*/

function setup() {
  createCanvas(400, 400);
}


draw = function() {
    
background(187, 221, 250);//sky
//sun
stroke(222, 167, 27);
fill(255, 213, 0);
ellipse(40, 40, 80, 80);

//cloud
noStroke();
fill(255, 255, 255);

ellipse(117, 122, 30, 30);
ellipse(126, 106, 30, 30);

ellipse(149, 50, 30, 30);
ellipse(175, 50, 30, 30);
ellipse(162, 29, 30, 30);
ellipse(187, 32, 30, 30);
ellipse(198, 52, 30, 30);
ellipse(213, 32, 30, 30);
ellipse(223, 57, 30, 30);
ellipse(233, 32, 30, 30);

ellipse(328, 104, 30, 30);
ellipse(350, 104, 30, 30);
ellipse(338, 81, 30, 30);
ellipse(318, 77, 30, 30);
ellipse(356, 75, 30, 30);
ellipse(335, 57, 30, 30);

//grass
noStroke();
fill(108, 217, 112);
rect(0, 359, 400, 61);


//path
noStroke();
fill(112, 108, 108);
rect(174, 359, 50, 60);
fill(77, 65, 65);
ellipse(215, 369, 15, 15);
ellipse(200, 384, 15, 15);
ellipse(186, 369, 15, 15);
ellipse(215, 398, 15, 15);
ellipse(186, 398, 15, 15);


//house main
stroke(168, 154, 141);
fill(74, 6, 6);
rect(73, 185, 254, 175);

//chimney 
noStroke();
fill(56, 4, 4);
rect(102, 131, 33, 50);

//roof
noStroke();
fill(74, 52, 52);
triangle(201, 117, 38, 204, 366, 206);

//door
stroke(20, 14, 9);
fill(46, 26, 5);
rect(173, 288, 50, 71);

//door knob
stroke(0, 0, 0);
fill(0, 0, 0);
ellipse(218, 325, 7, 7);

//windows

fill(64, 119, 128);
ellipse(117, 275, 50, 50);
ellipse(279, 275, 50, 50);
line(117, 250, 117, 298);
line(279, 250, 279, 298);
line(93, 276, 140, 276);
line(303, 276, 255, 276);


};
