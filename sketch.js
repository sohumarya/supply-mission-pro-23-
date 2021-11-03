const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  heliImg = loadImage("helicopter.png")
  pckImg = loadImage("package.png")

}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
  
  engine = Engine.create()
  world = engine.world
  
  ground =  new Ground(width/2, 650, width, 10 )
  leftBase = new Ground(width/2-100,600,20,100)
  rightBase = new Ground(width/2+100 ,600, 20,100)
  bottomBase = new Ground(width/2, 640, 200,20)
  
  helicopter = Bodies.rectangle(width/2, 250, 10,10,{isStatic:true})
  World.add(world,helicopter)
  console.log(helicopter)
  
  package = Bodies.rectangle(width/2, 250, 25,25,{isStatic:true})
  World.add(world,package)

}

function draw() {
  background(220);
  rectMode(CENTER)
  imageMode(CENTER)
  Engine.run(engine)
  ground.show()
  fill("red")
  leftBase.show()
  rightBase.show()
  bottomBase.show()
  
  pos1 = package.position
  image(pckImg,pos1.x,pos1.y,25,25)
  
  pos = helicopter.position
  image(heliImg,pos.x,pos.y,200,100)
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    pos.x -=10
    Matter.Body.translate(package,{x:-10,y:0})
  }
  if(keyCode === RIGHT_ARROW){
    pos.x+=10
    Matter.Body.translate(package,{x:10,y:0})
  }
  
  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(package,false)
  }
}