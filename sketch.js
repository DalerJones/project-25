
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	ball1 = new Ball(200,650)



	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  

  groundObject.display();
  dustbinObj.display();
  ball1.display();
 
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-60})	  
	}
}
