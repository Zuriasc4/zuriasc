function rand(num) {
// this is a function
// that returns a random number between 0 and num
var randNum = Math.random()*num; 
var result = Math.floor(randNum);
return result
}

var myCoin = ["heads", "tails"];

console.log(myCoin[rand(2)]);

var myDice = ["one", "two", "three", "four", "five", "six"];
console.log("You rolled a " + myDice[rand(6)]);

