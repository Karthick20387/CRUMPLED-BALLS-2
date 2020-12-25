
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,bin4;
var ground;
var dImage
var paper1;

function preload(){
   dImage=loadImage("dbin.png")
}

function setup() {
	createCanvas(1550,735);

	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(width/2,735,width,10,{isStatic:true})
	World.add(world,ground)

	bin1 = new Bin(1200,650,15,100)
	bin2 = new Bin(1350,650,15,100)
  bin3 = new Bin(1280,700,160,15)

	paper1 = new Paper(100,600,45)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  fill("green")
  stroke("blue")
  strokeWeight(2)
  textSize(30)
  text("CRUMPLED BALL",600,100)
  bin1.display();
  bin2.display();
  bin3.display();
  image(dImage,1040,500,480,278);
  paper1.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper1.paper, paper1.paper.position, {x: 390,y: -495});
	}
  }


