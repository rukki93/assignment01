function setup() {
  createCanvas(800,600);
  strokeWeight(2);
  background(220,220,220);
}

function draw() {
     
  // Neck
  line(400,400,400,250);
  line(415,415,415,250);
  line(430,430,430,250);
  
  // Antennas
  line(415,220,375,170);
  line(415,220,460,110);
  line(415,220,500,240);
  
  // Body
  noStroke();
  fill(120,120,120);  
  ellipse(400,500,80,80);
  fill(0,0,0);  
  rect(350,350,100,150);
  fill(125,125,125);
  rect(350,370,100,8);

  
  // Head
  fill(0,0,0);
  ellipse(415,220,105,105);
  fill(255,255,255);
  ellipse(430,215,35,35);
  fill(0,0,0);
  ellipse(430,215,7.5,7.5);
  fill(125,125,125);
  ellipse(440,188,10,10);
  ellipse(400,220,12.5,12.5);
  ellipse(450,234,7.5,7.5);
  
  
  
}