function setup(){
  createCanvas(700,500);
    background(0);
}
function draw(){

  ellipse(mouseX,mouseY,30,30);
  if(mouseIsPressed){
    fill(255,0,255);
  }
  else {
    fill(0,255,0);
  }
}
