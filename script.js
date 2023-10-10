let playerSelection = prompt("Enter Rock, Paper or Scissors to play the game.").toLowerCase();



let getComputerChoice = () => {
    let rand = Math.floor((Math.random() * 3))
    let choices = ["Rock", "scissors", "Paper"]
    return choices[rand].toLowerCase()
}
const computerSelection = getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a draw, try again!"
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "Congrats, you win!"
        } else {
            return "You lose! Paper covers rock :("
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock crushes scissors :("
        } else {
            return "Congrats, you win!"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Congrats, you win!"
        } else {
            return "You lose! Scissors slice up paper :("
        }
    }
}


console.log(playRound(playerSelection, computerSelection));


// compare playSelect to computerSelection
// if player == computer 
// return draw
// if player != computer
//     if player = Rock