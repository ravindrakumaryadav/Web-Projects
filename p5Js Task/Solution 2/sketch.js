let angles = [72, 90, 108, 18, 72];
let colors = [];
let labelSize = 20;
let rlabel = 1.3;
let type=["Comedy","Action","Romance","Drama","SciFi"];

function setup() {
  createCanvas(600, 600);
  // noStroke();
  set_pie_colors()
  noLoop(); // Run once and stop
}

function set_pie_colors() {
    for(let i=0; i < angles.length; i++) {
      let red = floor(random(153,0,253));
      let green = floor(random(153,51,153));
      let blue = floor(random(153,102,153));
      colors.push([red, green, blue]);
    }
}

function draw() {
  background(153,153,255);
  pieChart(width / 2, height / 2, 350, angles);
}

function pieChart(xCenter, yCenter, diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    noStroke();
    fill(colors[i]);
    arc(
      xCenter,
      yCenter,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    stroke(1);
    fill(255,255,255,240);
    textSize(labelSize);
    let wText = textWidth(String(angles[i]));
    let hText = textAscent()-textDescent(); 
    // console.log(wText);
    text(type[i],
         width/2+cos(lastAngle+radians(angles[i]/2))*diameter*(rlabel/2)-wText/2,
         height/2+sin(lastAngle+radians(angles[i]/2))*diameter*(rlabel/2)+hText/2);
    lastAngle += radians(angles[i]);
  }
}
