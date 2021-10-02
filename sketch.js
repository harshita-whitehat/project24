
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin0bj,paperObj,groundObj;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER) ; 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paperObj = new Paper(200,450,40);
     dustbinObj = new dustbin(1200,650)
	 groundObj = new Ground(width/2,670,670,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paperObj.display(); 
 groundObj.display();
 dustbin0bj.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW ){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position, {x:85, y:-85})
	}
}


