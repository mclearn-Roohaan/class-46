var skin1img,skin2img,skin3img,skin4img;
var skin1;
var skin2;
var skin3;
var skin4;
var bg1,bg2;
var gameState="serve";
var k=0;
var food=[];
var food1img,food2img,food3img,food4img,food5img
function preload(){
  skin1img=loadImage("pics/1.png");
  skin2img=loadImage("pics/2.png");
  skin3img=loadImage("pics/3.png");
  skin4img=loadImage("pics/10.png");
  bg1=loadImage("pics/backgroundblue.jpg");
  bg2=loadImage("pics/backgroundblack.jpg");
  food1img=loadImage("pics/4.png");
  food2img=loadImage("pics/5.png");
  food3img=loadImage("pics/7.png");
  food4img=loadImage("pics/8.png");
  food5img=loadImage("pics/9.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
skin1=createSprite(100,100,20,20);
skin1.scale=0.3;
skin1.addImage(skin1img);
skin2=createSprite(200,100,20,20);
skin2.addImage(skin2img);
skin2.scale=0.3;
skin3=createSprite(300,100,20,20);
skin3.addImage(skin3img);
skin3.scale=0.3;
skin4=createSprite(400,100,20,20);
skin4.addImage(skin4img);
skin4.scale=0.3;

}


function draw() {
  if(gameState==="serve"){
    background(bg2);
  }
  if(mousePressedOver(skin1)){
    k=1;
    skin2.visible=false;
    skin3.visible=false;
    skin4.visible=false;
    gameState="play";
  }
  if(mousePressedOver(skin2)){
    k=2;
    skin3.visible=false;
    skin4.visible=false;
    skin1.visible=false;
    gameState="play";
  } 
  if(mousePressedOver(skin3)){
    k=3;
    skin1.visible=false;
    skin2.visible=false;
    skin4.visible=false;
    gameState="play";
  }

  if(mousePressedOver(skin4)){
    k=4;
    skin2.visible=false;
    skin3.visible=false;
    skin1.visible=false;
    gameState="play";
  }
  if(k===1){
    if(keyDown("UP_ARROW")){
      skin1.y= skin1.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      skin1.y=skin1.y+10;
    
    }
    if(keyDown("LEFT_ARROW")){
      skin1.x=skin1.x-10;
    
    }
    if(keyDown("RIGHT_ARROW")){
      skin1.x=skin1.x+10;
    
    }
  }
  if(k===2){
    if(keyDown("UP_ARROW")){
      skin2.y= skin2.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      skin2.y=skin2.y+10;
    
    }
    if(keyDown("LEFT_ARROW")){
      skin2.x=skin2.x-10;
    
    }
    if(keyDown("RIGHT_ARROW")){
      skin2.x=skin2.x+10;
    
    }
  }


  if(k===3){
    if(keyDown("UP_ARROW")){
      skin3.y= skin3.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      skin3.y=skin3.y+10;
    
    }
    if(keyDown("LEFT_ARROW")){
      skin3.x=skin3.x-10;
    
    }
    if(keyDown("RIGHT_ARROW")){
      skin3.x=skin3.x+10;
    
    }
  }

  if(k===4){
    if(keyDown("UP_ARROW")){
      skin4.y= skin4.y-10;
    }
    if(keyDown("DOWN_ARROW")){
      skin4.y=skin4.y+10;
    
    }
    if(keyDown("LEFT_ARROW")){
      skin4.x=skin4.x-10;
    
    }
    if(keyDown("RIGHT_ARROW")){
      skin4.x=skin4.x+10;
    
    }
  }
  if(gameState==="play"){
    spawnfoods();
    }
  
  if(gameState==="play"){
    background(bg1);
  }
   
  drawSprites();
}

function spawnfoods(){
  for(var i=1;i<=60;i++){
    food[i]=createSprite(random(100,600),random(100,600));
    food[i].scale=0.2;
      var num = Math.round(random(1,5));
    
      switch(num){
        case 1: food[i].addImage(food1img);
        break;
        case 2: food[i].addImage(food2img);
        break;
        case 3: food[i].addImage(food3img);
        break;
        case 4: food[i].addImage(food4img);
        break;
        case 5: food[i].addImage(food5img);
        break;
        default: break;
      }
  }
}