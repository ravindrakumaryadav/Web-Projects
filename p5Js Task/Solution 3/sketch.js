var angle = 0;	// initialize angle variable
    var scalar_x = 100;  // set the radius of circle
    var scalar_y = 45;  // set the radius of circle
    var startX = 150;	// set the x-coordinate for the circle center
    var startY = 150;	// set the y-coordinate for the circle center
    

    var scalar_x2 = 90;  // set the radius of circle
    var scalar_y2 = 35;  // set the radius of circle
    var startX2 = 150;	// set the x-coordinate for the circle center
    var startY2 = 150;	// set the y-coordinate for the circle center

function setup(){

    createCanvas(300,300);
    angleMode(DEGREES);
}


function draw(){

    background(0,153,0);

    fill(194,197,204)
    ellipse(150,150,200,100);

   fill(204,255,0)
   ellipse(150,150,182,82);

   fill(194,197,204)
   ellipse(150,150,180,80);

    fill(0,153,0)
    ellipse(150,150,160,60);

    //fill(0,0,255);
    //ellipse(120,116,10,10);

    //fill(255,0,0);
    //ellipse(155,195,10,10);
   

   //red ball animation 

    var x = startX + scalar_x * cos(angle);
    var y = startY + scalar_y * sin(angle);  
    fill(204,0,0);
  ellipse(x, y, 10);   
  angle++;

  //blue ball animation

    var x_2 = startX2 + scalar_x2 * cos(angle);
    var y_2 = startY2 + scalar_y2 * sin(angle);  
    fill(0,0,255)
    ellipse(x_2, y_2, 10);   
    (angle++ +1);

 }




