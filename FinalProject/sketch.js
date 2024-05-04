//insiration from weidi on youtube, interactive album cover
//changed the inspiration from my proposal because I got the idea for this not long after submitting it 


function setup() {
    createCanvas(windowWidth, windowHeight);
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
    
    //center circles 'donut'
    stroke('white');
    strokeWeight(1);
    fill('white')
    circle(width/2,height/2,75); 
    fill(1,10,35);
    circle(width/2,height/2,13);
    
    //outer circles
    noFill();
    stroke('white');
    strokeWeight(1);
    circle(width/2,height/2,105);
    circle(width/2,height/2,125);
    circle(width/2,height/2,135);
    circle(width/2,height/2,145);
    circle(width/2,height/2,155);
    circle(width/2,height/2,165);
    circle(width/2,height/2,175);
    circle(width/2,height/2,185);
    circle(width/2,height/2,195);
    circle(width/2,height/2,205);
    circle(width/2,height/2,215);
    circle(width/2,height/2,225);
    circle(width/2,height/2,235);
    circle(width/2,height/2,245);
    circle(width/2,height/2,255);
    circle(width/2,height/2,265);
    circle(width/2,height/2,275);
    circle(width/2,height/2,285);
    strokeWeight(2);
    circle(width/2,height/2,305);
    
    //record box shapes
    rect(width/10,height/5,520,410,40);
    noFill();
    strokeWeight(10)
    rect(width/7,height/4,50,50,80)
    
    //play button
    strokeWeight(1)
    rect(width/2, height/1,50,30,40)
    
    //now playing
    
    
    //record movement
    
    
    
  }