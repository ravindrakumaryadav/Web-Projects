angle = 0;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  clear();
  background(202,202,201);
  translate(width/2, height/2);
  rotate(angle);
  scale(0.75);

  
  
  fill(255,255,255);
  arc(0, 0, width, height, 0, PI);

  fill(0);
  arc(0, 0, width, height, PI, TWO_PI);

  fill(255,255,255);
  ellipse(width/4, 0, width/2, height/2);

  fill(0);
  ellipse(-width/4, 0, width/2, height/2);

  fill(255,255,255);
  ellipse(-width/4, 0, width/8, height/8);

  fill(0);
  ellipse(width/4, 0, width/8, height/8);
  
  angle -= 0.05;
  }