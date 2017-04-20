/*Andrea Testing Sound
Andrea Thompson
2017-01-20 */

var osc;
var playing = false;

function setup() {
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();


}

function draw() {
  ellipse(200, 200, 80, 80);
  
  function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.amp(0.5, 0.05);
      playing = true;}
 else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      
    }
  }
}   
 



