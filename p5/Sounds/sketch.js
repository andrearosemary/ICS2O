/*Andrea Testing Sound
Andrea Thompson
2017-01-20 */

var osc = new p5.Oscillator(300);

function setup() {
  createCanvas(640, 480);
}

function draw() {
  ellipse(200, 200, 80, 80);
  
 
}

function mouseIsPressed() {
	osc.start();
    osc.freq(261.63);
	osc.stop(5);
}