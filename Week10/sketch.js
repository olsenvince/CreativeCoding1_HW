var redcolor = 60;
var greencolor = 70;
var bluecolor= 110;

var x = 38;
var y = 175;
var z = 105;
var c = 150;
var j = 170;

//im going to run out of directions at this rate
//can i really just call them whatever i want
//oh my god i can
var direction ="right";
var direction2="down";
var direction3="righ"

var sizeDirection = 1;
var size = 10
var count = 0

//this function only runs once
function setup() {
  createCanvas(300, 400);
}

//this function keeps running
function draw() {
  background(redcolor, bluecolor, greencolor);
  
  //hair 
  rect(x,45,224,265);
  
  //ears
  ellipse(35,y,30,50);
  ellipse(265,y,30,50);
  
  //shoulders
  triangle(-30,400,150,310,330,400);
  
  //neck
  rect(z,270,90,95);
  
  //head
  ellipse(c,j,200,230);
  
  //eyes
  ellipse(105,160,40,30);
  ellipse(190,160,40,30);
  
 
  //eyebrows
  line(80,144,130,144);
  line(220,144,165,144);
  
  //nose
  point(150,230);
  
  //earings
  rect(30,190,10,15);
  rect(260,190,10,15);
  
  //text
  textSize(20)
  text('Vince Olsen',90,390);
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count >13){
        sizeDirection *=-1;
        count = 0;
    }
  text('"silly portrait"',70,20);
  
  //x var stuff
  if (direction=="right"){
  x=x+1;
  }
  if (direction=="left"){
    x=x-1;
  }
  if (x>=76){
    direction = "left";
  }
  if (x<=0){
    direction = "right";
  }
  
  //y var stuff
  if (direction2=="down"){
  y=y+3
  }
  if(direction2=="up"){
    y=y-3
  }
  if (y>=350){
    direction2= "up";
  }
  if (y<=10){
    direction2= "down";
  }
  
  //z var stuff
  if (direction3=="righ"){
    z=z+1;
  }
  if (direction3=="lef"){
    z=z-1;
  }
  if (z>=115){
    direction3 ="lef";
  }
  if (z<=87){
    direction3 = "righ";
  }
}
  
