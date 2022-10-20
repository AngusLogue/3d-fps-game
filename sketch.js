var sprite2;


//cam1 variable

let cam1

//texture asset variables

let title
let intro
let exit
let start
let brick
let walltech
let walltechI
let pipe
let roof
let steel
let blaster
let robot
let saw

//Text font variables

let myFont

//player position variables

var playerX = 0;
var playerY = 0;
var playerZ = 0;
var playerA = 0;
//player hit variables
var playerHit = false;

//robot position variables
var robotX = 0;
var robotY = 0;
var robotZ = 0;
var robotA = 0;
//robot new movement variables:
var robotNewX = 0;
var robotNewY = 0;
var robotNewZ = 0;
var robotNewA = 0;
//robot change x
var robotChangeX = 0;
var robotChangeY = 0;
var robotChangeZ = 0;
var robotChangeA = 0;

//robotcontrol variables
var robotMove = true

//==============================================
function preload() {
  //texture loading
  title = loadImage('title.png');
  intro = loadImage('intro.png');
  exit = loadImage('exit.png');
  walltech = loadImage('walltech.jpg')
  walltech1 = loadImage('walltech1.jpg')
  pipe = loadImage('pipe.png')
  start = loadImage('start.png');
  brick = loadImage('brick.jpg');
  steel = loadImage('steel.jpg');
  roof = loadImage('roof.jpg')
  blaster = loadImage('blaster.jpg');
  robot = loadImage('robot.jpg');
  saw = loadImage('saw.png')
  //font loading
  myFont = loadFont('data font.ttf');

}
//==============================================
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);  
  
 // sprite2 = new Sprite(0, 0, 50, 50);
  //sprite2.shapeColor = color(128);
  
  cam1 = createCamera();
  
  cam1.lookAt(0, 0, 0);
   
  cam1.setPosition(playerX,0,playerY);
  
  
  perspective(PI / 3.0, width / height, 0.1, 3000); //sets the perspective, minimum and maximum render distance.
   
  //enemy movement timer
  setInterval(moveTime, random(2000,5000));
 
  






}  
//==============================================
function moveTime() {
  robotNewX = random(-10000,10000);
  robotNewY = random(-10000,10000);
  robotNewZ = random(-10000,10000);
  robotNewA = random(-180,180);
  
  
}  
 
  

//==============================================
function draw() {
   


  
  
  
  //x and y printout for debugging

  
  orbitControl(); //only used for debugging and moving around the scene in dev.
  background(0, 0, 0);
  angleMode(DEGREES);
  
//sprite2.vel.x = (playerX-sprite2.x);
//sprite2.vel.y = (playerY-sprite2.y);
  
  
//   sprite2 = new Sprite(playerX, playerY, 50, 50);
//   sprite2.shapeColor = color(128);
  
  
//in game text test  
push();
textFont(myFont);
//noFill();
textSize(17);
  strokeWeight(10);
  translate(-70,0,-300);
  text('HINT:\nUse   the   W     A     S    D     keys   to   move   around   and     the     left     and     right     arrows     to    turn', -25, 0);
pop();
//==============================================
//drawing tutorials and displays:
  
//   push();
// textFont(myFont);
// //noFill();
// textSize(20);
// translate(-10,0,-200);
//   text('Angus   Logue,   2022', -25, 0);
// pop();
  
//==============================================
  //sprite test!!!!!!!!!!!!!!!!!!!!!
//==============================================

  drawSprites();
  
  
  

  
  
//==============================================
  //sprite test!!!!!!!!!!!!!!!!!!!!!
//==============================================  
//title 
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
translate(0,-75,-600);

  rotateY(frameCount/2);
  texture(title);
  plane(500,200);
  pop();
  
//intro computer screen
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-400,-15,-200);    
  rotateY(90);

  texture(intro);
  plane(100,50);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-200,-30,-400);
  texture(start);
  plane(150,40);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-400,0,-300);    
  rotateY(90);

  texture(exit);
  plane(75,20);
  pop();
  
  
//==============================================  
  
  
  //the enemies!!
push();  
  if (robotNewX < robotX) {
    robotChangeX = robotX ++;
  } else{
    robotChangeX = robotX --;
  }
  
  if (robotNewZ < robotZ) {
    robotChangeZ = robotZ ++;
  } else{
    robotChangeZ = robotZ --;
  }
pop();  
  
  push();
  noStroke();
  translate(robotX+robotChangeX,20,robotZ+robotChangeZ);
  rotateY(robotNewA);
  texture(robot);
  cylinder(10, 70);  
  pop(); 
  
 
  
  push();
  translate(robotX+robotChangeX,20,robotZ+robotChangeZ);
  noStroke();
  noFill();
  rotateX(180);
  rotateY(frameCount * 20)
  texture(saw);
  cone(30, 10)  
  pop();    
    
  
  
