


function computerPlay()
{
    let i = Math.floor(Math.random() * 3)
    if(i===0)
    {
        return("Rock");
    }
    else if (i === 1)
    {
        return("Paper");
    }
    else 
    {
        return("Scissor");
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === "ROCK")
    {
        if(computerSelection === "Rock")
        {
            return("Tie");
        }
        if(computerSelection === "Scissor")
        {
            return("You win! Rock beats Scissor");
        }
        if(computerSelection === "Paper")
        {
            return("You lose! Paper beats Rock");
        }
    }
    if (playerSelection === "SCISSOR")
    {
        if(computerSelection === "Scissor")
        {
            return("Tie");
        }
        if(computerSelection === "Rock")
        {
            return("You lose! Rock beats Scissor");
        }
        if(computerSelection === "Paper")
        {
            return("You win! Scissor beats Paper");
        }
    }
    if (playerSelection === "PAPER")
    {
        if(computerSelection === "Paper")
        {
            return("Tie");
        }
        if(computerSelection === "Rock")
        {
            return("You win! Paper beats Rock");
        }
        if(computerSelection === "Scissor")
        {
            return("You lose! Scissor beats Paper");
        }
    }

}


function game()
{
    for (let i = 0; i<5; i++)
    {
        const computerSelection = computerPlay();
        const playerSelection = window.prompt("Enter your name: ");
        console.log(playRound(playerSelection,computerSelection));
    }
}


game();