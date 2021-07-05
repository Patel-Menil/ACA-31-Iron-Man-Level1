
var bg, bgImg;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  ironmanImg=loadImage('images/iron.png')
 
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg)
  bg.scale=2
  ironman=createSprite(200,500,25,25)
  ironman.addImage(ironmanImg)
  ironman.scale=0.2
  ground=createSprite(1000,600,100000000,10)

}

function draw() {
  drawSprites();
  if(keyDown('up')){
    ironman.velocityY=-10;
  }
  if(keyDown('left')){
    ironman.x=ironman.x-5;
  }
  if(keyDown('right')){
    ironman.x=ironman.x+5;
  }
  ironman.velocityY=ironman.velocityY+0.5;
  ironman.collide(ground)
  ironman.debug=true
  ironman.setCollider('rectangle',100,10,360,480)
}

