const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var x,y,X,Y;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  }

  //create player base body
  var playerBase = Bodies.rectangle(200,350,180,150,options);  
  World.add(world,playerBase)

  //create player body
  var player = Bodies.rectangle(160,playerBase.position.y+180,160,50,180,options);
  World.add(world,player)

  x = playerBase.position.x;
  y = playerBase.position.y;
  X = player.position.x;
  Y = player.position.y;

}
function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //show the player image using image() function
  image(playerimage,x,y,50,180);
  //show the playerbase image using image() function
    image(baseimage,X,Y,180,150);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
