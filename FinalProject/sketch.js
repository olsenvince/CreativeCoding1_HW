//insiration from weidi on youtube, interactive album cover
//also with some assistance from Coding Train on youtube
//changed the inspiration from my proposal because I got the idea for this not long after submitting it 

let gap = 14;
let cirNum = 26;
let cirSize = 20;
let angle = 0;
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
  
  //bg fuzz/noise
  push();
  stroke("white")
  strokeWeight(1);
  for(let i =0; i < 50; i++){
  point(random(width), random(height));
  }
  pop();
  
  //record box
  stroke("white")
  strokeWeight(1);
  fill(1,10,35);
  rect(71,145,550,410,40);
  
  //record circles and movement 
  push();
  translate(width/2, height/2);
  rotate(angle);
  //angle = map(mouseX,0, width,-10, 5);
  //arc 2 does the opposite? 
  noFill();
  stroke('white');
  strokeWeight(1);
  for(let i = 0; i < cirNum; i++){
    stroke("white")
    circle(0, 0, cirSize + gap * i, cirSize + gap * i)
    stroke('blue');
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 390+i*2, 160);
    stroke('blue')
    arc(0, 0, cirSize + gap * i, cirSize + gap * i, 210+i*2, 340);
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
  
  //arm thingy
  noFill();
  strokeWeight(10);
  circle(120,190,50);
  push();
  translate(120,190);
  
  if(!song.isPlaying()){
  } else{
  rotate(-10)
    
  }
  //rotate(angle);
  //angle = angle + -1
  strokeWeight(20);
  strokeJoin(ROUND);
  beginShape();
  vertex(0, 0);
  vertex(0, 250);
  vertex(130, 300);
  endShape();
  pop();
  
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

//stroke('white')
  //var wave = fft.waveform()
  //for (var i = 0; i < width; i++);{
    //var index = floor(map(i, 0, width, 0, wave.length))
    //var x = i
    //var y = wave[index] *300 + height/2
    //point(x,y)
  //}
