var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = ("red");
  }

function setup(){
createCanvas(500,500);
background("Tan")
}

var strings = ["I would like a beverage", "I want to pet that dog", "Who can fix my computer", "Madagascar is an island", "I will need a lot of time"]
  
word = word + key

test(word, 400,400)
// uncomment to prevent any default behavior
  // return false;
}

function randomLetters(){
    var letters = "abcde";
    return "a";
}

var letterArray = [];

function draw(){
    lettersArray.push(randomLetters());
}
var myWords;
function keyTyped(){
    myWords = myWords + key;
}

text(myWords)