// variables declaration
var scoreSection = document.getElementById("score");
var score = 0;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  this.x = x;
  this.y = y;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x = this.x + this.speed * dt;
  if (this.x == 0) {
    this.speed = 100 + Math.floor(Math.random() * 100);
  }
  if (this.x > 500) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 100);
  }
  // console.log(player.x);
  // console.log(this.x);
  if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
    player.x = 200;
    player.y = 400;
    scoreSection.innerHTML = score;

    Swal.fire({
      title: "Congrats",
      html: "score" + score,
      confirmButtonText: "ok",

    }).then(() => {
      window.location.reload();
    })
    // }
  }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// declaration of class
class Heroine {
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-pink-girl.png';

  }
}
Heroine.prototype.update = function(dt) {

}
Heroine.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var spriteLocations = [60, 143, 226];
spriteLocations.map((positionY) => {
  var spriteItem = new Enemy(0, positionY, 150);
  allEnemies.push(spriteItem);
})
var player = new Heroine(200, 410);
Heroine.prototype.handleInput = function(key) {
  switch (key) {
    // when we click the up left arrao
    case 'left':
      this.x = this.x - 101;
      if (this.x < 0)
        this.x = 0;
      break;
      // When we click right arrow
    case 'right':
      this.x = this.x + 101;
      if (this.x > 404)
        this.x = 404;
      break;
      // When we click up arrow
    case 'up':
      this.y = this.y - 83;
      if (this.y < 0) {
        score = score + 1;
        if (score % 2 == 0) {
          this.sprite = "images/char-boy.png";
        }
        if (score % 2 == 1) {
          this.sprite = "images/char-pink-girl.png"
        }
        scoreSection.innerHTML = score;
        setTimeout(() => {
          this.y = 404;
          this.x = 202;
        }, 100);

      }



      break;
      // When we click down arrow
    case 'down':
      this.y = this.y + 85;
      if (this.y > 404) {
        this.y = 404;
      }

  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
