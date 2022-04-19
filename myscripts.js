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

let computerpoints = 0;
let humanpoints = 0; 

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === "ROCK")
    {
        if(computerSelection === "Rock")
        {
            roundscore.textContent = "TIE";
            return("Tie");
        }
        if(computerSelection === "Scissor")
        {
            humanpoints += 1;
            roundscore.textContent = "You win! Rock beats Scissor";
            return("You win! Rock beats Scissor");
        
        }
        if(computerSelection === "Paper")
        {
            computerpoints += 1;
            roundscore.textContent = "You lose! Paper beats Rock";
            return("You lose! Paper beats Rock");
       
        }
    }
    if (playerSelection === "SCISSOR")
    {
        if(computerSelection === "Scissor")
        {
            roundscore.textContent = "TIE";
            return("Tie");
        }
        if(computerSelection === "Rock")
        {
            computerpoints += 1;
            roundscore.textContent = "You lose! Rock beats Scissor";
            return("You lose! Rock beats Scissor");
        
        }
        if(computerSelection === "Paper")
        {
            humanpoints += 1;
            roundscore.textContent = "You win! Scissor beats Paper";
            return("You win! Scissor beats Paper");
            
        }
    }
    if (playerSelection === "PAPER")
    {
        
        if(computerSelection === "Paper")
        {
            roundscore.textContent = "TIE";
            return("Tie");
        }
        if(computerSelection === "Rock")
        {
            humanpoints += 1;
            roundscore.textContent = "You win! Paper beats Rock";
            return("You win! Paper beats Rock");
            
        }
        if(computerSelection === "Scissor")
        {
            computerpoints += 1;
            roundscore.textContent = "You lose! Scissor beats Paper";
            return("You lose! Scissor beats Paper");
            
           
        }
    }

}



let totalRounds = 0;
let playerSelection = "";

const btn1 = document.querySelector('.buttonrock');
btn1.addEventListener('click', () => 
{
    playerSelection = "rock";
    game()
})

const btn2 = document.querySelector('.buttonpaper');
btn2.addEventListener('click', () => 
{
    playerSelection = "paper";
    game()

})

const btn3 = document.querySelector('.buttonscissor');
btn3.addEventListener('click', () => 
{
    playerSelection = "scissor";
    game()
})


function game ()
{
    const computerSelection = computerPlay();

        console.log(playRound(playerSelection,computerSelection));
        totalRounds += 1;
        scorecard()
   
}

const PlayerClass = document.querySelector(".PlayerClass")
const divhumanpoints = document.createElement("div");
divhumanpoints.textContent = humanpoints;

PlayerClass.appendChild(divhumanpoints);


const ComputerClass = document.querySelector(".ComputerClass")
const divcomputerpoints = document.createElement("div");
divcomputerpoints.textContent = computerpoints;

ComputerClass.appendChild(divcomputerpoints);


const PointsClass = document.querySelector(".PointsClass")
let gameresult = document.createElement("h1");
PointsClass.appendChild(gameresult)
gameresult.textContent = "Play the game to decide the winner - Best of Five";



const IndividualRounds = document.querySelector(".IndividualRounds");
let roundscore = document.createElement("h3");
IndividualRounds.appendChild(roundscore);
roundscore.textContent = "Here is where you will get the result of each round";


function scorecard()
{
    if (totalRounds < 5)
    {
        gameresult.textContent = "Play the game to decide the winner - Best of Five";
        divhumanpoints.textContent = humanpoints;
        divcomputerpoints.textContent = computerpoints;
    }
    else
    {
        if (computerpoints > humanpoints)
        {
            gameresult.textContent= "The Computer Wins - Better Luck Next Time";

        }
        else if (humanpoints > computerpoints)
        {
            gameresult.textContent = "You Win - Way To Go! You deserved it!";
        }
        else 
        {
            gameresult.textContent = "TIE! Yeah ! You get another chance to win the game!";
        }
        computerpoints = 0;
        humanpoints = 0;
        totalRounds = 0;
        divhumanpoints.textContent = 0;
        divcomputerpoints.textContent = 0;
    }
}





