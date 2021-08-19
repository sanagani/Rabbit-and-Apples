var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;
var select_sprites = Math.round(random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = .05
  apple.velocityY = 2
}

function createLeaves(){
 leaf = createSprite(random(50,350),40,10,10);
 leaf.addImage(leafImg);
 leaf.scale = .05
 leaf.velocityY = 1.5
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(keyDown("right")){
    rabbit.velocityX = rabbit.velocityX + 1
  }
  if(keyDown("left")){
    rabbit.velocityX = rabbit.velocityX - 1
  }
  
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createLeaves();
    }
    else{
      createApples();
    }
  }

  drawSprites();
}