//==============================================  
  //blaster render
  
  push(); 
  textureMode(IMAGE);
  texture(blaster);
  translate(playerX,19,playerY);
  rotateY(playerA+180);
  rotateX(-83);
  //box(10,20,70);
  noStroke();
  cylinder(10,70);
  pop();
  
 //blaster laser??
    push();

if (keyIsDown(32)) {//spacebar
  normalMaterial();
  translate(playerX,19,playerY);
  rotateY(playerA+180);
 rotateX(-90);

  cylinder(5,1000);
  } else {
    
  }
  pop(); 
  
  
  //player position controll
  push();

  if (keyIsDown(37)) { //left arrow
    angleMode(DEGREES);
    playerA= playerA+2
    cam1.pan(2);
    //print(playerA);
    if (playerA == 360){
      playerA = 0
    }
  }

 pop();

  push(); 

  if (keyIsDown(39)) {  //right arrow
    angleMode(DEGREES);
    playerA= playerA-2
    cam1.pan(-2);
    //print(playerA);
    if (playerA == 0){
      playerA = 360
    }
    
  }

pop();
  

  
  push();  
  if (keyIsDown(87)) {  //w arrow
    
      playerX= playerX-((10) * sin(playerA))
      playerY= playerY-((10) * cos(playerA))
      cam1.setPosition(playerX,0,playerY);
    //print(playerX,playerY);
    
    }
pop();    
  
push();  
  if (keyIsDown(83)) { //s arrow
     playerX= playerX+((10) * sin(playerA))
      playerY= playerY+((10) * cos(playerA))
      cam1.setPosition(playerX,0,playerY);
    //print(playerX,playerY);
  }
pop(); 
//strafing
  
  push();  
  if (keyIsDown(65)) {  // a arrow
      playerX= playerX-((10) * sin(playerA+90))
      playerY= playerY-((10) * cos(playerA+90))
      cam1.setPosition(playerX,0,playerY);
    //print(playerX,playerY);
    
    }
pop();    
  
  push();  
  if (keyIsDown(68)) {  // d arrow
      playerX= playerX+((10) * sin(playerA+90))
      playerY= playerY+((10) * cos(playerA+90))
      cam1.setPosition(playerX,0,playerY);
    //print(playerX,playerY);
    
    }
pop();    
  
  
  
  
  //==============================================  
//ENVIRONMENT RENDERS
  //ground plane
  
 
     push(); 
  normalMaterial();
  textureMode(IMAGE);
  //normalMaterial();
  texture(steel);
  translate(0,50,0);
  rotateX(90);
  plane(10000);
  pop();
  
  
  
  //roof
  
   push(); 
  normalMaterial();
  textureMode(IMAGE);
  //normalMaterial();
  texture(roof);
  translate(0,-160,0);
  rotateX(90);
  plane(1000,1500);
  pop();
  
 //environment boxes
  push();
  //normalMaterial();
  texture(brick);
  translate(-200, -50, 0);
  box(200, 200, 200);
  pop();
  
  push();
  //normalMaterial();
  texture(brick);
  translate(200, -50, 0);
  box(200, 200, 200);
  pop();
  
  push();
  //normalMaterial();
  texture(brick);
  translate(200, -50, 600);
  box(200, 200, 200);
  pop();
  
  push();
 //normalMaterial();

  texture(brick);
  translate(-200, -50, 600);
  box(200, 200, 200);
  pop();

  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-450,-50,-200);    

//walls
  texture(walltech);
  box(10,200,500);
  pop();
  
   push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(450,-50,-200);    
  texture(walltech);
  box(10,200,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-425,15,-200);    
  texture(pipe);
  cylinder(10,75);
  pop();

push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(450,-50,300);    
  texture(walltech1);
  box(10,200,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(450,-50,550);    
  texture(walltech1);
  box(10,200,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(450,-50,550);    
  texture(walltech1);
  box(10,200,500);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(200,-50,750);    
  rotateY(90);
  texture(walltech1);
  box(10,200,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-260,-50,750);    
  rotateY(90);
  texture(walltech);
  box(10,200,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-450,-50,600);    
  
  texture(walltech1);
  box(10,200,500);
  pop();
  
    
  
// ==============================================  
  
  
//   ==============================================  

  
}


//keypressed functionality

function keyPressed() {
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  } 
//==============================================
  //sprite test!!!!!!!!!!!!!!!!!!!!!
//==============================================  

  
}

//==============================================
  //sprite test!!!!!!!!!!!!!!!!!!!!!
//==============================================


 







