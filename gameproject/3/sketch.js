/*

The Game Project Mid Term Assignment

Commentary:
I added in sound effects as well as some gameplay mechanics such as ensuring that the player collects all the token before completing the level and adding in a "powerup" to enable the character to jump higher in order to collect the bonus item. For me the factory pattern for the platform was a little challenging in the beginning but overall I got the hang of it and started making lesser errors when i debugged them. After learning the various techniques, it made coding much simpler with some added functions such as when i needed to add multiple objects, I could use a factory pattern and layout the structure needed to draw them and simply input an array of cordinates instead of coding every single item.


Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var gameChar_world_x
var isLeft;
var isRight;
var collectable;
var powerUp;
var bonus;
var canyon;
var trees_x;
var treePos_y;
var cloud;
var scrollPos;
var mountain;

var game_score;
var flagpole;
var lives;
var life_token;
var platforms;
var onPlatform;
var enemies;

var jumpSound;
var collectSound;
var fallingSound;
var backgroundSound;

function preload() {
    soundFormats('mp3', 'wav');

    //load sounds here
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.1);

    collectSound = loadSound('assets/collect.wav');
    collectSound.setVolume(0.5);

    fallingSound = loadSound('assets/falling.mp3');
    fallingSound.setVolume(0.3);

    backgroundSound = loadSound('assets/background.wav');
    backgroundSound.setVolume(0.8);

    powerupSound = loadSound('assets/powerup.wav');
    powerupSound.setVolume(0.5);


}


function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    lives = 3;

    startGame();



}



function startGame() {
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    scrollPos = 0;



    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    onPlatform = false;


    collectable = [{ x_pos: -775, y_pos: 160, size: 20, isFound: false }, { x_pos: -350, y_pos: 312, size: 20, isFound: false }, { x_pos: -20, y_pos: 400, size: 20, isFound: false }, { x_pos: 400, y_pos: 400, size: 20, isFound: false }, { x_pos: 1000, y_pos: 400, size: 20, isFound: false }, { x_pos: 1300, y_pos: 400, size: 20, isFound: false }, { x_pos: 1450, y_pos: 300, size: 20, isFound: false }];

    bonus = [{ x_pos: -1640, y_pos: 150, isFound: false }];

    powerUp = { x_pos: -1600, y_pos: 412, width: 10, isFound: false };

    mountain = [{ x_pos: -1950, y_pos: 432 }, { x_pos: -1256, y_pos: 432 }, { x_pos: -200, y_pos: 432 }, { x_pos: 450, y_pos: 432 }, { x_pos: 900, y_pos: 432 }, { x_pos: 1250, y_pos: 432 }];

    canyon = [{ x_pos: -700, y_pos: floorPos_y, width: 300 }, { x_pos: 200, y_pos: floorPos_y, width: 100 }, { x_pos: 770, y_pos: floorPos_y, width: 100 }];

    trees_x = [-1800, -1400, -1000, 50, 400, 700, 1000, 1200];

    treePos_y = height / 2;

    cloud = [{ pos_x: -500, pos_y: 80 }, { pos_x: 100, pos_y: 200 }, { pos_x: 500, pos_y: 100 }, { pos_x: 800, pos_y: 150 }, { pos_x: 1200, pos_y: 150 }, { pos_x: 1400, pos_y: 100 }];

    game_score = 0;

    flagpole = { isReached: false, x_pos: 2315, y_pos: 242 };

    castle = { x_pos: 2200, y_pos: 292, width: 230, height: 140 };

    life_token = { x_pos: 85, y_pos: 35, size: 15 };

    platforms = [];
    platforms.push(createPlatform(200, floorPos_y - 100, 100));
    platforms.push(createPlatform(-400, floorPos_y - 100, 100));
    platforms.push(createPlatform(-600, floorPos_y - 200, 150));
    platforms.push(createPlatform(-850, floorPos_y - 250, 150));
    platforms.push(createPlatform(-1700, floorPos_y - 260, 150));

    enemies = [];
    enemies.push(new Enemy(-1200, floorPos_y - 25, 120));
    enemies.push(new Enemy(60, floorPos_y - 25, 120));
    enemies.push(new Enemy(1100, floorPos_y - 25, 120));
    enemies.push(new Enemy(1650, floorPos_y - 25, 100));

}


function draw() {

    ///////////DRAWING CODE//////////

    background(100, 155, 255); //fill the sky blue

    //drawing the ground
    noStroke();
    fill(0, 155, 0);
    rect(0, floorPos_y, width, height - floorPos_y);
    fill(139, 69, 19);
    rect(0, floorPos_y + 30, width, height - floorPos_y);

    push();
    translate(scrollPos, 0);

    console.log("x:" + gameChar_world_x);
    console.log("y:" + gameChar_y);

    //draw the cloud
    drawClouds();

    //draw the mountain
    drawMountains();

    //draw the tree
    drawTrees();

    //draw the canyon
    for (var i = 0; i < canyon.length; i++) {
        drawCanyon(canyon[i]);

        //detecting character over canyon
        var x_limit1 = ((gameChar_x - scrollPos) > canyon[i].x_pos);
        var x_limit2 = ((gameChar_x - scrollPos) < (canyon[i].x_pos + canyon[i].width));
        if (x_limit1 && x_limit2 && gameChar_y >= floorPos_y) {
            isPlummeting = true;
            isLeft = false;
            isRight = false;
        }

    }

    //making char fall down canyon
    if (isPlummeting == true) {
        gameChar_y += 5;
    }

    //draw the collectable
    for (var i = 0; i < collectable.length; i++) {
        if (collectable[i].isFound == false) {
            drawCollectable(collectable[i]);

            //check collectable
            let d = dist(gameChar_world_x, gameChar_y, collectable[i].x_pos, collectable[i].y_pos);
            if (d < 35) {
                collectable[i].isFound = true;
                game_score += 3;
                collectSound.play();
            }

        }
    }
    //draw the bonus collectable
    for (var i = 0; i < bonus.length; i++) {
        if (bonus[i].isFound == false) {
            drawBonus(bonus[i]);

            //check collectable
            let d = dist(gameChar_world_x, gameChar_y, bonus[i].x_pos, bonus[i].y_pos);
            if (d < 35) {
                bonus[i].isFound = true;
                game_score += 10;
                collectSound.play();
            }
        }

    }

    //draw the powerup
    if (powerUp.isFound == false) {
        drawPowerUp();
        let d = dist(gameChar_world_x, gameChar_y, powerUp.x_pos, powerUp.y_pos);
        if (d < 35) {
            powerUp.isFound = true;
            powerupSound.play();

        }
    }



    //draw platform
    drawPlatforms();

    //draw the castle
    drawCastle();



    //draw flagpole
    renderFlagpole();

    if (flagpole.isReached == false) {
        checkFlagpole();
    }

    //draw enemies
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();

        //check enemy contact
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
        if (isContact) {
            if (lives > 0) {
                startGame();
                lives -= 1;
                break;
            }
        }
    }


    pop();


    //drawing the game character
    if (isLeft) {
        //walking left code
        drawWalkingLeft();
    }
    else if (isRight) {
        //walking right code
        drawWalkingRight();
    }
    else if (onPlatform && isLeft)//walking left on platform code
    {
        drawWalkingLeft();
    }
    else if (onPlatform && isRight)//walking right on platform code
    {
        drawWalkingRight();
    }
    else if (onPlatform) {
        drawFacingFront();
    }
    else if (isFalling || isPlummeting)//jumping and falling code
    {
        drawJumpingForward();
    }
    else if (isRight && isFalling)//jumping right
    {
        drawJumpingRight();
    }
    else if (isFalling && isLeft)//jumping left
    {
        drawJumpingLeft();
    }
    else {
        drawFacingFront();//standing front facing code
    }


    //detecting gravity
    if (gameChar_y < floorPos_y) {
        //gameChar_y = gameChar_y += 2;
        isFalling = true;
    }
    else {
        isFalling = false;
    }

    //player lives
    if (lives > 0) {
        checkPlayerDie();
        console.log(lives);
    }


    //drawing life tokens to indicate lives remaining
    for (var i = 0; i < lives; i++) {
        fill(255, 0, 0);
        ellipse(life_token.x_pos + [i] * 18, life_token.y_pos, life_token.size, life_token.size);
    }

    //display lives text
    fill(255);
    noStroke();
    textSize(20);
    text("Lives: ", 20, 40);


    //draw game score text
    fill(255);
    noStroke();
    text("score: " + game_score, 20, 20);

    //display game over text
    if (lives == 0) {
        fill(0);
        textSize(80);
        text("Game over!", 120, 100);
        textSize(60);
        text("Press space to continue!", 130, 200);
        isLeft = false;
        isRight = false;

        //restarting game with space bar

        if (keyCode == 32)//space bar pressed
        {
            restartGame();
        }
    }

    //display stage cleared
    if (flagpole.isReached) {
        fill(0);
        textSize(80);
        text("Level Completed!", 250, 300);
        textSize(60);
        text("Press space to continue!", 200, 400);
        isLeft = false;
        isRight = false;
    }



    //display incomplete level if all tokens are not collected
    else if (gameChar_world_x > 2200 && game_score != 31) {
        fill(0);
        textSize(50);
        text("Level incomplete!", 100, 120);
        textSize(30);
        text("Collect all the tokens to continue!", 80, 170);

    }





    ///////////INTERACTION CODE//////////
    //Conditional statements to move the game character below here

    if (isLeft == true)//making character move left
    {
        charMoveLeft();
    }

    if (isRight == true)//making character move right
    {
        charMoveRight();
    }

    if (isFalling && gameChar_y == floorPos_y)//making character jump
    {
        charJump();
    }

    //call checkIfCharacterIsUnderAnyPlatforms
    checkIfCharacterIsUnderAnyPlatforms();

    gameChar_world_x = gameChar_x - scrollPos;



}






function keyPressed() {
    // if statements to control the animation of the character when
    // keys are pressed.

    //open up the console to see how these work
    console.log("keyPressed: " + key);
    console.log("keyPressed: " + keyCode);


    if (keyCode == 37) //left arrow pressed
    {
        console.log("left arrow");
        isLeft = true;
    }

    if (keyCode == 39)//right arrow pressed
    {
        console.log("right arrow");
        isRight = true;
    }


    if (keyCode == 32)//space bar pressed
    {
        if (gameChar_y == floorPos_y || onPlatform) {
            console.log("space bar");
            gameChar_y -= 150;
            jumpSound.play();

            if (powerUp.isFound == true && gameChar_world_x < -580) {
                gameChar_y -= 170;
            }
        }

        if (flagpole.isReached) {
            restartGame();
        }


    }


}

function keyReleased() {
    // if statements to control the animation of the character when
    // keys are released.

    console.log("keyReleased: " + key);
    console.log("keyReleased: " + keyCode);

    if (keyCode == 37)//left arrow released
    {
        console.log("left arrow");
        isLeft = false;
    }

    if (keyCode == 39)//right arrow released
    {
        console.log("right arrow");
        isRight = false;
    }

    if (keyCode == 40)//down arrow pressed
    {
        console.log("down arrow");
        isFalling = false;

    }

    if (keyCode == 32)//space bar released
    {
        console.log("space bar");
        isFalling = false;
    }




}
