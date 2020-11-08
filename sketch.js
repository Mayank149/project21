var car;
var speed;
var weight;
var obstacle;
var thickness;

function setup() {
  createCanvas(1400,400);
  
 car = createSprite(50,200,50,50);
 thickness = random(22,83);
 obstacle = createSprite(1200,200,thickness,height/2);
 obstacle.shapeColor = (80,80,80);

 speed = random(55,90);
 weight = random(400,1500);

car.shapeColor = "white";
car.velocityX = speed;

}

function draw() {
  background("black"); 
  
  
  if(car.x-obstacle.x < car.width/2+obstacle.width/2 && 
    obstacle.x-car.x < car.width/2+obstacle.width/2 && 
    obstacle.y-car.y < car.height/2+obstacle.height/2 && 
    car.y-obstacle.y < car.height/2+obstacle.height/2){
     
    car.x = 50;  
    car.velocityX = 0; 

    if(0.5*weight*speed*speed/(thickness*thickness*thickness)<10){

     obstacle.shapeColor = "green";

    }

     if(0.5*weight*speed*speed/(thickness*thickness*thickness)> 10){

      obstacle.shapeColor = "red";
 
     }

    }
  
   

  drawSprites();
}