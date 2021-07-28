// Math.random() * (max - min) + min
// console.log(Math.floor(Math.random() * 3) + 1);
let computerPlay = Math.floor(Math.random() * 3) + 1
let humanPlay;
let win;
// function computerScore()
function computerScore() {
    if (computerPlay == 1) {
        computerPlay = "Rock"
    } else if (computerPlay == 2) {
        computerPlay = "Paper"
    } else {
        computerPlay = "Scissors"
    }
    console.log("Computer Play: " + computerPlay);
}
// function humanScore() 
function humanScore() {
    if (humanPlay == 1) {
        humanPlay = "Rock"
    } else if (humanPlay == 2) {
        humanPlay = "Paper"
    } else {
        humanPlay = "Scissors"
    }
    console.log("You Play: " + humanPlay);
}
// function playGame() 
function playGame() {
    computerScore()
    humanScore()
    if (computerPlay == "Rock" && humanPlay == "Rock") {
        win = "Draw"
    } else if (computerPlay == "Rock" && humanPlay == "Paper") {
        win = "You Won! - Computer Lost!"
    } else if (computerPlay == "Rock" && humanPlay == "Scissors") {
        win = "You Lost! - Computer Won!"
    } else if (computerPlay == "Paper" && humanPlay == "Rock") {
        win = "You Lost! - Computer Won!"
    } else if (computerPlay == "Paper" && humanPlay == "Paper") {
        win = "Draw!"
    } else if (computerPlay == "Paper" && humanPlay == "Scissors") {
        win = "You Won! - Computer Lost!"
    } else if (computerPlay == "Scissors" && humanPlay == "Rock") {
        win = "You Won! - Computer Lost!"
    } else if (computerPlay == "Scissors" && humanPlay == "Paper") {
        win = "You Lost! - Computer Won!"
    } else if (computerPlay == "Scissors" && humanPlay == "Scissors") {
        win = "Draw"
    }
    console.log(win);
}
playGame()