var backgroundImg,footballImg,goalkeeperImg;
var marginTop,marginRight,marginLeft;
var football,goalkeeperleftsaveImage,
rightsaveImage,toprightsaveImage,topsaveImage,scoreBoard,scoreBoardImg;
var targetTL,targetTR,targetL,targetR,targetImg;
function preload(){
  backgroundImg=loadImage("assets/background.jpg");
  footballImg=loadImage("assets/football.png");
  goalkeeperImg=loadAnimation("assets/stand-small.png");
  leftsaveImage= loadAnimation("assets/left-save-small.png");
  rightsaveImage = loadAnimation("assets/right-save-small.png");
  topleftsaveImage = loadAnimation("assets/top-left-save-small.png");
  toprightsaveImage = loadAnimation("assets/top-right-save-small.png");
  scoreBoardImg=loadImage("assets/scoreBoard.png");
  targetImg=loadImage("assets/target.png");
}
function setup(){
  createCanvas(732,600);
  football=createSprite(width/2,height/2+270);
  football.addImage("football",footballImg);
  football.scale=0.8;

   marginTop=createSprite(width/2,height/2-60,width,10);
   marginRight=createSprite(width/2-190,height/2-100,10,width);
   marginLeft=createSprite(width/2+190,height/2-100,10,width);
    marginLeft.visible = false;
    marginRight.visible = false;
    marginTop.visible = false;
   scoreBoard=createSprite(width/2-250,height/3-150);
   scoreBoard.addImage("score",scoreBoardImg);
   scoreBoard.scale=0.3;

  goalkeeper=createSprite(width/2,height/2+85);
  goalkeeper.addAnimation("goalkeeper",goalkeeperImg);
   goalkeeper.addAnimation("goalkeeperTL",topleftsaveImage);
   goalkeeper.addAnimation("goalkeeperTR",toprightsaveImage);
   goalkeeper.addAnimation("goalkeeperL",leftsaveImage);
   goalkeeper.addAnimation("goalkeeperR",rightsaveImage);
  goalkeeper.scale=1.4;
  goalkeeper.debug=true;
  goalkeeper.setCollider("circle", 0,0, 30);

  targetTL=createSprite(110,height-400,20,20);
   targetTL.addImage("target1",targetImg);
 targetTL.scale=0.2;  
}
function draw(){
  background(backgroundImg);
  saves();
  goalkeeper.collide(marginTop);
  goalkeeper.collide(marginLeft);
  goalkeeper.collide(marginRight);
  drawSprites();
}
// goalkepper movement
function saves(){
  if(keyDown("D")){
    goalkeeper.position.x=goalkeeper.position.x+4.9;
    goalkeeper.changeAnimation("goalkeeperR",rightsaveImage);
  }

  if(keyDown("A")){
    goalkeeper.position.x=goalkeeper.position.x-4.9;
    goalkeeper.changeAnimation("goalkeeperL",leftsaveImage);
  }
  if(keyDown("W")){
    goalkeeper.position.y=goalkeeper.position.y-4.8;
    goalkeeper.position.x=goalkeeper.position.x-4.8;
    goalkeeper.changeAnimation("goalkeeperTL",toprightsaveImage);
  }
  if(keyDown("S")){
    goalkeeper.position.y=goalkeeper.position.y-5;
    goalkeeper.position.x=goalkeeper.position.x+4.8;
    goalkeeper.changeAnimation("goalkeeperTR",topleftsaveImage);
  }
}

