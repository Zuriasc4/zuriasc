function rand(num) {
// this is a function
// that retuens a random letter from the alphabet

var randNum = Math.random()*num;
var result = Math.floor(randNum);
return result
}
var randletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(randletter[rand(25)]);
console.log(randletter[rand(25)]);
console.log(randletter[rand(25)]);
console.log(randletter[rand(25)]);

for (var i = 0; i < 26; i ++)