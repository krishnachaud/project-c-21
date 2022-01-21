
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let ball;
let ground;
let ground1;
let ground2;
function preload()
{
	
		}

function setup() {
	createCanvas(800,400);
    engine = Engine.create();
	world = engine.world;
	var ballOptions={
	    isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
	}
	
	//Create the Bodies Here.
	ball=Bodies.circle(100,90,20,ballOptions)
    World.add(world,ball)
    ground=new Ground(400,390,999,10)
	ground1=new Ground(600,340,10,90)
	ground2=new Ground(750,340,10,90)
	Engine.run(engine);
    ellipseMode(RADIUS)
	rectMode(CENTER);
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground.show()
  ground1.show()
  ground2.show()
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0})

	}
}

