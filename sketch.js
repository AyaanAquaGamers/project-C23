var paper
var ground
var leftSide
var bottom
var rightSide

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  paper = new Paper(100,600,30) 
  
  ground = new Ground(400,650,800,20)

 leftSide=createSprite(600,620,20,40)
 bottom=createSprite(680,630,150,20)
 rightSide=createSprite(760,620,20,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("pink");

  Engine.update(engine)

  ground.display()

  paper.display()


  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:23,y:-50})
	}
}
