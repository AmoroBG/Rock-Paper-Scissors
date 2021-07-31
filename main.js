// Variables Declarations
let score
let humanChoice
let humanScore = 0
let computerScore = 0
let playCount = 0
let winner


let rock = document.getElementById("rock").addEventListener("click", function() {
    humanChoice = "Rock"
    console.log("You Chose: " + humanChoice);
    playGame()
})
let paper = document.getElementById("paper").addEventListener("click", function() {
    humanChoice = "Paper"
    console.log("You Chose: " + humanChoice);
    playGame()
})
let scissors = document.getElementById("scissors").addEventListener("click", function() {
    humanChoice = "Scissors"
    console.log("You Chose: " + humanChoice);
    playGame()
})


// function computerScore()
function computerPlay() {
    // Generate Random Number
    computerChoice = Math.floor(Math.random() * 3) + 1
    if (computerChoice === 1) {
        computerChoice = "Rock"
    } else if (computerChoice === 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    console.log("Computer Chose: " + computerChoice);
    return computerChoice
}

// function playGame() 
function playGame() {
    computerPlay()
    if (computerPlay == "Rock" && humanChoice == "Rock") {
        score = "None of you scored. Its a tie"
        humanScore = humanScore
        computerScore = computerScore
    } else if (computerChoice == "Rock" && humanChoice == "Paper") {
        score = "You Score a point!"
        humanScore += 1
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
        score = "Computer Score a point!"
        computerScore += 1
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
        score = "Computer Score a point!"
        computerScore += 1
    } else if (computerChoice == "Paper" && humanChoice == "Paper") {
        score = "None of you scored. Its a tie"
        humanScore = humanScore
        computerScore = computerScore
    } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
        score = "You Score a point!"
        humanScore += 1
    } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
        score = "You Score a point!"
        humanScore += 1
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
        score = "Computer Score a point!"
        computerScore += 1
    } else if (computerChoice == "Scissors" && humanChoice == "Scissors") {
        score = "None of you scored. Its a tie"
        humanScore = humanScore
        computerScore = computerScore
    }
    console.log("Score: " + score);
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    document.getElementById("human-score").innerText = humanScore
    document.getElementById("computer-score").innerText = computerScore
    document.getElementById("selection").innerHTML = score
    document.getElementById("selection").classList.remove("display-none")
    playCount += 1
    document.getElementById("play-count").innerText = playCount
    if (playCount == 5) {
        document.getElementById("play").classList.add("display-none")
        document.getElementById("play-count-section").classList.add("display-none")
        document.getElementById("game-over").classList.remove("display-none")
        if (humanScore > computerScore) {
            winner = "You Won!"
        } else if (humanScore < computerScore) {
            winner = "Computer Won"
        } else {
            winner = "You Draw"
        }
        document.getElementById("winner").innerText = winner
    }
}

// Play Again
document.getElementById("paly-again").addEventListener("click", function() {

    // history.go()
    // window.location.reload(true);
    location.reload();
    document.getElementById("play").classList.remove("display-none")
    document.getElementById("game-over").classList.add("display-none")

})