function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(82, 73, 46); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300); 

//pizza crust
fill(143, 121, 80);
ellipse(200, 200, 300, 300);

//cheese
noStroke();
fill(252, 183, 8);
ellipse(200, 200, 281, 281);

//pineapple
stroke(232, 203, 16);
fill(255, 213, 0);
rect(150, 150, 30, 11);
rect(250, 250, 11, 30);
rect(101, 232, 30, 11);
rect(209, 106, 11, 30);
rect(150, 278, 30, 11);
rect(298, 182, 11, 30);
rect(254, 145, 30, 11);
rect(113, 175, 11, 30);
rect(150, 200, 30, 11);
rect(211, 187, 11, 30);

//ham
stroke(245, 182, 197);
fill(214, 128, 150);
triangle(108,100,105,120,127,100);
triangle(270,250,239,209,263,220);
triangle(108,275,90,258,127,264);
triangle(262,100,257,120,232,100);
triangle(210,319,199,334,157,307);

//pepperoni
stroke(51, 12, 12);
fill(77, 20, 20);
ellipse(150,250,22,22);
ellipse(291,120,22,22);
ellipse(83,168,22,22);
ellipse(198,95,22,22);
ellipse(254,308,22,22);
ellipse(245,179,22,22);
ellipse(121,133,22,22);
ellipse(219,250,22,22);

}