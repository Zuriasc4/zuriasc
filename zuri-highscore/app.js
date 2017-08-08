// var playerChoice = $("#btn-lg").click(function () {
//     alert("Handler for .click() called.");
// });;


// var choices = ['r', 'p', 's'];
// var compChoice = choices[Math.floor(Math.random() * 3)];


// if (playerChoice == compChoice) {
//     console.log("It's a tie!");
// }


// if (playerChoice == 'r' && compChoice == 'p') {
//     console.log('Rock loses to paper. You lose!');
// }
// if (playerChoice == 'p' && compChoice == 's') {
//     console.log('Paper loses to scissor. You lose!');
// }


// if (playerChoice == 's' && compChoice == 'p') {
//     console.log('Scissor beats paper. You win!');
// }

// if (playerChoice == 's' && compChoice == 'r') {
//     console.log('Scissor loses to rock. You lose!');
// }


// //player picks rock and computer picks scissor
// if (playerChoice == 'r' && compChoice == 's') {
//     console.log('Rock beats scissor. You win!');
// }


// if (playerChoice == 'p' && compChoice == 'r') {
//     console.log('Paper beats rock. You win!');
// }
var wins = 0;
var losses = 0;


var playerChoice;

var choices = ["rock", "paper", "scissors"];
var compChoice;

$("#ROCK").click(function()
{
    playerChoice = "rock";
    compChoice = choices[Math.floor(Math.random() * 3)];
    console.log(playerChoice);
    rules(playerChoice);
});

$("#PAPER").click(function () {
    playerChoice = "paper";
    compChoice = choices[Math.floor(Math.random() * 3)];
    console.log(playerChoice);
    rules(playerChoice);
});

$("#SCISSORS").click(function () {
    playerChoice = "scissors";
    compChoice = choices[Math.floor(Math.random() * 3)];
    console.log(playerChoice);
    rules(playerChoice);    
});

function rules(pChoice)
{
    if (pChoice == compChoice) {

        $(outcome).empty();
        $(outcome).append("It's a tie!");
        console.log("It's a tie!");
        $(panel - body).append(+1);
    }

    else if (pChoice == 'rock' && compChoice == 'paper') {
        $(outcome).empty();
        $(outcome).append('Rock loses to paper. You lose!');
        console.log('Rock loses to paper. You lose!');
    }

    else if (pChoice == 'paper' && compChoice == 'scissors') {
        $(outcome).empty();
        $(outcome).append('Paper loses to scissor. You lose!');
        console.log('Paper loses to scissor. You lose!');
    }

    else if (pChoice == 'scissors' && compChoice == 'paper') {
        $(outcome).empty();
        $(outcome).append('Scissor beats paper. You win!');
        console.log('Scissor beats paper. You win!');
    }

    else if (pChoice == 'scissors' && compChoice == 'rock') {
        $(outcome).empty();
        $(outcome).append('Scissor loses to rock. You lose!');
        console.log('Scissor loses to rock. You lose!');
    }

    //player picks rock and computer picks scissor
    else if (pChoice == 'rock' && compChoice == 'scissors') {
        $(outcome).empty();
        $(outcome).append('Rock beats scissor. You win!');
        console.log('Rock beats scissor. You win!');
    }
}


