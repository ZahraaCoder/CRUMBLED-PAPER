var ball;
var engine,world,ground,left,right;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	ball=Bodies.circle(200,600,20,ball_options);
	World.add(world,ball);

	ground=new Ground(800,680,width,20);
	left= new Ground(1100,620,20,120);
	right= new Ground(1350,620,20,120);

	
  
}


function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ground.display();
  left.display();
  right.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

