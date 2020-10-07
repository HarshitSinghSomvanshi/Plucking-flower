
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5;
var stone,launcher;

function preload()
{
	
}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,700);

	tree = new Tree(1200,350,600,700);

	mango1 = new Mango(1200,250,60,70);
	mango2 = new Mango(1100,300,60,70);
	mango3 = new Mango(1000,250,60,70);
	mango4 = new Mango(1250,100,60,70);
	mango5 = new Mango(1300,200,60,70);

	boy = new Boy(200,560,400,500);

	stone = new Stone(100,460,100,90);

	launcher = new Launcher(stone.body,{x:100,y:460});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  stone.display();

  launcher.display();

  dectectCollosion(stone,mango1);
  dectectCollosion(stone,mango2);
  dectectCollosion(stone,mango3);
  dectectCollosion(stone,mango4);
  dectectCollosion(stone,mango5);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body ,{x:mouseX , y :mouseY} );
}

function mouseReleased(){
    launcher.fly();
}
function dectectCollosion(lstone,lmango){
  stoneBodyPosition=lstone.body.position;
  mangoBodyPosition=lmango.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lmango+lstone){
	  Matter.Body.setStatic(lmango.body,false);
  }
   
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		launcher.attach(stone.body);
	}
}