function setup() {
	createCanvas(450, 450);
}

function draw() {

	background(0,0,0);
	//For (var BEGIN; END; INTERVAL){
     

	
    rect(5, 5, 435, 435, 20);
    fill(230,255,255)
      rect(15,15,415,415, 20);

      fill(76,134,203)
      rect(25,25,395,395, 20);
      //DO SOMETHING }
	for (var x = 25; x < width; x += width / 10) {
		for (var y = 25; y < height; y += height / 5) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}

}