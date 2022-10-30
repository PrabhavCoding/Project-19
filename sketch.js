var spaceship, spaceshipImg,laser,laserImg;
var alien,alienImg;
var lives = 3;
var score = 0;
var gameState = PLAY;

function preload(){
 spaceshipImg = loadImage("spaceship.png");
 alienImg = loadImage("alien.webp");
 laserImg = loadImage("laser.png");
}


function setup(){
 createCanvas(400,400);

 spaceship = createSprite(200,300);
 spaceship.addImage("spaceship",spaceshipImg);
 spaceship.scale = 0.25;

 laser = createSprite(spaceship.x,spaceship.y);
 laser.addImage("laser",laserImg);
 laser.scale = 0.05;
 laser.visible = false;


 alien = createSprite(random(0,400),100);
 alien.addImage("alien",alienImg);
 alien.scale = 0.05;
 alien.velocityY = 2;
}

function draw(){
    background("black");

    if(keyDown("RIGHT_ARROW")){
        spaceship.x = spaceship.x+5;
    }

    if(keyDown("LEFT_ARROW")){
        spaceship.x = spaceship.x-5;
    }


    if(laser.y == 0){
        laser.y = spaceship.y;
        laser.x = spaceship.x;
    }


    if(spaceship.isTouching(alien)){
        lives = lives-1
    }


    if(keyDown("space")){
        laser.visible = true;
        laser.velocityY = -5;
    }

    if(laser.isTouching(alien)){
        laser.visible = false;
        laser.velocityY = 0;
        score = score+5;
        alien.y = 0;
        laser.x = spaceship.x;
        laser.y = spaceship.y;
        alien.x = random(0,400);
    }

    if(alien.y == 400){
        alien.y = 0;
        alien.x = random(0,400);
    }

    if(alien.y == 390){
        lives = lives-1;
    }

    if(spaceship.x == 0){
        spaceship.x = 200;
    }

    if(spaceship.x == 400){
        spaceship.x =200;   
     }

    if(lives == 0){
        gameStateEnd();
    }

    if(gameState == gameStateEnd){
      
        textSize(15);
        textColor("white");
        text("Game Over, You Lost",200.200);
    }


    textSize(15);
    text("Lives:",325,50);
    text(lives,370,50);
    text("Score",325,80);
    text(score,370,80);

    drawSprites();
}

function gameStateEnd(){
    background("black");

    
    alien.visible = false;
    spaceship.visible = false;
    alien.velocityY = 0;
    alien.y = 0;
    laser.visible = false;

    
}