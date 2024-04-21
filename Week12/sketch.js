var characterX = 50;
var characterY = 50;
var z = 200;

var mouseA = 0;
var mouseB = 0;

var direction ="right";


function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(20, 2, 10);
  
  //borders
  createBorders(10);
  function createBorders(thickness)
{
  //color
  fill(85,40,100);
  // top border
  rect(0,0,width,thickness);
  // left border
  rect(0,0,thickness,height);
  // bottom border
  rect(0, height-thickness,width, thickness);
  // right border
  rect(width-thickness,0,thickness,height-0);
}
  
  
  //obstacle1
  fill(85,40,100);
  rect(115,0,20,450);
  rect(320,0,20,180);
  rect(320,300,20,380);
  rect(530,150,20,600);
  rect(530,0,20,35);
  
 
  //obstacle2
  fill(200,25,60);
  rect(z,185,15,110);
  
  
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
  
  
  //draw player
  playerMovement()
  drawPlayer()
  
  //player movement
  function playerMovement()
  {
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
  }
  // player rectangle
  function drawPlayer(){
  fill(24,200,29);
  rect(characterX,characterY,10,60);
}
  
  
  //THIS WAS LITERALLY JUST WORKING WHAT HAPPENED
  //what did i do T^T
  //mouse obstacle
      fill(200, 290, 10);
      ellipse(mouseA, mouseB, 30, 30);
 
  function mouseClicked() 
  {
      mouseA = mouseA;
      mouseB = mouseB;
  }
  
  
  //out of bounds
  if(characterX > width && characterY > width<=800)
    {
        fill(100,200,500);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
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
