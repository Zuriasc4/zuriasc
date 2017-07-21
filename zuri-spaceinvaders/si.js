// var x = 500;
// var y = 500;
// var rect = [30, 20, 55, 55]

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }




// function draw() {
//   if (keyIsDown(LEFT_ARROW))
//     x-=5;

//   if (keyIsDown(RIGHT_ARROW))
//     x+=5;

//   clear();
//   fill(255, 0, 0);
//   ellipse(x, y, 50, 50);
// }


// }

var alien1;  // Declare objects


function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create object
  alien1 = new Jitter();

  
}

function draw() {
  background(50, 89, 100);
  alien1.move();
  alien1.display();
 
}

// Jitter class
function Jitter() {
  this.x = (100);
  this.y = (100);
  this.diameter = (50, 50);
  this.speed = 3;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}