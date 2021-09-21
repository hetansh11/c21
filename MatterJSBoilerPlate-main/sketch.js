
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var radius=40
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
}

ball=Bodies.circle(260,100,radius/2,ball_options)
World.add(world,ball)
ground1=new ground(width/2,670,width,20)
groundleft=new ground(400,600,20,120)
groundright=new ground(600,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground1.display()
  groundleft.display()
  groundright.display()
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}

}


