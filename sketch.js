var monkey, monkey_running
var ground
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survival_time

function preload() {


  monkey_running =
    loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(600, 400)
  ground = createSprite(300, 370, 600, 10);
  ground.x = ground.width / 2;


  monkey = createSprite(50, 320, 20, 40)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.2

  score = 0
  survival_time = 0

  obstaclesGroup = createGroup();
  FoodGroup = createGroup();


}


function draw() {
  background("skyblue")
  ground.velocityX = -4
  monkey.collide(ground)

  if (ground.x < 300) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    console.log("hello")
    monkey.velocityY = -20


  }
  monkey.velocityY = monkey.velocityY + 1




  if (frameCount % 80 === 0) {
    Fooder()
  }

  if (frameCount % 300 === 0) {
    Obstacler()
  }
  drawSprites()
  stroke("blue")
  textSize(20)
  fill("red")
  text("SCORE : " + score, 500, 50)

  stroke("white")
  textSize(20)
  fill("black")
  survival_time = Math.ceil(frameCount / frameRate())
  text("SURVIVAL TIME : " + survival_time, 100, 50)

}

function Fooder() {
  banana = createSprite(600, 80, 20, 20)
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.velocityX = -8
  banana.y = Math.round(random(40, 200))
  banana.lifetime = 75
  FoodGroup.add(banana);
}

function Obstacler() {
  obstacle = createSprite(600, 330, 50, 50)
  obstacle.addImage(obstaceImage)
  obstacle.scale = 0.2
  obstacle.velocityX = -8
  obstacle.depth = monkey.depth - 0.1
  obstacle.lifetime = 75
  obstaclesGroup.add(obstacle);
}