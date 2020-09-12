var bananai,bananag,bananav
var obstaclei,obstacleg,stonev
var Backgroundi,Background
var score
var monkey,monkeyi
var ground


function preload(){
  //Backgroundi=loadImage("jungle.png");
  monkeyi=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananai=loadImage("banana.png")
  obstaclei=loadImage("stone.png")
  
}

function setup() {
  createCanvas(600, 400);
  monkey=createSprite(27,360,20,50);
  monkey.addAnimation("abc",monkeyi);
  monkey.scale=0.1;
  //Background=createSprite(200,200,400,400)
  //Background.addImage(Backgroundi);
  ground=createSprite(200,380,800,20)
  //ground.visible=false
  ground.velocityX=-4;
  bananag = createGroup();
  obstacleg = createGroup();
  score=0;
  
}

function draw() {
  background(220);
  
  monkey.collide(ground);
  
  //console.log(score);
  
  
  
  
  if(keyDown("space")&&monkey.y>=300){
      monkey.velocityY = -12 ; 
    }
  //console.log(score);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
 if(ground.x>0){
  ground.x=ground.width/2; 
  }
  
 textSize(20);
  fill("black");
    
    text("SCORE: "+score,200,50); 
  
  
  
  
 banana(); 
  stone();
  
  
  if(bananag.isTouching(monkey)){
   score=score+2;
    bananag.destroyEach(); 
 }
  
  
 switch(score){
   case 10: monkey.scale=0.11;
     break;
     case 20: monkey.scale=0.12;
     break;
     case 30: monkey.scale=0.13;
     break;
     case 40: monkey.scale=0.14;
     break;
     case 50: monkey.scale=0.15;
     break;
     default:break;
     
 }
  
  
if(obstacleg.isTouching(monkey)){
  monkey.scale=0.1;
}
  
  
  drawSprites();
}




function banana(){
  if (frameCount%80===0) {
    var bananav=createSprite(600,400,10,10);
    bananav.scale=0.06;
    bananav.addImage(bananai);
    bananav.y = random(300,250);
    bananav.velocityX = -7;
    bananav.lifetime=134;
    bananag.add(bananav);
    
  } 
  
  
}


function stone(){
  
if (frameCount%200===0) {
    var stonev=createSprite(600,355 ,1,1);
   stonev.scale=0.1;
   stonev.addImage(obstaclei);
    stonev.velocityX = -7;
    stonev.lifetime=134;
    obstacleg.add(stonev);
  }  
  
  
  
  
}