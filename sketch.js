const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImage;
var options ={
  isStatic: true
};

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);
  //criar corpo do jogador
  player = Bodies.rectangle(250, playerBase.position.y -160, 50, 180, options);
  World.add(world, playerBase);

}

function draw() {
  background(backgroundImg);
  
  //exibir a imagem da base do jogador usando a função image()
  image(baseImage, playerBase.position.x, playerBase.position.y, 180, 150);
  
  //exibir a imagem do jogador usando a função image()
  image(playerimage, player.position.x, player.position.y, 50, 180);
  
  Engine.update(engine);
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
