var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed=Random(59,90)
  weight=Random(400,1500)
 bullet= createSprite(50, 200, 20, 40);
 bullet.ShapeColor= "white";
 wall=createSprite(1200,200,thickness,height/2);
 wall.color(80,80,80)

 thickness=random(22,83);
 weight=random(30,52);
 speed=random(223,321);
}

function draw() {
  background(255,255,255);  
if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
}
if (damage>10){
  wall.ShapeColor=color(255,0,0);
}

if (damage<10){
    wall.ShapeColor=color(0,255,0);
  }
}
function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
    return true
  }
  return false;

  drawSprites();
}