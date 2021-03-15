var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	
	bgImg = loadImage("starNight.png");


}

function setup() {
	createCanvas(800, 750);

	



	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	

	star = createSprite(650,30)
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var s_options = {
	restitution:0.5
	
	}

	
	starBody = Bodies.circle(650 , 30 , 5, s_options) ;
	World.add(world, starBody);
	
	
	
	

}


function draw() {
  background(bgImg);

  fairy.velocityX = 0

  if(starBody.position.y<470) {
		
  }

		
  
  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyCode===RIGHT_ARROW) {
		fairy.velocityX = 5;
		fairy.velocityY = 0
		

		
		

	}

	if(keyCode===LEFT_ARROW) {
		fairy.velocityX = -5
		fairy.velocityY = 0
		star.velocityY = 0
		

	}

	if(keyCode===UP_ARROW) {
			
		
		star.velocityY = 0
		

		

	}


	if(keyCode===DOWN_ARROW) {
			
		star.x = starBody.position.x
		star.y = starBody.position.y
		star.velocityY = 3
		

		

	}

}
