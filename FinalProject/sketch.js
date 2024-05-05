//insiration from weidi on youtube, interactive album cover
//changed the inspiration from my proposal because I got the idea for this not long after submitting it 

let gap = 14;
let cirNum = 26;
let cirSize = 20;
let angle = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(1,10,35);
  
  //record circles and movement 
  push();
  translate(width/2, height/2);
  rotate(angle);
  //angle = map(mouseX,0, width,-10, 5);
  //arc 2 does the opposite? 
  noFill();
  stroke('white');
  strokeWeight(1);
  for(let i=0; i<cirNum;i++){
    stroke("blue")
    circle(0,0,cirSize+gap*i,cirSize+gap*i)
    stroke('white');
    arc(0,0,cirSize+gap*i,cirSize+gap*i,390,160);
    stroke('white')
    arc(0,0,cirSize+gap*i,cirSize+gap*i,210,340);
  }
  angle = angle + -1;
  stroke('white');
  strokeWeight(2);
  circle(0,0,380);
  pop();
  
  //center circles 'donut'
  stroke('white');
  strokeWeight(1);
  fill('white');
  //circle(width/2,height/2,75); 
  //fill(1,10,35);
  fill(1,10,35)
  circle(width/2,height/2,90)
  fill('white');
  circle(width/2,height/2,10);
  
  //record box shapes
  strokeWeight(1);
  noFill();
  rect(71,145,550,410,40);
  noFill();
  strokeWeight(10);
  circle(120,190,50);
  
  //arm thingy
  push();
  translate(120,190);
  rotate();
  
  
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(0, 0);
  vertex(10, 250);
  vertex(130, 300);
  endShape();
  pop();
  
  //mouse click and drag
  
  
  fill('white');
  strokeWeight(1);
  rect(685,300,90,40,40);
  fill(1,10,35);
  textSize(22)
  text("Play",707,327)
  //add play symbol
  //start music
  
  //pause button
  fill('white')
  strokeWeight(1)
  rect(685,365,90,40,40);
  fill(1,10,35);
  textSize(22)
  text("Pause",700,392)
  //add pause symbol 
  //stop music
  
  //now playing
  textSize(25);
  text("Now Playing...",360,600);
  //song name moving text
  //song
  
  //custom cursor
  noCursor();
  noStroke();
  fill(1,10,35);
  circle(mouseX,mouseY,6);
  fill('white');
  circle(mouseX,mouseY,4);
  
}
