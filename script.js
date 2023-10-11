// let playerSelection = prompt("Enter Rock, Paper or Scissors to play the game.").toLowerCase();



let getComputerChoice = () => {
    let rand = Math.floor((Math.random() * 3))
    let choices = ["Rock", "scissors", "Paper"]
    return choices[rand].toLowerCase()
}
// const computerSelection = getComputerChoice();

// let playRound = (playerSelection, computerSelection) => {
//     if (playerSelection === computerSelection) {
//         return "It's a draw, try again!"
//     } else if (playerSelection == "rock") {
//         if (computerSelection == "scissors") {
//             return "Congrats, you win!"
//         } else {
//             return "You lose! Paper covers rock :("
//         }
//     } else if (playerSelection == "scissors") {
//         if (computerSelection == "rock") {
//             return "You lose! Rock crushes scissors :("
//         } else {
//             return "Congrats, you win!"
//         }
//     } else if (playerSelection == "paper") {
//         if (computerSelection == "rock") {
//             return "Congrats, you win!"
//         } else {
//             return "You lose! Scissors slice up paper :("
//         }
//     }
// }
// let playRound = (playerSelection, computerSelection) => {
//     if (playerSelection === computerSelection) {
//         return "It's a draw, try again!"
//     } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
//         return "Congrats, you win!"
//     } else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper") {
//         return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`
//     }
// }
let computerSelection;
let playerSelection;
function game() {
    let userWins = {
        score: 0
    };
    let compWins = {
        score: 0
    };
    const winNum = 3;


    while (userWins.score < winNum && compWins.score < winNum) {
        let userInput = false;
        while (!userInput) {
            playerSelection = prompt("Enter Rock, Paper or Scissors to play the game.").toLowerCase();
            if (playerSelection.includes("rock") || playerSelection.includes("paper") || playerSelection.includes("scissors")) {
                userInput = true;
                break;
            } else {
                alert("You must enter either rock, paper or scissors!")
            }
        }
        computerSelection = getComputerChoice();

        let playRound = (playerSelection, computerSelection) => {
            if (playerSelection === computerSelection) {
                alert("It's a draw! Score: " + userWins.score + "to " + compWins.score)
                return "It's a draw, try again!"
            } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
                userWins.score += 1
                return `Congrats, you win this round!\n ${userWins.score} to ${compWins.score}`
            } else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper") {
                compWins.score += 1
                return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}! \n ${userWins.score} to ${compWins.score}`
            }
        }

        const result = playRound(playerSelection, computerSelection)
        console.log(result)
    }
    if (userWins.score >= winNum) {
        console.log("Congrats you win the game!")
    } else if (compWins.score >= winNum) {
        console.log("Sorry you lost this game! Try again.")
    }
}




game();

// compare playSelect to computerSelection
// if player == computer 
// return draw
// if player != computer
//     if player = Rock

// let scoreTrack = (p1, p2) => {
//     p1.score++;
//     if (p1 == winNum) {
//         console.log("Congrats you win the game!")
//     } else if (p2 == winNum) {
//         console.log("Sorry, you lost the game! Try again.")
//     }
// }