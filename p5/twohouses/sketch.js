/* Two houses
A drawing of two houses using variables
Andrea 2017/03/10*/

function setup() {
                        var myCanvas = createCanvas(400, 400);
                        myCanvas.parent('myDrawing');
                    }


var houseW = 100;
var houseH = 80;


function draw() {
  //sky
    background(175, 224, 250);
    
    //grass
    noStroke();
    fill(130, 230, 124);
    rect(0, 350, 400, 376);  
  
    //house 1 main
    stroke(0, 0, 0);
    fill(194, 110, 37);
    rect(56, 269, houseW, houseH);
    
    //house 1 roof
    fill(51, 7, 7);
    triangle(56, 269, 157, 269, 106, 217);
    
    //house 1 door
    fill(46, 37, 21);
    rect(91, 309, houseW/4, houseW/2);
    
    var houseW = 70
	var houseH = 50
	
    //house 2 main
    fill(194, 110, 37);
    rect(56, 269, houseW, houseH);
    
    //house 2 roof
    fill(51, 7, 7);
    triangle(385, 188, 183, 191, 280, 108);
    
    //house 2 door
    fill(46, 37, 21);
    rect(91, 309, houseW/4, houseW/2);
}