var bullet,wall,thickness,speed,weight;

function setup() {
  createCanvas(1200,400);
  wall = createSprite(1200, 200, thickness,height/2);
  bullet = createSprite(400,200,30,10);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  
  if (hascollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage > 10)
  {
    wall.shapeColor=color(255,0,0);
  }
  if (damage < 10)
{
  wall.shapeColor=color(0,255,0);
}
}


  drawSprites();
}


function hascollided(lbullet, lwall)
{
  lbullet=lbullet.x+bullet.width;
  lwall=lwall.x;
  if (lbullet<=lwall)
  {
    return true
  }
    else
    {
      return false
    }
}
