
var x1,x2,y1,y2,w1,w2,h1,h2;
var color;

function setup() {
  createCanvas(800,400);
  

  x1 = 100;
  y1 = 200;
  w1 = 30;
  h1 = 50;
  w2 = 50;
  h2 = 30;

  color = "grey";
}

function draw() {
  background(0);  

  x2 = mouseX;
  y2 = mouseY;

  fill(color);
  ellipse(x1,y1,w1,h1);
  ellipse(x2,y2,w2,h2);

  if(x2 - x1 <= (w1 + w2) / 2) {
    color = "red";
  }
  else{
    color = "green";
  }
}
