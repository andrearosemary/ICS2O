/* Houses with Variables
Andrea Thompson
2017-03-22 */

function setup() {
  createCanvas(640, 480);
}

function draw() {
 
 background(255, 181, 229);
 
 
    
var    houseWidth=100;
  var  x = 286;
    stroke(0, 0, 0);
    fill(178, 233, 240);
  
  
   //house main 1
  houseWidth=100;
  rect(x, x/2, houseWidth, houseWidth/2);
   
  
  //roof 1
  fill(148, 106, 156);
  rect(x, x*0.45, houseWidth, houseWidth/6);

  //door 1
  fill(126, 176, 106);
  rect(x*1.15, x/1.70, houseWidth/7, houseWidth/4);
 
  //house main 2
  fill(178, 233, 240);
  houseWidth = 50;
  x = 82;
  rect(x, x/2, houseWidth, houseWidth/2);
  
  //roof 2
  fill(148, 106, 156);
  rect(x, x*0.45, houseWidth, houseWidth/6);

 //door 2
 fill(126, 176, 106);
 rect(x*1.25, x/1.59, houseWidth/7, houseWidth/4);
};


