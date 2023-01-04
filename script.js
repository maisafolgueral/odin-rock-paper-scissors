let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score');

var options = ["pedra", "papel", "tesoura"];

function getComputerChoice(options) {
    var choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Empate";
    }
    else if(
        (playerSelection == "pedra" && computerSelection == "tesoura") ||
        (playerSelection == "tesoura" && computerSelection == "papel") ||
        (playerSelection == "papel" && computerSelection == "pedra")) {
            return "Jogador";
    }
    else {
        return "Computador";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Empate") {
        const p = document.createElement('p');
        p.innerText = "Deu empate!";
        outcomeDiv.appendChild(p);
    }
    else if(result == "Jogador") {
        const p = document.createElement('p');
        p.innerText = `Você venceu! ${playerSelection} derrotou ${computerSelection}`;
        outcomeDiv.appendChild(p);
        playerScore++;
    }
    else {
        const p = document.createElement('p');
        p.innerText = `Você perdeu! ${computerSelection} derrotou ${playerSelection}`;
        outcomeDiv.appendChild(p);
        computerScore++;
    }
}


function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Pedra Papel Tesoura");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

// with ui
const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `Você ganhou! ${playerScore} to ${computerScore}`;
        outcomeDiv.appendChild(h2);
    }

    if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `Você perdeu! ${playerScore} to ${computerScore}`;
        outcomeDiv.appendChild(h2);
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Pontuação - Jogador: ${playerScore}`;
    computerScoreSpan.innerText = `Pontuação - Computador: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(options);
    const playerSelection = 'pedra';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(options);
    const playerSelection = 'papel';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice(options);
    const playerSelection = 'tesoura';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
});