function drawTrees() {
    for (var i = 0; i < trees_x.length; i++) {
        fill(120, 100, 40);
        rect(trees_x[i], treePos_y, 45, 145);
        fill(0, 0, 0);
        ellipse(trees_x[i] + 23, treePos_y + 55, 20, 20);
        fill(0, 100, 0);
        triangle(trees_x[i] - 50, floorPos_y - 107, trees_x[i] + 20, floorPos_y - 200, trees_x[i] + 90, floorPos_y - 107);
        triangle(trees_x[i] - 35, floorPos_y - 142, trees_x[i] + 20, floorPos_y - 232, trees_x[i] + 75, floorPos_y - 142);
    }
}

function drawCollectable(t_collectable) {
    fill(255, 255, 0); // 1st ring
    stroke(0, 0, 0);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, t_collectable.size);
    fill(100, 155, 255);
    ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size - 10, t_collectable.size - 10);

    fill(255, 255, 0); // 2nd ring
    ellipse(t_collectable.x_pos + 25, t_collectable.y_pos, t_collectable.size, t_collectable.size);
    fill(100, 155, 255);
    ellipse(t_collectable.x_pos + 25, t_collectable.y_pos, t_collectable.size - 10, t_collectable.size - 10);

    fill(255, 255, 0); // 3rd ring
    ellipse(t_collectable.x_pos - 25, t_collectable.y_pos, t_collectable.size, t_collectable.size);
    fill(100, 155, 255);
    ellipse(t_collectable.x_pos - 25, t_collectable.y_pos, t_collectable.size - 10, t_collectable.size - 10);

}

function drawBonus(t_bonus) {
    stroke(0);
    fill(0, 255, 255);
    beginShape();
    vertex(t_bonus.x_pos, t_bonus.y_pos);
    vertex(t_bonus.x_pos + 5, t_bonus.y_pos - 5);
    vertex(t_bonus.x_pos + 25, t_bonus.y_pos - 5);
    vertex(t_bonus.x_pos + 30, t_bonus.y_pos);
    endShape();
    triangle(t_bonus.x_pos, t_bonus.y_pos, t_bonus.x_pos + 30, t_bonus.y_pos, t_bonus.x_pos + 15, t_bonus.y_pos + 20);
}

function drawPowerUp() {
    noStroke();
    fill(245, 222, 179);
    rect(powerUp.x_pos, powerUp.y_pos, powerUp.width, 15, 0, 0, 5, 5);
    fill(184, 134, 11);
    arc(powerUp.x_pos + 5, powerUp.y_pos, 30, 25, PI, radians(360));
}
function drawCanyon(t_canyon) {
    noStroke();
    fill(100, 155, 255);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, 200);
}

function drawClouds() {
    for (var i = 0; i < cloud.length; i++) {
        fill(255);
        ellipse(cloud[i].pos_x, cloud[i].pos_y, 55, 65);
        ellipse(cloud[i].pos_x + 25, cloud[i].pos_y, 50, 45);
        ellipse(cloud[i].pos_x - 25, cloud[i].pos_y, 50, 45);
    }
}

function drawMountains() {
    for (var i = 0; i < mountain.length; i++) {
        fill(128, 128, 128);
        triangle(mountain[i].x_pos, mountain[i].y_pos, mountain[i].x_pos + 59, mountain[i].y_pos - 182, mountain[i].x_pos + 150, mountain[i].y_pos);
        triangle(mountain[i].x_pos + 50, mountain[i].y_pos, mountain[i].x_pos + 168, mountain[i].y_pos - 261, mountain[i].x_pos + 297, mountain[i].y_pos);
        fill(255, 255, 255); //snow on top of mountain
        triangle(mountain[i].x_pos + 42, mountain[i].y_pos - 130, mountain[i].x_pos + 59, mountain[i].y_pos - 182, mountain[i].x_pos + 86, mountain[i].y_pos - 130);
        triangle(mountain[i].x_pos + 109, mountain[i].y_pos - 130, mountain[i].x_pos + 168, mountain[i].y_pos - 261, mountain[i].x_pos + 233, mountain[i].y_pos - 130);
    }
}

