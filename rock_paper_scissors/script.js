const getComputerChoice = () => {
    const choices = ["rock", "paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice,computerChoice)
{
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return "It's a tie";
    }

    //Human Win
    else if 
    (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore ++;
        return "You win! Rock beats Scissors";
    }
    else if
    (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore ++;
        return "You win! Scissors beats Paper";
    }
    else if
    (humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore ++;
        return "You win! Paper beats Rock";
    }

    //Computer Win
    else if 
    (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        return "You lose! Rock beats Scissors";
    }
    else if
    (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        return "You lose! Scissors beats Paper";
    }
    else
    {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
}



function getHumanChoice() 
{
    const choice = prompt("Enter your choice (rock, paper, or scissors):");
    return choice || ""; // Fallback to an empty string if input is null
}


function playGame ()
{
    let i = 5;

    while (i--) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(`Round ${5 - i}: ${result}`);
        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Game over! The computer won.");
    } else {
        console.log("It's a tie overall!");
    }
}

playGame();