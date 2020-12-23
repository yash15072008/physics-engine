const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2, ground;

function setup(){
    createCanvas(600,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    var box = {
        isStatic : true
    }

    var rest = {
        restitution : 2
    }

    ground = Bodies.rectangle(300,590,600,20,box);
    World.add(myWorld,ground);

    box1 = Bodies.rectangle(300,300,100,50,rest);
    World.add(myWorld,box1);

    box2 = Bodies.rectangle(50,400,100,50,rest);
    World.add(myWorld,box2);

}

function draw(){
    background(0);
    Engine.update(myEngine);

    rectMode(CENTER);
    rect(box1.position.x,box1.position.y,100,50);
    rect(ground.position.x,ground.position.y,600,20);
    rect(box2.position.x,box2.position.y,100,50);
}