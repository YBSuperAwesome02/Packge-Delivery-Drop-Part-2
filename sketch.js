var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground
var dropzonepart1, dropzonepart2, dropzonepart3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);

	dropzonepart1 = new Dropzone(300, 650-15, 5, 100)
	dropzonepart2 = new Dropzone(400, 697.5-50, 220, 10)  
    dropzonepart3 = new Dropzone(500, 650-15, 5, 100)

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  //packageSprite.collide(groundSprite)//
  packageSprite.restitution=0.5
  dropzonepart1.display()
  dropzonepart2.display()
  dropzonepart3.display()
  /*packageSprite.collide(dropzonepart1)
  packageSprite.collide(dropzonepart2)
  packageSprite.collide(dropzonepart3)*/
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	
  }
}



