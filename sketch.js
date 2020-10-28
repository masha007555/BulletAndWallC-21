var thickness,speed,weight;
var wall,bullet;

function setup() {
  createCanvas(1600,400);

speed= random(223,321);
weight= random(30,52);
thickness= random(22,83);

bullet= createSprite(100,200,50,5);
bullet.velocityX= speed;
bullet.shapeColor = "black";

wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor = "gray";
}

function draw() {
  background("lightBlue");

if(hasCollided(bullet,wall)){
  bullet.velocityX= 0;

  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
  wall.shapeColor= "red"; 

  stroke("black");
  textSize(20);
  fill("black");
  text("VERY BAD DAMAGE",600,200);
  }
  if(damage<10){
    wall.shapeColor= "green";

    stroke("black");
    textSize(20);
    fill("black");
    text("LOW DAMAGE",600,200);
  }
}
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  text("BULLET DAMAGE: "+Math.round(damage),600,50);
  text("BULLET SPEED: "+Math.round(speed),350,50);
  text("BULLET WEIGHT: "+Math.round(weight),100,50);
  text("WALL THICKNESS: "+Math.round(thickness),1100,50);

  }

function hasCollided(lbullet,lwall){

  bulletRightEdge= lbullet.x + lbullet.width;
  wallLeftEdge= lwall.x;
 
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}