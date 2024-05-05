//insiration from weidi on youtube, interactive album cover
//changed the inspiration from my proposal because I got the idea for this not long after submitting it 

let gap = 14;
let cirNum = 26;
let cirSize = 20;
let angle;
let button;
let song;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(1,10,35);
  
  //custom cursor
  noCursor();
  noStroke();
  fill('white');
  circle(mouseX,mouseY,6);
  fill(1,10,35);
  circle(mouseX,mouseY,4);
  
  //record circles and movement 
  push();
  translate(width/2, height/2);
  rotate(angle);
  angle = angle +1;
  //angle = map(mouseX,0, width,-10, 5);
  //arc 2 does the opposite? 
  noFill();
  stroke('white');
  strokeWeight(1);
  for(let i=0; i<cirNum;i++){
    stroke('white');
    arc(0,0,cirSize+gap*i,cirSize+gap*i,390,160);
    stroke('white')
    arc(0,0,cirSize+gap*i,cirSize+gap*i,210,340);
  }
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
  
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(120, 190);
  vertex(120, 450);
  vertex(250, 520);
  endShape();
  
  //mouse click and drag
  
  //play button
  //song = loadSound("06Going Gets Tuff.mp3", loaded);
  //button = createButton("play")
  //button.mousePressed(togglePlaying)
  //function togglePlaying(){
    //song.play();
  //}
  //function loaded(){
    //console.log("loaded");
  //}
  
  fill('white');
  strokeWeight(1);
  rect(685,300,90,40,40);
  //add play symbol
  //start music
  
  //pause button
  fill('white')
  strokeWeight(1)
  rect(685,365,90,40,40);
  //add pause symbol 
  //stop music
  
  //now playing
  textSize(25);
  text("Now Playing",360,600);
  //song name moving text
  //song
  
  //record movement
  
}
