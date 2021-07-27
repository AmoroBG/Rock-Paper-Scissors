// Math.random() * (max - min) + min
// console.log(Math.floor(Math.random() * 3) + 1);
let computerPlay = Math.floor(Math.random() * 3) + 1
let humanPlay;

function computerScore() {
    if (computerPlay == 1) {
        computerPlay = "Rock"
    } else if (computerPlay == 2) {
        computerPlay = "Paper"
    } else {
        computerPlay = "Scissors"
    }
    console.log(computerPlay);
}

function humanScore() {
    if (humanPlay == 1) {
        humanPlay = "Rock"
    } else if (humanPlay == 2) {
        humanPlay = "Paper"
    } else {
        humanPlay = "Scissors"
    }

}

function playGame() {
    computerScore()
    humanScore()

}