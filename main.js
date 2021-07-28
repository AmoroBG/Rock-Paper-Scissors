// Variables Declarations
const humanInput = document.getElementById("game-input")
const play = document.getElementById("play")
const result = document.getElementById("result")
const startGame = document.getElementById("start-game")
let computerPlay = ""
let humanPlay = ""
let win = ""
    // function computerScore()
function computerScore() {
    // Generate Random Number
    computerPlay = Math.floor(Math.random() * 3) + 1
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
    // if (!validateHumanInput()) {
    //     return false
    // }
    humanPlay = humanInput.value
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

// function validateHumanInput
function validateHumanInput() {
    if (humanInput.value < 1 || humanInput.value > 3) {
        alert("Your input must be between 1 and 3")
        humanInput.value = ""
        return false
    }
    return true
}
// Event Listeners
play.addEventListener("click", function() {
    if (!validateHumanInput()) {
        return false
    }
    playGame()
    humanInput.value = ""
    result.innerHTML = "<h2>" + win + "</h2>"
    play.classList.add("display-none")
    startGame.classList.remove("display-none")
})
startGame.addEventListener("click", function() {
    result.innerHTML = '<input type="number" id="game-input" placeholder="Enter a number between 1 and 3 to play ...">'
    startGame.classList.add("display-none")
    play.classList.remove("display-none")
})