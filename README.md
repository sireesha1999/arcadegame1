# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
## The following steps done by me inorder to complete this project
### how to download the Project
+ I observed the github link provided by the **udacity** and by using that link I downloaded the project. https://github.com/udacity/frontend-nanodegree-arcade-game
### Coding part
+ After cloning the project from udacity I observed the files provided in it.
The files present in it are:
`app.js`,`engine.js`,`resource.js`
`index.html`, `readme.md`, img folder.
+ I opened all the code given in files , After observing all the files I understand what I need to do in order to implement this project.
+ I observed ,that most of the modifications will takes place in app.js.


### Modifications done by me
+ While developing this project I had taken two characters mainly `heroine` and `spriteItem`.
+ The main theme of this project is, the player starts moving up whenever the enemysprite touches , then  actor gets killed , then entire game will restart.
+  While executing the code in console provided by **udacity** through Github, intially an error `allEnemies` is found, and I Solved the error.
+ similarly I found some more errors, which I resoloved it to get the game on screen.
+ In `app.js` file I declared three functions namely
    + render()
    + update()
    + handleInput()
+ `render()` function is applicable to both player and enemysprite . The main function of `render()` is to fix the position of object.
+ `update()` function is applicable to both player and enemysprite. The main function of `update()` is to update the change in positon of player as well as sprite.
+ `handleInput() ` function mainly used for keys what I had used in the project .
  1. I used `up arrow` to move the player upwards ,so that only `y` position of the player only changes .
  2. I used `down arrow` to move the player downwards .so that only `y`position of player changes.
  3. I used `left arrow` to make the player to move towards left side so that only `x` position of player changes.
  4. I used `right arrow` to make the player to move towards the right so that only `x` position of the player changes.
+ I used **score** variable to show the score of the player. Whenever the player reaches the water layer the score is incremented by `1`.
+ For some bold look to my game I placed some player on the top of the game. If the score is `even count` then we get one type of player, else if the score is `odd count` then we get another type of player sprite.
+ When the player touches the bug, then pop menu is displayed. While clicking `ok` in the pop up ,then game will be `reloaded`.

### How to play the game
+ select the player first and use the arrow keys to move the player up ,right ,down ,left.
+ open your project in browser from `index.html` page.
