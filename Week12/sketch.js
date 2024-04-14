var x = 50;
var y = 50;
var z = 200;

var direction ="right";

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20, 2, 10);
  
  //borders
  fill(85,40,100)
  rect(0,0,10, 600)
  rect(0,0,800,10)
  rect(0,590,800,10)
  rect(790,0,800,600);
  
  //obstacle1
  rect(115,0,20,450)
  rect(320,0,20,180)
  rect(320,300,20,380)
  rect(530,150,20,600)
  rect(530,0,20,35)
  
  //obstacle2
  fill(200,25,60)
  rect(z,185,15,110)
  
  d//z var stuff
  if (direction=="right"){
  z=z+3;
  }
  if (direction=="left"){
    z=z-3;
  }
  if (z>=500){
    direction = "left";
  }
  if (z<=150){
    direction = "right";
  }
  
  //mouse obstacle
  
  
  //exit
  fill(20,2,10)
  rect(790,300,10,65);
  
  fill(200,70,1050)
  rect(760,280,30,20)
  rect(760,365,30,20)
  
  // player rectangle
  fill(24,200,29);
  if (keyIsDown(68)){
    x+=5;
    if (x > width) x = width;
  }
  if(keyIsDown(65)){
    x-=5;
   if (x < 10) x = 10;
  }
  if (x >= 780){
    x = 780
  } 
  if(keyIsDown(83)){
    y+=5;
  if (y > height) y = height;
  }
  if(keyIsDown(87)){
    y-=5;
  if (y < 10) y = 10;
}
  if (y >= 530){
    y = 530
  } 
    rect(x,y,10,60);
  
  
  
} //end draw


