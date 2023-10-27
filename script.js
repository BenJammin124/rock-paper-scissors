// game();
let getComputerChoice = () => {
    let rand = Math.floor((Math.random() * 3))
    let choices = ["Rock", "scissors", "Paper"]
    return choices[rand].toLowerCase()
}

let computerSelection;
let playerSelection;

// function game() {
let userWins = {
    score: 0,
    display: document.querySelector('#pScore')
};
let compWins = {
    score: 0,
    display: document.querySelector('#cScore')
};
let winNum = 3;

let winneR = document.querySelector('#winner');
let roundW = document.querySelector('#roundW')
const options = document.querySelectorAll('#rock, #paper, #scissors');

options.forEach(option => {
    option.addEventListener('click', function (e) {
        console.log('click ' + e.target.id)
        computerSelection = getComputerChoice();
        playerSelection = e.target.id;
        const result = playRound(playerSelection, computerSelection)
        if (userWins.score >= winNum) {
            options.forEach(option => option.disabled = true);
            winneR.textContent = "Congrats you win the game!"
        } else if (compWins.score >= winNum) {

            options.forEach(option => option.disabled = true);
            winneR.textContent = "Sorry you lost this game! Try again."
        }
        console.log(result)
    })
})



let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        roundW.textContent = `It's a draw! Both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
        // return "It's a draw, try again!"
    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        userWins.score += 1;
        userWins.display.textContent = userWins.score;
        roundW.textContent = `You win this round!\n ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    } else if (playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "rock" && computerSelection == "paper") {
        compWins.score += 1;
        compWins.display.textContent = compWins.score;
        roundW.textContent = `You lose this round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`
    }

}

let winner = document.querySelector('#winNum');

const winningFunction = () => {
    const selectedOption = winner.options[winner.selectedIndex];
    winNum = selectedOption.value;
    reset();
}

winner.addEventListener('change', winningFunction)

let reset = () => {
    userWins.score = 0;
    compWins.score = 0;
    userWins.display.textContent = userWins.score;
    compWins.display.textContent = compWins.score;
    options.forEach(option => option.disabled = false)
    winneR.textContent = ""
}
let resetF = document.querySelector('#resetF')
resetF.addEventListener('click', reset)




// }






