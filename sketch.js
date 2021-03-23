var bg_img, player, player_img;

function preload(){
  bg_img = loadImage("Destroyed city.png");
  player_img = loadImage("Player.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
  
}

function draw() {
  background(0);  
    player = createSprite(displayWidth/2, displayHeight/2+150,displayWidth/30,displayHeight/20);
    player.addImage(player_img);
    player.scale = 0.15;

    console.log(player.x);

    keyPressed();

  drawSprites();
}

function keyPressed(){
  if(keyCode === 37){
  player.x = player.x - 5;
  }

  if(keyCode === 39){
    player.x = player.x + 5;
  }
}