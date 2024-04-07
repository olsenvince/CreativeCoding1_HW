var redcolor = 60;
var greencolor = 70;
var bluecolor= 110;


//this function only runs once
function setup() {
  createCanvas(300, 400);
}

//this function keeps running
function draw() {
  background(redcolor, bluecolor, greencolor);
  
  //hair 
  rect(38,45,224,265)
  
  //ears
  ellipse(35,175,30,50)
  ellipse(265,175,30,50)
  
  //shoulders
  triangle(-30,400,150,310,330,400)
  
  //neck
  rect(105,270,90,95)
  
  //head
  ellipse(150,170,200,230)
  
  //eyes
  ellipse(105,160,40,30)
  ellipse(190,160,40,30)
  
 
  //eyebrows
  line(80,144,130,144)
  line(220,144,165,144)
  
  //nose
  point(150,230)
  
  //earings
  rect(30,190,10,15)
  rect(260,190,10,15)
  
  //text
  text('"silly portrait"',115,20)
  text('Vince Olsen',115,390)
}
