function drawFacingFront()
{
    fill(255, 165, 122);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25); //head of character
    fill(255, 0 , 0);
    rect(gameChar_x - 15, gameChar_y - 48, 30, 40); //red body
    fill(0, 0, 255);
    rect(gameChar_x - 9, gameChar_y - 48, 18, 30); //blue part
    rect(gameChar_x - 15, gameChar_y - 28, 30, 20);
    fill(255, 0, 0);
    rect(gameChar_x - 5.5, gameChar_y - 48, 11, 15);//centre red rect
    fill(0, 0, 0);
    rect(gameChar_x + 8, gameChar_y - 8, 10, 10);//legs of character
    fill(0, 0, 0);
    rect(gameChar_x - 18, gameChar_y - 8, 10, 10);
}

function drawJumpingForward()
{
    fill(255, 165, 122);
    ellipse(gameChar_x, gameChar_y - 58, 20, 20); //head of character
    fill(255, 0 , 0);
    rect(gameChar_x - 15, gameChar_y - 48, 30, 40); //red body
    fill(0, 0, 255);
    rect(gameChar_x - 9, gameChar_y - 48, 18, 30); //blue part
    rect(gameChar_x - 15, gameChar_y - 28, 30, 20);
    fill(255, 0, 0);
    rect(gameChar_x - 5.5, gameChar_y - 48, 11, 15);//centre red rect
    fill(0, 0, 0);
    rect(gameChar_x + 10, gameChar_y - 15, 10, 10);//legs of character
    fill(0, 0, 0);
    rect(gameChar_x - 18, gameChar_y - 15, 10, 10);
    fill(0, 0, 0, 100);
    ellipse(gameChar_x, gameChar_y - 1, 40, 6);//shadow
}

function drawWalkingLeft()
{
    fill(255, 165, 122);
    ellipse(gameChar_x + 5, gameChar_y - 65, 18, 20);//head of character
    fill(255, 0 , 0);
    rect(gameChar_x - 5, gameChar_y - 55, 20, 40);//red body
    fill(0, 0, 255);
    rect(gameChar_x - 5, gameChar_y - 35, 20, 20);//blue part
    fill(0, 0, 0);
    rect(gameChar_x - 10, gameChar_y - 20, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x + 10, gameChar_y - 15, 10, 10);//legs
    fill(255, 0, 0);
}

function drawWalkingRight()
{
    fill(255, 165, 122);
    ellipse(gameChar_x - 5, gameChar_y - 65, 18, 20);//head of character
    fill(255, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 55, 20, 40);// red body
    fill(0, 0, 255);
    rect(gameChar_x - 15, gameChar_y - 35, 20, 20);//blue part
    fill(0, 0, 0);
    rect(gameChar_x, gameChar_y - 20, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x - 20, gameChar_y - 15, 10, 10);// legs
}

function drawJumpingRight()
{
    fill(255, 165, 122);
    ellipse(gameChar_x - 5, gameChar_y - 65, 18, 20);//head of character
    fill(255, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 55, 20, 40);// red body
    fill(0, 0, 255);
    rect(gameChar_x - 15, gameChar_y - 35, 20, 20);//blue part
    fill(0, 0, 0);
    rect(gameChar_x, gameChar_y - 20, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x - 20, gameChar_y - 15, 10, 10);// legs
    fill(0, 0, 0, 100);
    ellipse(gameChar_x - 4, gameChar_y - 1, 35, 6);//shadows

}

function drawJumpingLeft()
{
    fill(255, 165, 122);
    ellipse(gameChar_x + 5, gameChar_y - 65, 18, 20);//head of character
    fill(255, 0 , 0);
    rect(gameChar_x - 5, gameChar_y - 55, 20, 40);//red body
    fill(0, 0, 255);
    rect(gameChar_x - 5, gameChar_y - 35, 20, 20);//blue part
    fill(0, 0, 0);
    rect(gameChar_x - 10, gameChar_y - 20, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x + 10, gameChar_y - 15, 10, 10);//legs
    fill(255, 0, 0);
    fill(0, 0, 0, 100);
    ellipse(gameChar_x + 4, gameChar_y - 1, 35, 6);//shadows
}

function charMoveLeft()
{
    if(gameChar_x > width * 0.4)
              {
                  gameChar_x -= 4;
              }
          else
              {
                  scrollPos += 4;
              }
}

function charMoveRight()
{
    if(gameChar_x < width * 0.6)
                {
                    gameChar_x += 4;
                }
            else
                {
                    scrollPos -= 4;
                }
}

function charJump()
{
    gameChar_y -= 150;
}

function checkPlayerDie()
{
    
    if(gameChar_y > (floorPos_y + 144))
        {
            lives -= 1;
            if(lives > 0)
                {
                    startGame();
                }
            
        } 
}
