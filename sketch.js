var spr;
var enemy;
var time;
var enemy2;
var spr2;
var currentMillis;
var framesInterval;
var feamesInterval2;
var enemy3;
var framesInterval3;
var enemy4;

function preLoad() {}

function setup() {
    createCanvas(600, 600);
    //Player
    spr = createSprite(width / 2, height / 2, 40, 40);
    spr.shapeColor = color(255);
    //Enemy
    enemy = createSprite(550, 550, 80, 70);
    enemy.shapecolor = color(24);
    //Enemy 2
    enemy2 = createSprite(40, 40, 60, 60)
    enemy2.shapecolor = color(128, 0, 0)
    time = 0
    framesInterval = 100
    framesInterval2 = 100000
    framesInterval3 = 50
    enemy3 = createSprite(40, 550, 80, 70);
    enemy3.shapecolor = color(255);
    enemy4 = createSprite (550,30, 75, 32)
    enemy4.shapecolor = color (24)
}

function draw() {
    background(0);
    // Timer
    text(time / 60, 5, 20);
    time = time + 1;
    //Player follows the mouse with Delay
    spr.velocity.x = (pmouseX - spr.position.x) * 0.03;
    spr.velocity.y = (pmouseY - spr.position.y) * 0.03;
    spr.velocity.y = (pmouseY - spr.position.y) * 0.03;
    spr.rotateToDirection = true;

    //Enemy Follow the Player
    if (time % framesInterval == 0) {
        enemy.velocity.x = (spr.position.x - enemy.position.x) * 0.012
        enemy.velocity.y = (spr.position.y - enemy.position.y) * 0.012
        enemy.rotateToDirection = true;
    }
    //Enemy 2 Follow the player
    if (time > 100) {
        enemy2.velocity.x = (spr.position.x - enemy2.position.x) * 0.015
        enemy2.velocity.y = (spr.position.y - enemy2.position.y) * 0.015
        enemy2.collide(enemy, enemy2);
    }
    //Enemy 3
    if (time > 1600) {
        if (time % framesInterval3 == 0) {
            enemy3.velocity.x = (spr.position.x - enemy3.position.x) * 0.02
            enemy3.velocity.y = (spr.position.y - enemy3.position.y) * 0.02
            enemy3.rotateToDirection = true;
        }
        enemy3.collide (enemy2, enemy)
    }
    
    //Enemy 4
    if (time > 3200){
         enemy4.velocity.x = (spr.position.x - enemy4.position.x) * 0.02
        enemy4.velocity.y = (spr.position.y - enemy4.position.y) * 0.02
        enemy4.collide(enemy, enemy2);
        enemy4.rotateToDirection = true
    
    }
    //Is the enemy touching you? YOU LOSE
    spr.overlap(enemy, lose);
    if (spr.collide(enemy)) {
        lose == true;
    }
    //Is enemy2 touching you? YOU LOSE
    spr.overlap(enemy2, lose2)
    if (spr.collide(enemy2)) {
        lose == true
    }
    //Is enemy3 touching you?
    spr.overlap(enemy3, lose3)
    if (spr.collide(enemy3)) {
        lose == true
    }
    
    //Is enemy4 touching you?
    spr.overlap(enemy4, lose4)
    if (spr.collide(enemy4)) {
        lose == true
    }
    //What are you controlling Player with?
    if (keyCode == SHIFT) {
        keyPressed == true
        spr.velocity.x = (keyPressed) * 0.05
        spr.velocity.y = (keyPressed) * 0.05
    }
    drawSprites();
}

function lose(spr, enemy) {
    spr.remove;
    spr.velocity.x = 0
    spr.velocity.y = 0
    textSize(20)
    text("Your Species Fades from the Tree of Life", 0, height / 4)
    time = time
}

function lose2(spr, enemy2) {
    spr.remove;
    spr.velocity.x = 0
    spr.velocity.y = 0
    textSize(20)
    text("You weren't good enough", 0, height / 2)
    time = time
}

function lose3(spr, enemy3) {
    spr.remove;
    spr.velocity.x = 0
    spr.velocity.y = 0
    textSize(20)
    text("A new and More Advanced Form has Removed You", 0, height / 3)
    time = time
}
function lose4(spr, enemy4) {
    spr.remove;
    spr.velocity.x = 0
    spr.velocity.y = 0
    textSize(20)
    text("Darwin Hates You", width/3, height / 2)
    time = time
}

function keyPressed() {
    if (keyCode === 68) {
        spr.setSpeed(1.5, 0);
    }
    else if (keyCode === 65) {
        spr.setSpeed(1.5, 90);
    }
    else if (keyCode === 87) {
        spr.setSpeed(1.5, 180);
    }
    else if (keyCode === 83) {
        spr.setSpeed(1.5, 270);
    }
    else if (key === ' ') {
        spr.setSpeed(0, 0);
    }
    return false;
}

function player() {
    spr2 = createSprite(mouseX, mouseY, 40, 40);
    spr2.shapeColor = color(255);
    //Player follows the mouse with Delay
    spr2.velocity.x = (pmouseX - spr2.position.x) * 0.05;
    spr2.velocity.y = (pmouseY - spr2.position.y) * 0.05;
    spr2.velocity.y = (pmouseY - spr2.position.y) * 0.05;
    spr2.rotateToDirection = true;
}
