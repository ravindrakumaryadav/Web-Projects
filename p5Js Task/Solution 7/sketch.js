function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    background(200);
  
    push();
    translate(width * 0.1, height * 0.4);
    rotate(frameCount / 210.0);
    star(5, 10, 5, 70, 3);
    pop();
  
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();
  
    push();
    translate(width * 0.9, height * 0.4);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();
  }
  
  function star(x, y, rad1, rad2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * rad2;
      let sy = y + sin(a) * rad2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * rad1;
      sy = y + sin(a + halfAngle) * rad1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  