var sea;
var ship;
var shipImage;
var seaImage;

function preload(){
  shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4,png")
  seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite(400,200);
  sea.addImage(seaImage)
  sea.velocityX=-5
 sea.scale=0.3
  
  ship=createSprite(200,207,99,35,)
 ship.addAnimation("movingship",shipImage) 
 ship.scale=0.3
 
 
}

function draw() {
  background("blue");
  //you have not given velocity here,sea.velocityX=-3
  

if(sea.x<0){
  //make sea.x=sea.width/8
  sea.x=sea.width/4
}

  text("SHUBHAM",40,80);
  drawSprites();
}
