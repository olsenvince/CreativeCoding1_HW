//insiration from weidi on youtube, interactive album cover
//also with some assistance from Coding Train on youtube
//changed the inspiration from my proposal because I got the idea for this not long after submitting it 

let gap = 14;
let cirNum = 26;
let cirSize = 20;
let angle = 0;
let spin;
let button;
let song;
let z = 220;
let direction = "right"

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  song = loadSound("once-in-paris-168895.mp3")
  let button = createButton('Play')
  button.size(90,40)
  button.position(660,340)
  button.mousePressed(togglePlaying);
  
  function togglePlaying(){
    if(!song.isPlaying()){
      song.play();
      song.setVolume(0.3);
      button.html("Pause");
    } else{
      song.pause();
      button.html("Play");
      
    }
  }
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
  if(!song.isPlaying()){
  } else{
    angle = angle + -1;
  }
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
  //rotate(angle);
  //angle = angle + -1
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(0, 0);
  vertex(15, 240);
  vertex(140, 280);
  endShape();
  pop();

  //play button
  //fill('white');
  //strokeWeight(1);
  //rect(685,300,90,40,40);
  //fill(1,10,35);
  //textSize(22)
  //text("Play",707,327)

  //pause button
  //fill('white')
  //strokeWeight(1)
  //rect(685,365,90,40,40);
  //fill(1,10,35);
  //textSize(22)
  //text("Pause",700,392)
  
  //custom cursor
  noCursor();
  noStroke();
  fill(1,10,35);
  circle(mouseX,mouseY,6);
  fill('white');
  circle(mouseX,mouseY,4);
  
  //now playing
  textSize(25);
  text("Now Playing...",300,600);
  
  //title movement
  textSize(20)
  text('"once in paris" by pumpupthemind',z,630)
  if(!song.isPlaying()){
    
  } else{
  titleMovement();
  }
  
  function titleMovement(){
    if (direction=="right"){
  z=z+1;
  }
  if (direction=="left"){
    z=z-1;
  }
  if (z>=400){
    direction = "left";
  }
  if (z<=50){
    direction = "right";
  }
  }
  
}