function drawCastle() {
    noStroke();
    fill(105, 105, 105);
    rect(castle.x_pos, castle.y_pos, castle.width, castle.height);

    fill(94, 94, 94);
    beginShape();
    vertex(castle.x_pos, castle.y_pos);
    vertex(castle.x_pos - 30, castle.y_pos - 30);
    vertex(castle.x_pos + castle.width + 30, castle.y_pos - 30);
    vertex(castle.x_pos + castle.width, castle.y_pos);
    endShape();

    //small rect blocks on roof
    rect(castle.x_pos - 10, castle.y_pos - 60, 35, 30);
    rect(castle.x_pos + castle.width - 25, castle.y_pos - 60, 35, 30);

    rect(castle.x_pos + 45, castle.y_pos - 50, 140, 20);

    //roof cones
    fill(153, 0, 0);
    triangle(castle.x_pos - 15, castle.y_pos - 60, castle.x_pos + 7.5, castle.y_pos - 87.5, castle.x_pos + 30, castle.y_pos - 60);
    triangle(castle.x_pos + castle.width - 30, castle.y_pos - 60, castle.x_pos + castle.width - 7.5, castle.y_pos - 87.5, castle.x_pos + castle.width + 15, castle.y_pos - 60);

    //door
    fill(139, 69, 19);
    rect(castle.x_pos + 90, castle.y_pos + 70, 50, 70);
    arc(castle.x_pos + 115, castle.y_pos + 70, 50, 50, PI, radians(360));
}

function renderFlagpole() {
    push();
    strokeWeight(5);
    stroke(100);
    line(flagpole.x_pos, flagpole.y_pos, flagpole.x_pos, flagpole.y_pos - 80);
    fill(255, 215, 0);
    noStroke();

    if (flagpole.isReached) {
        triangle(flagpole.x_pos + 2.5, flagpole.y_pos - 60, flagpole.x_pos + 2.5, flagpole.y_pos - 80, flagpole.x_pos + 32.5, flagpole.y_pos - 70);
    }
    else {
        triangle(flagpole.x_pos + 2.5, flagpole.y_pos, flagpole.x_pos + 2.5, flagpole.y_pos - 20, flagpole.x_pos + 32.5, flagpole.y_pos - 10);
    }


    pop();
}

function checkFlagpole() {
    var d = abs(gameChar_world_x - flagpole.x_pos);
    if (d < 20 && game_score == 31) {
        flagpole.isReached = true;
    }
}

function restartGame() {
    lives = 3;
    startGame();
}

function createPlatform(x, y, length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function () {
            noStroke();
            fill(0, 100, 0);
            rect(this.x, this.y, this.length, 15, 5, 5, 0, 0);
            fill(139, 69, 19);
            rect(this.x, this.y + 15, this.length, 5);
            triangle(this.x, this.y + 20, this.x + this.length, this.y + 20, this.x + (this.length / 2), this.y + 35);

        },
        checkContact: function (gameChar_x, gameChar_y) {
            if ((gameChar_x + 20 > this.x) && (gameChar_x < this.x + 20 + this.length)) {
                if (gameChar_y == this.y) {
                    return true;
                }
            }
            return false;
        }
    }
    return p;
}

function drawPlatforms() {
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }
}

function checkIfCharacterIsUnderAnyPlatforms() {
    if (isFalling) {
        var isContact = false;
        onPlatform = false;
        for (var i = 0; i < platforms.length; i++) {
            isContact = platforms[i].checkContact(gameChar_world_x, gameChar_y);
            if (isContact) {
                onPlatform = true;
                break;
            }
        }
        if (!isContact) {
            gameChar_y += 2;
        }
    }
}

function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.increment = 1;

    this.update = function () {
        this.currentX += this.increment;

        if (this.currentX >= this.x + this.range) {
            this.increment = -1;
        }
        else if (this.currentX < this.x) {
            this.increment = 1;
        }
    }

    this.draw = function () {
        this.update();
        fill(255);
        rect(this.currentX, this.y - 10, 25, 35, 10);
        fill(0);
        ellipse(this.currentX + 8, this.y, 5, 8);
        ellipse(this.currentX + 16, this.y, 5, 8);
        fill(255, 0, 0);
        rect(this.currentX + 5, this.y + 9, 15, 10, 5);


    }

    this.checkContact = function (gc_x, gc_y) {
        var d = dist(gc_x, gc_y, this.currentX, this.y);

        if (d < 30) {
            return true;
        }

        return false;
    }
}