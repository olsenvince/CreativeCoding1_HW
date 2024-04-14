var characterX = 50;
var characterY = 50;
var z = 200;

var mousex = 0;
var mousey = 0;

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
  
  
  //z var stuff
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
  
  
  //exit
  fill(20,2,10)
  rect(790,300,10,65);
  fill(200,70,1050)
  rect(760,280,30,20)
  rect(760,365,30,20)
  textSize(16);
  text("EXIT", width-60,height-265)
  
   
  //out of bounds
  if(characterX > width && characterY > width<=800)
    {
        fill(100,200,500);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
  
  
  // player rectangle
  fill(24,200,29);
  if (keyIsDown(68)){
    characterX+=5;
    if (characterX > width) x = width;
  }
  
  if(keyIsDown(65)){
    characterX-=5;
  }
  
  if(keyIsDown(83)){
    characterY+=5;
  if (characterY > height) characterY = height;
  }
 
  if(keyIsDown(87)){
    characterY-=5;
}
  rect(characterX,characterY,10,60);
  
  
  //THIS WAS LITERALLY JUST WORKING WHAT HAPPENED
  //what did i do T-T
  //mouse obstacle
      fill(200, 290, 10);
      ellipse(mousex, mousey, 30, 30);
  function mouseClicked() { 
      mousex = mouseX;
      mousey = mouseY;
  }
  
} //end draw

/*
if (characterX < 10) characterX = 10;

if (characterY < 10) characterY = 10;

if (characterY >= 530){
    characterY = 530
  } 

if (characterx >= 780){
    characterX = 780
}
*/
