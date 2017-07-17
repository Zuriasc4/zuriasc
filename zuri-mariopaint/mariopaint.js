function setup() {
    createCanvas(600, 600);
    background("Green");
}


function mouseDragged() {
  triangle(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}