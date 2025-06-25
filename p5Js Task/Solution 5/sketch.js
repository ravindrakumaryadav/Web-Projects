function setup (){
    createCanvas(800,800);
    //sol_le_witt();
    //noLoop();
}


var colours =[];

function draw(){
    
    stroke(0,0,255);
    strokeWeight(2); 
    
    let colors = [color(255, 0, 0), color(0, 0, 255),color(255, 255, 0)];
    for (let y = 0; y < 2; y++) {
        for (let x = 0; x < 3; x++) {
            let xpos = x *200;
            let ypos = y *200;
            fill(colors[x]);
            rect(xpos, ypos, 190, 190);
            sol_le_witt();
        }
        sol_le_witt();
    }
    
}








function sol_le_witt(){ 
    
var counter=5
while (counter<40){
    
    rect (400, counter*5, 190, 1);
    counter = counter+3;
    triangle(420, 60, 560, 60, 490, 145);
    strokeWeight(2);
    
        line(420, 70, 560, 70);
        line(435, 85, 570, 85);
        line(450, 100, 580, 100);
        line(465, 115, 590, 115);
        
        //stroke(255, 204, 0);
        line(430, 60, 430, 75);
        line(440, 60, 440, 85);
        line(450, 60, 450, 100);
        line(460, 60, 460, 110);
        line(470, 60, 470, 120);
        line(480, 60, 480, 130);
        line(490, 60, 490, 140);
        line(500, 60, 500, 130);
        line(510, 60, 510, 120);
        line(520, 60, 520, 110);
        line(530, 60, 530, 100);
        line(540, 60, 540, 85);
        line(550, 60, 550, 75);
        
} 

}