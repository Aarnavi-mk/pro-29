const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stackholder
var engine, world;
var ploygon
var ball

function preload(){
    polygonImage = loadImage("TowerSiege-1-main/polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    stackholder = new Platform(800,450,300,25)
   //level1
   b1 = new Block(680,418,30,40)
   b2 = new Block(708,418,30,40)
    b3 = new Block(738,418,30,40)
    b4 = new Block(768,418,30,40)
    b5 = new Block(795,418,30,40)
    b6 = new Block(825,418,30,40)
    b7 = new Block(855,418,30,40)
    b8 = new Block(885,418,30,40)
    b9 = new Block(915,418,30,40)

    //level2
    b10 = new Block(708,380,30,40)
    b11 = new Block(738,380,30,40)
    b12 = new Block(768,380,30,40)
    b13 = new Block(795,380,30,40)
    b14 = new Block(825,380,30,40)
    b15 = new Block(855,380,30,40)
    b16 = new Block(885,380,30,40)

    //level3
    b17 = new Block(738,340,30,40)
    b18 = new Block(768,340,30,40)
    b19 = new Block(795,340,30,40)
    b20 = new Block(825,340,30,40)
    b21 = new Block(855,340,30,40)
   
    //level4

    b22 = new Block(768,300,30,40)
    b23 = new Block(795,300,30,40)
    b24 = new Block(825,300,30,40)
   
    //level5
    b25 = new Block(795,260,30,40)

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
  
    slingShot = new Slingshot(this.ball,{x:100,y:200});
  
  }





function draw() {
    background("black"); 
   
    //Engine.update(engine);
    //text(mouseX + ',' + mouseY, 10, 15);
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

   fill("yellow");
   b1.display();
   fill("red");
   b2.display();
   fill("green");
   b3.display();
   fill("pink");
   b4.display();
   fill("blue");
   b5.display();
   fill("yellow");
   b6.display();
   fill("orange");
   b7.display();
   fill("red");
   b8.display();
   fill("brown");
   b9.display();
   fill("blue");
   b10.display();
   fill("yellow");
   b11.display();
   fill("lightblue");
   b12.display();
   fill("orange");
   b13.display();
   fill("blue");
   b14.display();
   fill("brown");
   b15.display();
   fill("lightblue");
   b16.display();
   fill("purple");
   b17.display();
   fill("green");
   b18.display();
   fill("lightgreen");
   b13.display();
   fill("brown");
   b19.display();
   fill("orange");
   b20.display();
   fill("blue");
   b21.display();
   fill("pink");
   b22.display();
   fill("purple");
   b23.display();
   fill("yellow");
   b24.display();
   fill("lightblue");
   b25.display();
   fill("lightpink");
   


}
