document.getElementById("rock-btn").addEventListener("click", () => playRound("rock"));
document.getElementById("paper-btn").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors-btn").addEventListener("click", () => playRound("scissors"));

const result = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const getComputerChoice = () => {
    const choices = ["rock", "paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice)
{
    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        result.innerText = `It's a tie. Both chose ${humanChoice}`;
    }

    //Human Win
    else if 
    (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore ++;
        result.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if
    (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore ++;
        result.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if
    (humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore ++;
        result.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    //Computer Win
    else if 
    (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        result.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if
    (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        result.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else
    {
        computerScore++;
        result.innerText = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDiv.innerHTML = `<p>Score: You ${humanScore} - ${computerScore} Computer</p>`;
}
function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            alert ("Congratulations! You win!!");
        }
        else{
            alert("Game over!!! Computer Wins!!");
        }
    }
}