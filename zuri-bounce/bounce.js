var x = 50;
var y = 50;
var vy = 10;
var vx = 10;

function setup(){
    createCanvas(600, 600);
    
}

function draw(){
background("green");
ellipse(x, y, 50, 50);
fill(300);
x = x + vx;
y = y + vy;

if (x > 400 && x < 500){
    vx = random(-10,0);
}else if(x>-25 && x<25){
    vx = random(10);
}

if (y > 400 && y < 500){
    vy = random(-10,0);
}
else if(y>-25 && y<25){
    vy = random(10);
}
       
};



// if (y > 400 && y < 500)
// // if(var x=== 50 && y === 50)

// // x--;
// // y--;

